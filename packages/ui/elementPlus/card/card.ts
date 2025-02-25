import type { ComponentSchema } from '@epic-designer/core/types/epic-designer';

import type { PropType } from 'vue';

import { defineComponent, h, renderSlot } from 'vue';

import { ElCard } from 'element-plus';

export default defineComponent({
  props: {
    componentSchema: {
      default: () => ({}),
      required: true,
      type: Object as PropType<ComponentSchema>,
    },
  },
  setup(props, { slots }) {
    return () => {
      const componentSchema = {
        ...props.componentSchema,
        header: props.componentSchema?.label ?? '',
      } as ComponentSchema;
      const children = componentSchema.children ?? [];
      delete componentSchema.children;

      let vNodeClildren: any = null;
      vNodeClildren =
        children.length > 0
          ? () =>
              children.map((node: ComponentSchema) =>
                renderSlot(slots, 'node', { componentSchema: node }),
              )
          : () => [renderSlot(slots, 'default')];
      return h(ElCard, componentSchema, {
        default: () => renderSlot(slots, 'edit-node', {}, vNodeClildren),
        header: () => renderSlot(slots, 'header'),
      });
    };
  },
});
