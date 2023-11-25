import { type ComponentConfigModel } from '@epic-designer/utils'
export default {
  component: () => import('./card'),
  defaultSchema: {
    label: '卡片布局',
    type: 'card',
    icon: 'epic-icon-qiapian',
    children: [],
    componentProps: {
      shadow: 'hover'
    }
  },
  config: {
    attribute: [
      {
        label: '标题',
        type: 'input',
        field: 'label'
      },
      {
        label: '阴影时机',
        type: 'select',
        defaultValue: 'always',
        componentProps: {
          options: [
            {
              label: 'always',
              value: 'always'
            },
            {
              label: 'hover',
              value: 'hover'
            },
            {
              label: 'never',
              value: 'never'
            }
          ],
          placeholder: '请选择'
        },
        field: 'componentProps.shadow'
      },
      {
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
      }
    ]
  }
} as ComponentConfigModel
