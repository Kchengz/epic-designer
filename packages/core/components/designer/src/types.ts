import { PageSchema } from '../../../types/epic-designer';

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
