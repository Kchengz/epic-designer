import { PageSchema } from "../../../types/epic-designer";

export interface DesignerProps {
  disabledZoom?: boolean;
  hiddenHeader?: boolean;
  lockDefaultSchemaEdit?: boolean;
  formMode?: boolean;
  title?: string;
  defaultSchema?: PageSchema;
  sourceCodeReadOnly?: boolean;
  hidePreviewConfirm?: boolean;
}
