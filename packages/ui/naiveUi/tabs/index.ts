import { type ComponentConfigModel } from '@epic-designer/utils/pluginManager'
export default {
  component: () => import('./tabs'),
  defaultSchema: {
    label: '标签页',
    type: 'tabs',
    icon: 'icon-xiala',
    field: 'tabs',
    children: [
      {
        label: '标签1',
        type: 'tab-pane',
        children: [],
        id: '1'
      },
      {
        label: '标签2',
        type: 'tab-pane',
        children: [],
        id: '2'
      }
    ],
    componentProps: {
      defaultValue: '1'
    }
  },
  config: {
    attribute: [
      {
        label: '标签页配置',
        type: 'ETabPaneEditor',
        field: 'children'
      },
      {
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
      }
    ],
    event: [
      {
        type: 'tabClick',
        describe: 'tab 被选中时触发'
      },
      {
        type: 'tabChange',
        describe: 'activeName 改变时触发'
      },
      {
        type: 'tabRemove',
        describe: '点击 tab 新增按钮时触发'
      },
      {
        type: 'tabAdd',
        describe: '点击 tab 新增按钮时触发'
      }
    ],
    action: []
  }
} as ComponentConfigModel
