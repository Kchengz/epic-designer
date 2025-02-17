<template>
  <div>
    <div
      class="rule-item-main m-t-2 p-2 rounded border border-solid transition-all relative"
    >
      <template
        v-for="(componentSchema, index) in requiredRuleSchemas"
        :key="index"
      >
        <div
          v-if="componentSchema.show ? componentSchema.show() : true"
          class="flex m-t-2 first:m-0"
        >
          <div class="epic-attr-label">
            {{ componentSchema.label }}
          </div>
          <div class="flex-1">
            <ENode
              v-model="requiredRule[componentSchema.model]"
              :component-schema="{ ...componentSchema, noFormItem: true }"
              @change="handleUpdate"
            />
          </div>
        </div>
      </template>
    </div>
    <ERuleItem
      v-for="(item, index) in rules"
      :key="index"
      v-model:rule="rules[index]"
      @delete="handleDelete(index)"
      @change="handleUpdate"
    />
    <Button
      class="m-t-2"
      @click="handleAdd"
    >
      添加规则
    </Button>
  </div>
</template>
<script lang="ts" setup>
import { pluginManager, deepClone } from "@epic-designer/utils";
import { ref, watchEffect, PropType } from "vue";
import { FormItemRule } from "./types";
import ERuleItem from "./ERuleItem.vue";
import ENode from "../../components/node/index";
import { triggerOptions, typeOptions } from "./data";
import { useVModel } from "@vueuse/core";
const Button = pluginManager.getComponent("button");
const props = defineProps({
  ruleType: {
    type: String,
    default: "string",
  },
  modelValue: {
    type: Array as PropType<FormItemRule[] | undefined>,
    default: undefined,
  },
});
const emits = defineEmits(["update:modelValue"]);
const innerValue = useVModel(props, "modelValue", emits);
const requiredRule = ref<FormItemRule>({
  required: false,
  message: "必填项",
  type: props.ruleType,
  trigger: ["change"],
});

const requiredRuleSchemas = [
  {
    type: "switch",
    label: "必填项",
    model: "required",
  },
  {
    type: "select",
    label: "校验时机",
    model: "trigger",
    show() {
      return Boolean(requiredRule.value.required);
    },
    componentProps: {
      options: triggerOptions,
      placeholder: "校验时机",
      multiple: true,
      mode: "multiple",
    },
  },
  {
    type: "select",
    label: "类型",
    model: "type",
    show() {
      return Boolean(requiredRule.value.required);
    },
    componentProps: { options: typeOptions, placeholder: "类型" },
  },
  {
    type: "input",
    label: "校验信息",
    model: "message",
    show() {
      return Boolean(requiredRule.value.required);
    },
    componentProps: { placeholder: "校验信息" },
  },
];

const rules = ref<FormItemRule[]>([]);

watchEffect(() => {
  if (!innerValue.value) return;
  rules.value = [];
  innerValue.value.forEach((item) => {
    // 必填项单独存储
    if (typeof item.required !== "undefined") {
      requiredRule.value = item;
    } else {
      rules.value.push(item);
    }
  });
});

/**
 * 新增检验规则
 */
function handleAdd() {
  rules.value.push({
    message: "",
    type: props.ruleType,
    trigger: ["change"],
  });
  handleUpdate();
}

/**
 * 更新校验规则
 */
function handleUpdate() {
  // 存在必填项时,合并其他规则
  if (requiredRule.value.required) {
    innerValue.value = deepClone([...rules.value, requiredRule.value]);
    return;
  }

  // 存在其他规则
  if (rules.value.length) {
    innerValue.value = deepClone(rules.value);
    return;
  }

  // 没有任何校验规则
  innerValue.value = undefined;
}

/**
 * 通过下标删除校验规则项
 * @param index
 */
function handleDelete(index: number) {
  rules.value.splice(index, 1);
  handleUpdate();
}
</script>
