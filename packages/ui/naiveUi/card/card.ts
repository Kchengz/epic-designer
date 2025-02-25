import type { ComponentSchema } from '@epic-designer/core/types/epic-designer';

import type { PropType } from 'vue';

import { defineComponent, h, renderSlot } from 'vue';

import { NCard } from 'naive-ui';

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
        title: props.componentSchema.label,
      } as ComponentSchema;
      const children = componentSchema.children ?? [];
      delete componentSchema.children;

      return h(NCard, componentSchema, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((node: ComponentSchema) =>
              renderSlot(slots, 'node', { componentSchema: node }),
            ),
          ),
      });
    };
  },
});
