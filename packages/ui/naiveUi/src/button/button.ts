import type { ComponentSchema } from '@epic-designer/types';

import type { PropType } from 'vue';

import { defineComponent, h, renderSlot } from 'vue';

import { NButton } from 'naive-ui';

// 二次封装组件
export default defineComponent({
  props: {
    componentSchema: {
      default: () => ({}),
      type: Object as PropType<ComponentSchema>,
    },
  },
  setup(props, { slots }) {
    return () => {
      const componentProps: Record<string, any> = {
        ...props.componentSchema?.props,
      };

      return h(NButton, componentProps, {
        default: () =>
          renderSlot(slots, 'default', {}, () => [
            props.componentSchema?.label,
          ]),
      });
    };
  },
});
