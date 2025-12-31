import type { ComponentConfigModel } from '@epic-designer/types';

export default {
  component: () => import('./select'),
  config: {
    attribute: [
      {
        field: 'field',
        label: '数据字段',
        type: 'EpField',
      },
      {
        field: 'label',
        label: '标题',
        type: 'input',
      },
      {
        field: 'props.defaultValue',
        label: '默认值',
        type: 'select',
      },
      {
        field: 'props.placeholder',
        label: '占位内容',
        type: 'input',
      },
      {
        field: 'props.size',
        label: '尺寸',
        props: {
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
        type: 'select',
      },
      {
        field: 'props.multiple',
        label: '可多选',
        onChange: ({ value, values }) => {
          values.props.defaultValue = value ? [] : null;
        },
        type: 'switch',
      },
      {
        field: 'props.collapseTags',
        label: '多选隐藏',
        show: ({ values }) => {
          return values.props.multiple;
        },
        type: 'switch',
      },
      {
        field: 'props.collapseTagsTooltip',
        label: '隐藏提示',
        show: ({ values }) => {
          return values.props.multiple && values.props.collapseTags;
        },
        type: 'switch',
      },
      {
        field: 'props.reserveKeyword',
        label: '保留搜索关键字',
        show: ({ values }) => {
          return values.props.multiple;
        },
        type: 'switch',
      },
      {
        defaultValue: 'info',
        field: 'props.tagType',
        label: '标签类型',
        props: {
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
        show: ({ values }) => {
          return values.props.multiple;
        },
        type: 'select',
      },
      {
        field: 'props.multipleLimit',
        label: '多选限制',
        show: ({ values }) => {
          return values.props.multiple;
        },
        type: 'number',
      },
      {
        field: 'props.effect',
        label: '提示主题',
        props: {
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
        type: 'select',
      },
      {
        field: 'props.filterable',
        label: '可筛选',
        type: 'switch',
      },
      {
        field: 'props.allowCreate',
        label: '允许创建条目',
        type: 'switch',
      },
      {
        defaultValue: 'bottom-start',
        field: 'props.placement',
        label: '下拉框位置',
        props: {
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
        type: 'select',
      },
      {
        field: 'props.fitInputWidth',
        label: '下拉框宽度与输入框相同',
        type: 'switch',
      },
      {
        field: 'props.noDataText',
        label: '无数据时文本',
        props: {
          placeholder: '请输入',
        },
        type: 'input',
      },
      {
        field: 'props.clearable',
        label: '可清空',
        type: 'switch',
      },
      {
        field: 'props.disabled',
        label: '禁用',
        type: 'switch',
      },
      {
        field: 'props.hidden',
        label: '隐藏',
        type: 'switch',
      },
      {
        description: '配置选项',
        field: 'props.options',
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
    field: 'select',
    input: true,
    label: '选择框',
    props: {
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
    type: 'select',
  },
  groupName: '表单',
  icon: 'icon--epic--select',
  sort: 900,
} as ComponentConfigModel;
