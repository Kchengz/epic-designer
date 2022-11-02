export interface FormItem {
    label: string;
    field: string;
    slot?: string;
    component?: string;
    componentProps: any;
    key?: string;
    rules?: any;
    labelCol?: any;
    wrapperCol?: any;
    children?: FormItem[];
    [propName: string]: any;
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

export interface FormSchema {
    nodes: FormItem[]
    config: FormConfig
}

export interface FormDataModel {
    [field: string]: any
}