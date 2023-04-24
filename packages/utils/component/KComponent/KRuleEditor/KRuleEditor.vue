<template>
  <div>
    <div class="flex">
      <div class="attr-label">
        必填项
      </div>
      <div class="attr-value">
        <Switch v-model="requiredRule.required" @change="handleUpdate" />
      </div>
    </div>
    <div class="flex" v-show="requiredRule.required">
      <div class="attr-label">
        校验时机
      </div>
      <div class="attr-value">
        <Select mode="multiple" multiple v-model="requiredRule.trigger" :options="triggerOptions" placeholder="校验时机" />
      </div>
    </div>

    <div class="flex" v-show="requiredRule.required">
      <div class="attr-label">
        提示信息
      </div>
      <div class="attr-value">
        <Input v-model="requiredRule.message" placeholder="必填校验提示信息" @change="handleUpdate" />
      </div>
    </div>

    <KRuleItem v-for="(item, index) in rules" v-model:rule="rules[index]" @change="handleUpdate" :key="index" />
    <Button @click="handleAdd">添加</Button>
  </div>
</template>
<script lang="ts" setup>
import { pluginManager, deepClone } from '../../../index'
import { ref, watch, PropType } from 'vue'
import { FormItemRule } from './types'
import KRuleItem from './KRuleItem.vue'
const Input = pluginManager.getComponent('input')
const Switch = pluginManager.getComponent('switch')
const Button = pluginManager.getComponent('button')
const Select = pluginManager.getComponent('select')
const props = defineProps({
  modelValue: {
    type: Array as PropType<FormItemRule[] | undefined>,
    default: null
  }
})
const requiredRule = ref<FormItemRule>({
  required: false,
  message: '必填项',
  trigger: ['change']
})

const triggerOptions = [{ label: 'change', value: 'change' }, { label: 'blur', value: 'blur' }]

const rules = ref<FormItemRule[]>([])
const emit = defineEmits(['update:modelValue'])

watch(() => props.modelValue, (e) => {
  if (e) {
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
    type: 'string',
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
</script>
