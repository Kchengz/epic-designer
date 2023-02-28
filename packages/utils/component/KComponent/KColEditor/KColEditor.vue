<template>
    <div>
        <div class="k-col-editor-item" v-for="(item, index) in colList" :key="index">
            <Number style="width:100%" v-model:value="item.componentProps.span" v-model="item.componentProps.span" min="1" max="24" />
            <div class="del-btn" v-if="colList.length > 1">
                <span @click="handleDelete(index)"> <span class="iconfont icon-shanchu"></span></span>
            </div>
        </div>
        <div class="add-btn" @click="handleAdd">添加</div>
    </div>
</template>
<script lang="ts" setup>
import { pluginManager, getUUID } from '../../../index'
import { NodeItem } from '../../../../types/kDesigner'
import { computed, PropType } from 'vue'

const Number = pluginManager.getComponent('number').component
const props = defineProps({
  value: {
    type: Array as PropType<NodeItem[]>,
    default: () => []
  }
})
const emit = defineEmits(['update:value'])
const colList = computed({
  get () {
    return props.value
  },
  set (e) {
    emit('update:value', e)
  }
})

/**
 * 新增栅格Col
 */
function handleAdd () {
  const colItem = {
    type: 'col',
    children: [],
    componentProps: {
      span: 12
    },
    id: getUUID()
  }
  colList.value.push(colItem)
}

/**
 * 删除栅格Col
 * @param index
 */
function handleDelete (index: number) {
  colList.value = colList.value.filter((item, i) => index !== i)
}
</script>
<style lang="less" scoped>
@primary-color: #13c2c2;

.k-col-editor-item {
    display: flex;
    align-items: center;
    padding-top: 6px;

    .del-btn {
        width: 50px;
        height: 100%;
        text-align: center;
        cursor: pointer;

        &:hover {
            color: #f22;
        }
    }

}

.add-btn {
    cursor: pointer;
    margin-top: 6px;
    color: @primary-color;
}
</style>
