<template>
  <div style="margin-top:24px">
    <div class="flex">
      <div class="attr-label" title="校验时机">
        校验时机
      </div>
      <div class="attr-input">
        <Select mode="multiple" multiple v-model="rule.trigger" :options="triggerOptions" placeholder="校验时机" />
      </div>
    </div>
    <div class="flex">
      <div class="attr-label" title="类型">
        自定义规则
      </div>
      <div class="attr-input">
        <Switch v-model="rule.isValidator" @change="handleUpdate" />
      </div>
    </div>
    <div class="flex" v-if="rule.isValidator">
      <div class="attr-label" title="校验函数">
        校验函数
      </div>
      <div class="attr-input">
        <Select v-model="rule.validator" :options="methodOptions" placeholder="校验函数" />
      </div>
    </div>

    <div v-else>
      <div class="flex">
        <div class="attr-label" title="类型">
          类型
        </div>
        <div class="attr-input">
          <Select v-model="rule.type" :options="typeOptions" placeholder="类型" />
        </div>
      </div>
      <div class="flex" v-if="rule.type === 'string'">
        <div class="attr-label" title="正则校验">
          正则校验
        </div>
        <div class="attr-input">
          <Input v-model="rule.pattern" @change="handleUpdate" placeholder="正则校验" />
        </div>
      </div>
      <div class="flex" v-if="lenTypeOptions.includes(rule.type ?? '')">
        <div class="attr-label" title="字段长度">
          字段长度
        </div>
        <div class="attr-input">
          <InputNumber :min="0" v-model="rule.len" @change="handleUpdate" placeholder="字段长度" />
        </div>
      </div>
      <div class="flex" v-if="lenTypeOptions.includes(rule.type ?? '')">
        <div class="attr-label" title="最小长度">
          最小长度
        </div>
        <div class="attr-input">
          <InputNumber :min="0" v-model="rule.min" @change="handleUpdate" placeholder="最小长度" />
        </div>
      </div>
      <div class="flex" v-if="lenTypeOptions.includes(rule.type ?? '')">
        <div class="attr-label" title="最大长度">
          最大长度
        </div>
        <div class="attr-input">
          <InputNumber :min="0" v-model="rule.max" @change="handleUpdate" placeholder="最大长度" />
        </div>
      </div>
    </div>

    <div class="flex">
      <div class="attr-label" title="校验文案">
        校验文案
      </div>
      <div class="attr-input">
        <Input v-model="rule.message" @change="handleUpdate" placeholder="请输入校验文案" />
      </div>
    </div>

    <!-- <Select v-model="rule.min" :options="typeOptions" placeholder="类型" /> -->
  </div>
</template>
<script lang="ts" setup>
import { FormItemRule } from './types'
import { watch, ref, computed, inject, PropType } from 'vue'
import { pluginManager, PageManager } from '../../../index'
const Input = pluginManager.getComponent('input')
const InputNumber = pluginManager.getComponent('number')
const Select = pluginManager.getComponent('select')
const Switch = pluginManager.getComponent('switch')
const pageManager = inject('pageManager', {}) as PageManager
const props = defineProps({
  rule: {
    type: Object as PropType<FormItemRule>,
    required: true
  }
})

const methodOptions = computed(() => {
  return Object.entries(pageManager.funcs.value)
    .filter(([key, value]) => typeof value === 'function')
    .map(([label]) => ({ label, value: label }))
})

const lenTypeOptions = ['string', 'number', 'url', 'array', 'email']
const triggerOptions = [{ label: 'change', value: 'change' }, { label: 'blur', value: 'blur' }]
const typeOptions = [
  { label: 'string', value: 'string' },
  { label: 'number', value: 'number' },
  { label: 'boolean', value: 'boolean' },
  { label: 'method', value: 'method' },
  { label: 'regexp', value: 'regexp' },
  { label: 'integer', value: 'integer' },
  { label: 'float', value: 'float' },
  { label: 'array', value: 'array' },
  { label: 'object', value: 'object' },
  // { label: 'enum', value: 'enum' },
  { label: 'date', value: 'date' },
  { label: 'url', value: 'url' },
  { label: 'hex', value: 'hex' },
  { label: 'email', value: 'email' },
  { label: 'any', value: 'any' }
]
const emit = defineEmits(['update:rule', 'change'])
const rule = ref<FormItemRule>({})
watch(() => props.rule, (e) => {
  rule.value = e
}, {
  deep: true,
  immediate: true
})

/**
 * 更新校验规则
 */
function handleUpdate () {
  const v = rule.value

  if (v.isValidator) {
    delete v.type
    delete v.pattern
    delete v.len
    delete v.min
    delete v.max
  } else {
    delete v.validator
  }
  emit('update:rule', v)
  emit('change', v)
}

</script>
