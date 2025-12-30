import type { ComponentSchema } from '@epic-designer/types';

import type { PropType } from 'vue';

import { computed, defineComponent, h, ref, renderSlot, watch } from 'vue';

import { Tabs } from 'ant-design-vue';

export default defineComponent({
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

    const componentSchema = computed(() => ({
      ...props.componentSchema?.props,
      activeKey: modelValue.value,
      'onUpdate:activeKey': (e) => {
        modelValue.value = e;
      },
    }));

    const children = props.componentSchema?.children ?? [];
    return () =>
      h(Tabs, componentSchema.value, {
        default: () => {
          const defaultSlotList = slots['edit-node']?.()[0].children;
          // 设计区渲染
          if (defaultSlotList?.length) {
            const list = defaultSlotList[0].children?.map((item) => {
              item.props.key = item.props.schema.label;
              item.props.tab = item.props.schema.label;
              return item;
            });

            return list;
          }

          // 直接渲染
          return children.map((componentSchema: any) =>
            renderSlot(slots, 'node', {
              componentSchema,
              key: componentSchema.label,
              tab: componentSchema.label,
            }),
          );
        },
      });
  },
});
