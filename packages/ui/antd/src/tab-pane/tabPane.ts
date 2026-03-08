import type { ComponentSchema } from '@epic-designer/types';

import type { PropType } from 'vue';

import { defineComponent, h, renderSlot } from 'vue';

import { useNodeAttrs } from '@epic-designer/hooks';
import { TabPane } from 'ant-design-vue';

export default defineComponent({
  props: {
    componentSchema: {
      default: () => ({}),
      require: true,
      type: Object as PropType<ComponentSchema>,
    },
  },
  setup(props, { slots }) {
    const nodeAttrs = useNodeAttrs();

    return () => {
      const componentSchema = {
        ...props.componentSchema,
        ...props.componentSchema?.props,
      };
      const children = componentSchema.children;
      delete componentSchema.children;

      // return h("div", "sdfsd");
      return h(
        TabPane,
        { componentSchema, ...nodeAttrs },
        {
          default: () =>
            renderSlot(slots, 'edit-node', {}, () =>
              children.map((componentSchema: any) =>
                renderSlot(slots, 'node', { componentSchema }),
              ),
            ),
        },
      );
    };
  },
});
