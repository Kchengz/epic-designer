import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('./card'),
  defaultSchema: {
    label: '卡片布局',
    type: 'card',
    icon: 'icon-xiala',
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
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
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
    ]
  }
} as ComponentConfigModel
