import type { ComponentSchema } from '@epic-designer/core/types/epic-designer';

import type { PropType } from 'vue';

import { defineComponent, h, renderSlot } from 'vue';

import { Card } from 'ant-design-vue';

export default defineComponent({
  props: {
    componentSchema: {
      default: () => ({}),
      require: true,
      type: Object as PropType<ComponentSchema>,
    },
  },
  setup(props, { slots }) {
    return () => {
      const componentSchema = {
        ...props.componentSchema,
        title: props.componentSchema?.label ?? '',
      } as Record<string, any>;
      const children = componentSchema.children ?? [];
      delete componentSchema.children;

      return h(Card, componentSchema, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((subcomponentSchema: ComponentSchema) =>
              renderSlot(slots, 'node', {
                componentSchema: subcomponentSchema,
              }),
            ),
          ),
      });
    };
  },
});
