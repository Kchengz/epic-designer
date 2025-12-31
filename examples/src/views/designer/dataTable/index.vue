<script lang="ts" setup>
import type { PageSchema } from '@epic-designer/types';

import { EDesigner } from '@epic-designer/core';

/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e: PageSchema) {
  console.log(e);
}

const tableJson = [
  {
    foreignKey: '',
    primaryKey: 'ID',
    tableColumn: [
      { columnName: 'ID', columnRemark: 'ID' },
      {
        columnName: 'DEPOSIT_NO',
        columnRemark: '存单号',
      },
      {
        columnName: 'STORAGE_TIME',
        columnRemark: '存储期限',
      },
      {
        columnName: 'PAYMENT_METHOD',
        columnRemark: '付费方式',
      },
      {
        columnName: 'REPORT_ATTACHMENT',
        columnRemark: '农残报告',
      },
      {
        columnName: 'DEPOSIT_STATUS',
        columnRemark: '存单状态',
      },
      { columnName: 'REMARK', columnRemark: '备注' },
      {
        columnName: 'EXPIRATION_DATE',
        columnRemark: '到期时间',
      },
      { columnName: 'RENEW_YEAR', columnRemark: '续费年限' },
      { columnName: 'INPUT_IMG', columnRemark: '入库照片' },
      {
        columnName: 'WAREHOUSE_KEEPER',
        columnRemark: '仓管员',
      },
      { columnName: 'DIRECTOR', columnRemark: '负责人' },
      {
        columnName: 'BAILOR_SIGN',
        columnRemark: '寄存人签名',
      },
      {
        columnName: 'PROXY_PHONE',
        columnRemark: '代存客户手机号',
      },
      {
        columnName: 'PROXY_STORAGE',
        columnRemark: '是否为代存单',
      },
    ],
    tableName: 'DEPOSIT_RECEIPT',
    tableRemark: '存单信息',
    tableType: 'parent',
  },
];
</script>
<template>
  <EDesigner
    title="EpicDesigner基础用法示例"
    form-mode
    @save="handleSubmit"
    :table-json="tableJson"
  >
    <!-- <template #header-prefix>
      <div>
        欢迎使用EpicDesigner设计器
      </div>
    </template> -->
  </EDesigner>
</template>
