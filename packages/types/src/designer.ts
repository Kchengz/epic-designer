import { PageSchema } from '@epic-designer/types';

export interface TableColumn {
  columnName: string;
  columnRemark: string;
}
export interface TableJson {
  primaryKey: string;
  tableColumn: TableColumn[];
  tableName: string;
  tableRemark: string;
  tableType: string;
}
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
  tableJson?: TableJson[];
  title?: string;
}
