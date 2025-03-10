import type { ComponentSchema } from '@epic-designer/types';

import type { PropType } from 'vue';

import { defineComponent, h, renderSlot } from 'vue';

import { NCollapseItem } from 'naive-ui';

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
      const componentSchema: ComponentSchema = {
        ...props.componentSchema,
        title: props.componentSchema.label ?? '',
      };

      const children = componentSchema.children ?? [];
      delete componentSchema.children;

      return h(NCollapseItem, componentSchema, {
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
