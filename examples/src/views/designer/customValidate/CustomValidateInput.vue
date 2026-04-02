<script lang="ts" setup>
import { computed, useAttrs } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    hidden?: boolean;
    modelValue?: string;
    placeholder?: string;
    readonly?: boolean;
  }>(),
  {
    disabled: false,
    hidden: false,
    modelValue: '',
    placeholder: '自定义校验组件',
    readonly: false,
  },
);

const emit = defineEmits([
  'blur',
  'change',
  'check',
  'focus',
  'input',
  'update:modelValue',
]);

const attrs = useAttrs();

const innerValue = computed(() => props.modelValue ?? '');

function emitCheck(value: string) {
  const passed = value === 'ok';
  emit('check', {
    message: passed ? '校验通过' : 'check不通过',
    result: passed,
  });
}

function handleInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);
  emit('input', event);
  emitCheck(value);
}

function handleChange(event: Event) {
  emit('change', event);
  emitCheck((event.target as HTMLInputElement).value);
}

function handleBlur(event: FocusEvent) {
  emit('blur', event);
  emitCheck((event.target as HTMLInputElement).value);
}

function handleFocus(event: FocusEvent) {
  emit('focus', event);
}
</script>

<template>
  <div
    v-show="!props.hidden"
    class="custom-validate-input"
    :class="{
      'is-disabled': props.disabled,
      'is-readonly': props.readonly,
    }"
  >
    <input
      v-bind="attrs"
      class="custom-validate-input__control"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :readonly="props.readonly"
      :value="innerValue"
      type="text"
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
      @input="handleInput"
    />
  </div>
</template>

<style scoped>
.custom-validate-input {
  width: 100%;
}

.custom-validate-input__control {
  box-sizing: border-box;
  width: 100%;
  min-height: 32px;
  padding: 6px 12px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  outline: none;
  background: #fff;
  color: #101828;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.custom-validate-input__control:focus {
  border-color: #1677ff;
  box-shadow: 0 0 0 3px rgb(22 119 255 / 12%);
}

.custom-validate-input.is-disabled .custom-validate-input__control {
  cursor: not-allowed;
  background: #f5f5f5;
  color: #98a2b3;
}

.custom-validate-input.is-readonly .custom-validate-input__control {
  background: #f8fafc;
}
</style>
