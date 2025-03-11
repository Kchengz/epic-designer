import type { ComponentSchema } from '@epic-designer/types';

export interface TreeProps {
  draggable: boolean;
  hoverKey: string;
  options: ComponentSchema[];
  selectedKeys: string[];
}
