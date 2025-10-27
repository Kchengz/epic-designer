import { PageSchema } from '@epic-designer/types';

export interface DesignerProps {
  canvasMode?: 'desktop' | 'mobile' | 'tablet';
  defaultSchema?: PageSchema;
  disabledZoom?: boolean;
  draggable?: boolean;
  formMode?: boolean;
  hiddenHeader?: boolean;
  hidePreviewConfirm?: boolean;
  lockDefaultSchemaEdit?: boolean;
  showHiddenItems?: boolean;
  sourceCodeReadOnly?: boolean;
  title?: string;
}
