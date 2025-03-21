<script lang="ts" setup>
import type {
  ComponentSchema,
  EpicNodeInstance,
  FormDataModel,
} from '@epic-designer/types';

import type { AsyncComponentLoader, VNode } from 'vue';

import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  provide,
  reactive,
  Ref,
  renderSlot,
  shallowRef,
  Slots,
  useAttrs,
  watch,
} from 'vue';

import {
  capitalizeFirstLetter,
  deepClone,
  deepCompareAndModify,
  deepEqual,
  getValueByPath,
  PageManager,
  pluginManager,
  setValueByPath,
} from '@epic-designer/utils';

import dynamicFormItem from './dynamicFormItem.vue';

defineOptions({
  name: 'EpicNode',
});

const props = defineProps<{
  componentSchema: ComponentSchema;
  modelValue?: any;
  name?: string;
  resetFormData?: boolean;
  ruleField?: string[];
}>();

// 定义组件的事件
const emit = defineEmits(['update:modelValue', 'change']);

const nodeInstance = getCurrentInstance();

// 表单formData数据
let formData = inject('formData', reactive({})) as FormDataModel;

const slots = inject('slots', {}) as Slots;
// 接收页面管理对象
const pageManager = inject('pageManager', {}) as PageManager;
// 上级组件注入的disabled状态
const disabled = inject<Ref<boolean> | { value: false }>('disabled', {
  value: false,
});
// 校验前缀字段
const ruleFieldPrefix = inject<any[] | null>('ruleFieldPrefix', null);
// 重置表单数据，不设置到表单formData数据
const resetFormDataInject = inject<boolean>('resetFormData', false);

// 内部schema数据
const innerSchema = reactive<ComponentSchema>(deepClone(props.componentSchema));

// 双向绑定Value
const innerValue = computed({
  get() {
    return getBindValue();
  },
  set: handleUpdate,
});
// 设计模式模式下，添加字段后缀
addDesignModeSuffix();

// 监听 props.componentSchema 的变化，并在变化时调用 deepCompareAndModify 方法更新内部schema数据
watch(
  () => props.componentSchema,
  (componentSchema) => {
    // 深度比较对象属性值是否变更, 忽略 children 节点
    if (deepEqual(innerSchema, componentSchema, ['children'])) {
      return;
    }
    deepCompareAndModify(innerSchema, deepClone(componentSchema));
    addDesignModeSuffix();
  },
  {
    deep: true,
  },
);

/**
 * 获取表单项 数据
 */
function getBindValue() {
  return props.modelValue ?? getValueByPath(formData, innerSchema.field ?? '');
}

/**
 * 在设计模式下为innerSchema.field添加特殊后缀。
 * 此函数用于标识在设计模式下使用的字段，通过添加'-design-mode'后缀，
 * 可以区分运行时和设计时的数据字段，以便在设计工具中进行特殊处理。
 *
 * @remarks
 * 此函数仅在pageManager的isDesignMode为true时执行，确保只在设计模式下影响字段命名。
 * 如果innerSchema.field已经是字符串类型，则直接追加后缀，否则不进行处理。
 */
function addDesignModeSuffix() {
  // 检查当前是否处于设计模式
  // 检查是否是设计模式
  if (
    pageManager.isDesignMode.value && // 判断innerSchema.field的类型，仅在是字符串类型时追加后缀
    // 检查 innerSchema.field 是否为字符串类型
    typeof innerSchema.field === 'string'
  ) {
    // 给字段名添加设计模式后缀
    // 给 innerSchema.field 添加后缀 '-design-mode'
    innerSchema.field += '-design-mode';
  }
}

// 重置表单数据，移除表单数据引用
if (props.resetFormData || resetFormDataInject) {
  formData = {};
}

// 传递额外的attrs
const attrs = useAttrs();
if (Object.keys(attrs).length > 0) {
  provide('nodeAttrs', attrs);
}

// 定义组件及组件props字段
const component = shallowRef<any>(null);

const show = computed(() => {
  // hidden 属性优先级最高
  if (innerSchema.componentProps?.hidden) {
    return false;
  }

  // show属性为boolean类型则直接返回
  if (typeof innerSchema.show === 'boolean') {
    return innerSchema.show;
  }

  return innerSchema.show?.({ values: formData }) ?? true;
});

// 获取FormItemProps
const getFormItemProps = computed<ComponentSchema>(() => {
  const rules =
    show.value &&
    innerSchema.rules?.map((item) => ({
      ...item,
      validator: item.validator && pageManager.funcs.value[item.validator], // 自定义校验函数
    }));

  // 获取校验字段
  let model: string | string[] | undefined = innerSchema.field;

  if (props.ruleField) {
    // 设置为父级传入的校验字段
    model = props.ruleField;
  } else if (ruleFieldPrefix && innerSchema.field) {
    // 添加校验字段前缀
    model = deepClone(ruleFieldPrefix) as [];
    model.push(innerSchema.field);
  }

  const formItemProps = {
    ...innerSchema,
    field: model,
    rule: rules,
    rules,
  } as ComponentSchema;

  // 移除元素只读属性 children
  if (formItemProps.children) {
    delete formItemProps.children;
  }
  return formItemProps;
});

// 获取组件原配置
const getComponentConfing = computed(() => {
  return pluginManager.getComponentConfingByType(innerSchema.type) ?? null;
});

// 获取组件props数据
const getComponentProps = computed(() => {
  const bindModel = getComponentConfing.value?.bindModel ?? 'modelValue';

  const onEvent: { [type: string]: Function } = {};
  innerSchema.on &&
    Object.keys(innerSchema.on).forEach((item) => {
      onEvent[`on${capitalizeFirstLetter(item)}`] = (...args) =>
        pageManager.doActions(innerSchema.on![item], ...args);
    });

  return {
    ...props,
    ...innerSchema.componentProps,
    bindModel,
    disabled: disabled?.value || innerSchema.componentProps?.disabled,
    ...onEvent,
  };
});

// 添加组件实例
function handleAddComponentInstance(vNode?: VNode) {
  const instance = (vNode?.component ?? nodeInstance) as EpicNodeInstance;
  if (!innerSchema.id || !instance) {
    return;
  }

  // 确保 instance.exposed 对象存在
  instance.exposed ??= {};

  // 输入组件则添加setValue方法
  if (innerSchema.input) {
    instance.exposed.setValue = handleUpdate;
    instance.exposed.getValue = getBindValue;
  }

  instance.exposed.schema = innerSchema;

  // 添加属性设置方法
  instance.exposed.setAttr = (key: string, value: any) => {
    // 确保 componentProps 属性对象存在
    innerSchema.componentProps ??= {};
    return (innerSchema.componentProps[key] = value);
  };

  // 添加获取设置方法
  instance.exposed.getAttr = (key: string) => {
    return innerSchema.componentProps?.[key];
  };

  pageManager.addComponentInstance(innerSchema.id, instance);
}

/**
 * 移除组件实例
 */
function handleVnodeUnmounted() {
  if (innerSchema.id) {
    // 移除实例 及 formItem实例
    pageManager.removeComponentInstance(innerSchema.id);
    if (
      getComponentConfing.value?.defaultSchema.input &&
      innerSchema.noFormItem !== true
    ) {
      pageManager.removeComponentInstance(`${innerSchema.id}_formItem`);
    }
  }
}

/**
 * 初始化组件
 */
async function initComponent() {
  // 如果存在默认值，则会在初始化之后赋值
  if (innerSchema.componentProps?.defaultValue !== undefined) {
    const defaultValue = pageManager.isDesignMode.value
      ? innerSchema.componentProps?.defaultValue
      : (formData[innerSchema.field!] ??
        innerSchema.componentProps?.defaultValue);

    handleUpdate(deepClone(defaultValue));
  }

  // 组件为slot类型时
  if (innerSchema.type === 'slot') {
    const slotName = innerSchema.slotName;
    if (!slotName) return;

    component.value = defineComponent({
      setup() {
        return () =>
          renderSlot(slots, slotName, {
            componentSchema: innerSchema,
            model: formData,
          });
      },
    });

    return;
  }

  // 内置组件
  const cmp = pluginManager.getComponent(innerSchema.type);
  // 内部不存在组件
  if (!cmp) {
    console.error(`组件${innerSchema.type}未注册`);
    return;
  }

  // 如果数据项为函数，则判定为懒加载组件
  if (typeof cmp === 'function') {
    const res = await (cmp as AsyncComponentLoader)();
    component.value = res.default ?? res;
  } else {
    // 否则为预加载组件
    component.value = cmp;
  }
}

/**
 * 通过函数更新值
 * @param value value值
 */
function handleUpdate(value: any) {
  const oldValue = getBindValue();
  // 值相同时,无需重复更新数据
  if (value === oldValue) {
    return;
  }
  if (innerSchema.field) {
    setValueByPath(formData, innerSchema.field, value);
  }
  emit('update:modelValue', value);
  emit('change', value);
}

let oldData: null | string = null;
// 需要监听值变化，重新渲染组件
watch(
  () => innerSchema,
  (newVal) => {
    // 过滤所有子节点
    const newData = JSON.stringify({ ...newVal, children: undefined });
    if (newData === oldData) {
      return false;
    }
    oldData = newData;
    initComponent();
  },
  {
    deep: true,
    immediate: true,
  },
);

// 添加组件实例
handleAddComponentInstance();

// 组件卸载时移除组件实例
onBeforeUnmount(handleVnodeUnmounted);
</script>
<template>
  <dynamicFormItem
    v-if="component && show"
    :has-form-item="
      innerSchema.noFormItem !== true &&
      getComponentConfing?.defaultSchema.input
    "
    :form-item-props="getFormItemProps"
  >
    <component
      :is="component"
      v-bind="{ ...getComponentProps }"
      v-model:[getComponentProps.bindModel]="innerValue"
      :model="formData"
      @vue:mounted="handleAddComponentInstance"
    >
      <!-- 嵌套组件递归 start -->
      <!-- 渲染子组件 start -->
      <template #node="data">
        <EpicNode v-bind="data" />
      </template>
      <!-- 渲染子组件 end -->
      <!-- 渲染布局设计子组件列表 start -->
      <template #edit-node>
        <slot name="edit-node"></slot>
      </template>
      <!-- 渲染布局设计子组件列表 end -->
    </component>
  </dynamicFormItem>
</template>
