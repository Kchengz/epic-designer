<template>
    <ProTable ref="proTableRef" v-if="visible" :requestApi="getRows" :initParam="initParam" :border="false"
      :table-layout="fixed">
        <template #tableHeader>

            <el-button v-for="(btn, i) in record.componentProps.tableButtons" :key="i" v-show="!btn.hidden"
                :type="btn.type"
                :link="btn.type == 'link' ? true : false" :size="btn.size" :round="btn.round" :disable="btn.disabled"
                @click="handleAction(btn.actions)">{{ btn.label }}</el-button>
        </template>

        <template #operation="scope">
            <el-button v-for="(btn, i) in record.componentProps.rowButtons" :key="i" v-show="!btn.hidden" :type="btn.type"
                :link="btn.type == 'link' ? true : false" :size="btn.size" :round="btn.round" :disable="btn.disabled"
                @click="handleRowClickAction(btn.actions, scope.row, record.id)">{{ btn.label }}</el-button>
        </template>
    </ProTable>
</template>

<script lang="ts" setup>
import { ElFormItem, ElInput } from 'element-plus'
import { ref, toRefs, reactive, unref, inject, useAttrs, watchEffect, computed, onMounted, watch, nextTick } from 'vue'
import { handleAction, handleRowClickAction } from '../util'
import ProTable from '@/components/ProTable/index.vue'
import { getRows } from '@/api/modules/system'

import { enrichButtonActions } from '@/utils/buttonActions'
import { enrichDataBindings } from '@/utils/enrichDataBinding'

import ContextStore from '@/stores/modules/context'
const prop = defineProps(['record'])
const attrs = useAttrs()
console.log('表格组件record:' + JSON.stringify(prop))
console.log('表格组件attrs:' + JSON.stringify(attrs))

const visible = ref(true)

let link
if (attrs.link_filter) {
  console.log('初始关联过滤条件:' + attrs.link_filter + ';' + (typeof attrs.link_filter))

  // 需要先动态绑定先
  const context = ContextStore()
  const initFilter = JSON.parse(attrs.link_filter)
  const parsed_filter = enrichDataBindings(initFilter, { ...context })

  // console.log("绑定后的值:" + parsed_filter )
  link = parsed_filter // [{"table":"plan","where":[{"field":"name","value": "{{ $.CurrentRow.name }}" }]}]
  // console.log("初始过滤条件2:" + initFilter  + ";" + (typeof initFilter) )
}
const initParam = reactive({ tableName: prop.record.tableName, __associations__: link })

const formData = ref()
const store = ContextStore()

const columns = ref([])
columns.value = prop.record.componentProps.columns.map(col => {
  if (col.search == 'input') col.search = { el: 'input' }
  if (col.search == 'select') {
    col.search = { el: 'select' }
    // col.enum = [{label:'shanghai', value:'上海'}]
  }
})
// if(prop.record.componentProps.selection){
//    console.log("增加第一列")
//    columns.value.push({"type":'selection'})
// } {{  $["xn2d10dc-a790-4072-b3db-674be7700e8b"].outputs.rows[0].category }}

const proTableRef = ref()
/* prop.record.componentProps.columns.forEach(c => {
    let col = { prop: c.prop, label: c.label, width: c.width || 90 }
    if (c.sortable) {
        col.search = { el: "input" }
    }
    columns.value.push(col)
})
//if (prop.options.showButtonsColumn)
console.log("columns:" + JSON.stringify( columns.value))
columns.value.push({ prop: "comments", search: { el: "input" }, label: "备注",  width: "90" })
//columns.value.push({ prop: "operation", isShow:true, label: "操作", fixed: "right", width: "130" })
console.log("columns:" + JSON.stringify( columns.value)) */

onMounted(() => {
  // console.log(`${prop.model}引用:` + proTableRef.value)
  console.log('表名:' + prop.record.id)

  store.widgets[prop.record.id] = {
    getTableList: proTableRef.value!.getTableList,
    pageable: proTableRef.value!.pageable,
    tableData: proTableRef.value!.tableData,
    selection: proTableRef.value!.selection,
    data: proTableRef.value!.data
  }
  Object.keys(proTableRef.value).forEach(key => {
    console.log('key' + key + ';tableData:' + typeof (proTableRef.value!.getTableList))
  })
})

/* 改为/page/:id之后似乎不需要这个
watch(
    () => prop.record.id,  //这里的watch不太友好，之后需要优化
    async (to, from) => {
        console.log("from:" + from + ";to:" + to)
        initParam.tableName = prop.record.tableName

        visible.value = false
        columns.value = prop.record.componentProps.columns.map(col => {
            if( col.search == 'input') col.search = {el: 'input'}
            if( col.search == 'select'){
                col.search = {el: 'select'}
                //col.enum = [{label:'shanghai', value:'上海'}]
            }
        })
        nextTick( () =>{
            visible.value = true
            //proTableRef.value!.getTableList()

        })

    },
    {deep: true}
) */

// const getUUID = (randomLength = 10): string => {
//  return Number(Math.random().toString().substring(3, randomLength) + Date.now()).toString(36)
// }

</script>
