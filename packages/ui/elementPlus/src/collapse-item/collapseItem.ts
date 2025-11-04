import type { ComponentSchema } from '@epic-designer/types';

import type { PropType } from 'vue';

import { defineComponent, h, renderSlot } from 'vue';

import { ElCollapseItem } from 'element-plus';

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
      } as any;
      const children = componentSchema.children;
      delete componentSchema.children;

      return h(ElCollapseItem, componentSchema, {
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
