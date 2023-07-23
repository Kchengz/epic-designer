<template>
  <div>
    <div
      class="rule-item-main bg-white m-t-2 p-2 rounded  border border-solid border-gray-200 hover:border-primary transition-all relative"
    >
      <template
        v-for="(record, index) in requiredRuleSchemas"
        :key="index"
      >
        <div
          v-if="record.show ? record.show() : true"
          class="flex m-t-2 first:m-0"
        >
          <div class="attr-label">
            {{ record.label }}
          </div>
          <div class="flex-1">
            <ENode
              v-model="requiredRule[record.model]"
              :record="{ ...record, noFormItem: true }"
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
import { pluginManager, deepClone } from '@epic-designer/utils'
import { ref, watch, PropType } from 'vue'
import { FormItemRule } from './types'
import ERuleItem from './ERuleItem.vue'
import ENode from '../../components/node/index'
const Button = pluginManager.getComponent('button')
const props = defineProps({
  modelValue: {
    type: Array as PropType<FormItemRule[] | undefined>,
    default: undefined
  }
})
const requiredRule = ref<FormItemRule>({
  required: false,
  message: '必填项',
  trigger: ['change']
})

const triggerOptions = [{ label: 'change', value: 'change' }, { label: 'blur', value: 'blur' }]
const requiredRuleSchemas = [
  {
    type: 'switch',
    label: '必填项',
    model: 'required'
  },
  {
    type: 'select',
    label: '校验时机',
    model: 'trigger',
    show () { return Boolean(requiredRule.value.required) },
    componentProps: { options: triggerOptions, placeholder: '校验时机', multiple: true, mode: 'multiple' }
  },
  {
    type: 'input',
    label: '校验信息',
    model: 'message',
    show () { return Boolean(requiredRule.value.required) },
    componentProps: { placeholder: '校验信息' }
  }
]
const rules = ref<FormItemRule[]>([])
const emit = defineEmits(['update:modelValue'])

watch(() => props.modelValue, (e) => {
  if (e) {
    if (!e) return
    rules.value = []
    e.forEach(item => {
      // 必填项单独存储
      if (typeof item.required !== 'undefined') {
        requiredRule.value = item
      } else {
        rules.value.push(item)
      }
    })
  }
}, {
  immediate: true
})

/**
 * 新增检验规则
 */
function handleAdd () {
  rules.value.push({
    message: '',
    trigger: ['change']
  })
  handleUpdate()
}

/**
 * 更新校验规则
 */
function handleUpdate () {
  // 存在必填项时,合并其他规则
  if (requiredRule.value.required) {
    emit('update:modelValue', deepClone([...rules.value, requiredRule.value]))
    return
  }

  // 存在其他规则
  if (rules.value.length) {
    emit('update:modelValue', deepClone(rules.value))
    return
  }

  // 没有任何校验规则
  emit('update:modelValue', undefined)
}

/**
 * 通过下标删除校验规则项
 * @param index
 */
function handleDelete (index: number) {
  rules.value.splice(index, 1)
  handleUpdate()
}
</script>
