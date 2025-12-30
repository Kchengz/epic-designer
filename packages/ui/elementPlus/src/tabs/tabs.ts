import type { ComponentSchema } from '@epic-designer/types';

import type { PropType } from 'vue';

import { computed, defineComponent, h, ref, renderSlot, watch } from 'vue';

import { ElTabs } from 'element-plus';

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
        modelValue: modelValue.value,
        'onUpdate:modelValue': (e) => {
          modelValue.value = e;
        },
      };
    });

    const children = props.componentSchema?.children ?? [];
    return () =>
      h(ElTabs, componentSchema.value, {
        default: () => {
          const defaultSlotList = slots['edit-node']?.()[0].children;
          // 设计区渲染
          if (defaultSlotList?.length) {
            const list = defaultSlotList[0].children?.map((item) => {
              item.props.name = item.props.schema.label;
              return item;
            });

            return list;
          }
          return children.map((componentSchema: any) =>
            renderSlot(slots, 'node', {
              componentSchema,
              name: componentSchema.label,
            }),
          );
        },
      });
  },
});
