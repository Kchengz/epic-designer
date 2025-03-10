import { PageSchema } from '@epic-designer/types';

export interface DesignerProps {
  defaultSchema?: PageSchema;
  disabledZoom?: boolean;
  draggable?: boolean;
  formMode?: boolean;
  hiddenHeader?: boolean;
  hidePreviewConfirm?: boolean;
  lockDefaultSchemaEdit?: boolean;
  sourceCodeReadOnly?: boolean;
  title?: string;
}
