import type { ComponentSchema } from '@epic-designer/types';

import type { PropType } from 'vue';

import { computed, defineComponent, h, ref, watch } from 'vue';

import { NTabs } from 'naive-ui';

export default defineComponent({
  inheritAttrs: false,
  props: {
    componentSchema: {
      default: () => ({}),
      require: true,
      type: Object as PropType<ComponentSchema>,
    },
  },
  setup(props, { slots }) {
    const modelValue = ref();
    watch(
      () => props.componentSchema.props.defaultValue,
      (newValue) => {
        const tabPaneLabels = props.componentSchema.children?.map(
          (node) => node.label,
        );
        modelValue.value = tabPaneLabels?.includes(newValue)
          ? newValue
          : tabPaneLabels?.[0];
      },
      {
        immediate: true,
      },
    );

    const componentSchema = computed(() => {
      return {
        ...props.componentSchema?.props,
        'onUpdate:value': (e) => {
          modelValue.value = e;
        },
        value: modelValue.value,
      };
    });

    const children = props.componentSchema?.children ?? [];

    return () =>
      h(NTabs, componentSchema.value, {
        default: () => {
          const defaultSlotList = slots['edit-node']?.()[0].children;
          // 设计区渲染
          if (defaultSlotList?.length) {
            const list = defaultSlotList[0].children?.map((item) => {
              item.props.name = item.props.schema.label;
              item.props.tab = item.props.schema.label;
              item.type.__TAB_PANE__ = true;
              return item;
            });

            return list;
          }

          const defaultSlot = children.map((node: ComponentSchema) => {
            const TabPane = slots.node?.({
              componentSchema: node,
              name: node.label,
            })[0] as any;

            TabPane.type.__TAB_PANE__ = true;
            return TabPane;
          });
          return [defaultSlot];
        },
      });
  },
});
