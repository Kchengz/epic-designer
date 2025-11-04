import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./select'),
  config: {
    attribute: [
      {
        field: 'field',
        label: '字段名',
        type: 'input',
      },
      {
        field: 'label',
        label: '标题',
        type: 'input',
      },
      {
        field: 'componentProps.defaultValue',
        label: '默认值',
        type: 'select',
      },
      {
        field: 'componentProps.placeholder',
        label: '占位内容',
        type: 'input',
      },
      {
        componentProps: {
          clearable: true,
          options: [
            {
              label: '大号',
              value: 'large',
            },
            {
              label: '中等',
              value: 'default',
            },
            {
              label: '小型',
              value: 'small',
            },
          ],
          placeholder: '请选择',
        },
        field: 'componentProps.size',
        label: '尺寸',
        type: 'select',
      },
      {
        field: 'componentProps.multiple',
        label: '可多选',
        onChange: ({ value, values }) => {
          values.componentProps.defaultValue = value ? [] : null;
        },
        type: 'switch',
      },
      {
        field: 'componentProps.collapseTags',
        label: '多选隐藏',
        show: ({ values }) => {
          return values.componentProps.multiple;
        },
        type: 'switch',
      },
      {
        field: 'componentProps.collapseTagsTooltip',
        label: '隐藏提示',
        show: ({ values }) => {
          return (
            values.componentProps.multiple && values.componentProps.collapseTags
          );
        },
        type: 'switch',
      },
      {
        field: 'componentProps.reserveKeyword',
        label: '保留搜索关键字',
        show: ({ values }) => {
          return values.componentProps.multiple;
        },
        type: 'switch',
      },
      {
        componentProps: {
          options: [
            {
              label: 'success',
              value: 'success',
            },
            {
              label: 'info',
              value: 'info',
            },
            {
              label: 'warning',
              value: 'warning',
            },
            {
              label: 'danger',
              value: 'danger',
            },
          ],
        },
        defaultValue: 'info',
        field: 'componentProps.tagType',
        label: '标签类型',
        show: ({ values }) => {
          return values.componentProps.multiple;
        },
        type: 'select',
      },
      {
        field: 'componentProps.multipleLimit',
        label: '多选限制',
        show: ({ values }) => {
          return values.componentProps.multiple;
        },
        type: 'number',
      },
      {
        componentProps: {
          options: [
            {
              label: 'light',
              value: 'light',
            },
            {
              label: 'dark',
              value: 'dark',
            },
          ],
        },
        field: 'componentProps.effect',
        label: '提示主题',
        type: 'select',
      },
      {
        field: 'componentProps.filterable',
        label: '可筛选',
        type: 'switch',
      },
      {
        field: 'componentProps.allowCreate',
        label: '允许创建条目',
        type: 'switch',
      },
      {
        componentProps: {
          options: [
            {
              label: 'top',
              value: 'top',
            },
            {
              label: 'top-start',
              value: 'top-start',
            },
            {
              label: 'top-end',
              value: 'top-end',
            },
            {
              label: 'bottom',
              value: 'bottom',
            },
            {
              label: 'bottom-start',
              value: 'bottom-start',
            },
            {
              label: 'bottom-end',
              value: 'bottom-end',
            },
            {
              label: 'left',
              value: 'left',
            },
            {
              label: 'left-start',
              value: 'left-start',
            },
            {
              label: 'left-end',
              value: 'left-end',
            },
            {
              label: 'right',
              value: 'right',
            },
            {
              label: 'right-start',
              value: 'right-start',
            },
            {
              label: 'right-end',
              value: 'right-end',
            },
          ],
        },
        defaultValue: 'bottom-start',
        field: 'componentProps.placement',
        label: '下拉框位置',
        type: 'select',
      },
      {
        field: 'componentProps.fitInputWidth',
        label: '下拉框宽度与输入框相同',
        type: 'switch',
      },
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'componentProps.noDataText',
        label: '无数据时文本',
        type: 'input',
      },
      {
        field: 'componentProps.clearable',
        label: '可清空',
        type: 'switch',
      },
      {
        field: 'componentProps.disabled',
        label: '禁用',
        type: 'switch',
      },
      {
        field: 'componentProps.hidden',
        label: '隐藏',
        type: 'switch',
      },
      {
        description: '配置选项',
        field: 'componentProps.options',
        label: '选项管理',
        layout: 'vertical',
        type: 'EOptionsEditor',
      },
      {
        description: '校验规则需要配合表单使用',
        field: 'rules',
        label: '表单校验',
        layout: 'vertical',
        type: 'ERuleEditor',
      },
    ],
    event: [
      {
        description: '值变化时',
        type: 'change',
      },
    ],
  },
  defaultSchema: {
    componentProps: {
      effect: 'light',
      options: [
        {
          label: '选项1',
          value: '选项1',
        },
        {
          label: '选项2',
          value: '选项2',
        },
      ],
      placeholder: '请选择',
      placement: 'bottom-start',
      size: 'default',
    },
    field: 'select',
    input: true,
    label: '选择框',
    type: 'select',
  },
  groupName: '表单',
  icon: 'icon--epic--select',
  sort: 900,
} as ComponentConfigModel;
