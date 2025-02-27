<script lang="ts" setup>
import { computed, PropType, ref, toRaw, watch } from 'vue';

import { pluginManager } from '@epic-designer/utils';

import EActionEditorItem from './src/EActionEditorItem.vue';
import EActionModal from './src/EActionModal.vue';

const props = defineProps({
  eventList: {
    default: () => [],
    type: Array as PropType<any>,
  },
  modelValue: {
    default: () => ({}),
    type: Object as PropType<any>,
  },
});
const emit = defineEmits(['update:modelValue']);
const Collapse = pluginManager.getComponent('Collapse');
const CollapseItem = pluginManager.getComponent('CollapseItem');

const EActionModalRef = ref<any>(null);
let editIndex = 0;
const modelValueComputed = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
const activeNames = ref<string[]>([]);

// 过滤无事件
const filterEventList = computed(() => {
  return props.eventList.filter(
    (item: { events: any[] | string }) => item.events.length,
  );
});

const allEvents = computed(() => {
  return props.eventList.flatMap((item: { events: any }) => item.events);
});

const events = ref<any>({});

allEvents.value.forEach((item: any) => {
  events.value[item.type] = computed({
    get() {
      return modelValueComputed.value?.[item.type] ?? [];
    },
    set(e) {
      if (e && e.length > 0) {
        modelValueComputed.value[item.type] = e.map((item) => toRaw(item));
      } else {
        // 事件动作为空时，则清除该事件列表
        delete modelValueComputed.value[item.type];
      }
    },
  });
});

// 监视 filterEventList.value 的变化
watch(
  () => filterEventList.value,
  (e) => {
    // 当 filterEventList.value 变化时执行回调函数
    if (e.length > 0) {
      // 如果 filterEventList.value 不为空数组
      // 过滤出满足条件的事件，并将它们的标题存储在 activeNames.value 中
      activeNames.value = e
        .filter((item) => {
          // 对于每个事件项，检查其包含的事件类型
          for (let i = 0; i < item.events.length; i++) {
            const type = item.events[i].type;
            // 如果 events.value[type] 不为空数组，则返回 true
            if (events.value[type].length > 0) {
              return true;
            }
          }
          // 如果事件项中没有任何一个事件类型满足条件，则返回 false
          return false;
        })
        .map((item) => item.title); // 将满足条件的事件项的标题映射成一个新的数组
    }
  },
  {
    // 配置选项
    immediate: true, // 立即执行一次回调函数
  },
);

let currentType: string = '';
/**
 * 打开动作配置窗口
 * @param type
 */
function handleOpen(type: string) {
  EActionModalRef.value?.handleOpen();
  currentType = type;
}

/**
 * 打开动作配置窗口-编辑
 * @param {number} index - 要编辑事件的索引
 * @param {string} type - 事件类型
 * @param {any} action - 要执行的动作
 */
function handleOpenEdit(index: number, type: string, action) {
  // 如果 EActionModalRef.value 不为 null 或 undefined，则调用其 handleOpenEdit 方法
  EActionModalRef.value?.handleOpenEdit(action);

  // 将要编辑的事件的索引赋值给 editIndex
  editIndex = index;

  // 将事件的类型赋值给 currentType
  currentType = type;
}

/**
 * 编辑事件的函数
 * @param {any} action - 动作数据
 */
function handleEdit(action: any) {
  // 将编辑后的动作替换掉 events.value[currentType][editIndex]
  events.value[currentType][editIndex] = action;

  // 更新 modelValueComputed.value[currentType]，使用新的数组代替原始数组
  modelValueComputed.value[currentType] = [
    ...(events.value[currentType] ?? []),
  ];
}

/**
 * 添加组件事件
 * @param {any} action - 要执行的动作
 */
function handleAdd(action: any) {
  modelValueComputed.value = {
    ...modelValueComputed.value,
    [currentType]: [...(events.value[currentType]?.value || []), action],
  };
}
</script>

<template>
  <Collapse
    v-model="activeNames"
    v-model:active-key="activeNames"
    v-model:expanded-names="activeNames"
  >
    <CollapseItem
      v-for="item in filterEventList"
      :key="item.title"
      :title="item.title"
      :header="item.title"
      :name="item.title"
    >
      <EActionEditorItem
        v-model="modelValueComputed"
        :item-events="item.events"
        :all-events="allEvents"
        :events="events"
        @add="handleOpen"
        @edit="handleOpenEdit"
      />
    </CollapseItem>
  </Collapse>
  <EActionModal ref="EActionModalRef" @add="handleAdd" @edit="handleEdit" />
</template>
