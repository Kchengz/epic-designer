import { type FormItemRule } from "../extensions/ERuleEditor/types";
export interface RenderCallbackParams {
    values: Record<string, any>;
}
export interface ComponentSchema {
    id?: string;
    type: string;
    label?: string;
    field?: string;
    componentProps?: any;
    slotName?: string;
    rules?: FormItemRule[];
    noFormItem?: boolean;
    input?: boolean;
    immovable?: boolean;
    childImmovable?: boolean;
    labelCol?: any;
    wrapperCol?: any;
    children?: ComponentSchema[];
    slots?: {
        [slotName: string]: ComponentSchema[];
    };
    show?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
    editData?: any;
    [fieldName: string]: any;
}
export interface FormConfig {
    layout?: string;
    labelWidth?: string;
    labelLayout: any;
    labelCol: any;
    wrapperCol: any;
    hideRequiredMark?: boolean;
    customStyle?: string;
}
export type FormDataModel = Record<string, any>;
export interface Designer {
    setCheckedNode: (schema?: ComponentSchema) => void;
    setHoverNode: (schema: ComponentSchema | null) => void;
    setDisableHover: (disableHover?: boolean) => void;
    handleToggleDeviceMode: (mode: string) => void;
    reset: () => void;
    state: DesignerState;
}
export interface DesignerState {
    checkedNode: ComponentSchema | null;
    hoverNode: ComponentSchema | null;
    disableHover: boolean;
    matched: ComponentSchema[];
}
export interface PageSchema {
    schemas: ComponentSchema[];
    canvas?: {
        width?: string;
        height?: string;
        mode?: string;
    };
    script?: string;
}
