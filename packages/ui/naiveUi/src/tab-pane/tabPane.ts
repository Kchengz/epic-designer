import type { ComponentSchema } from '@epic-designer/types';

import type { PropType } from 'vue';

import { defineComponent, h, renderSlot } from 'vue';

import { NTabPane } from 'naive-ui';

export default defineComponent({
  name: 'TabPane',
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
        name: props.componentSchema.label,
      } as any;
      const children = props.componentSchema?.children ?? [];
      delete componentSchema.children;
      delete componentSchema.label;
      return h(NTabPane, componentSchema, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((nodeProps: ComponentSchema) =>
              renderSlot(slots, 'node', { componentSchema: nodeProps }),
            ),
          ),
      });
    };
  },
});
