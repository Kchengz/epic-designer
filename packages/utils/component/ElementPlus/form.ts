import { ComponentAttr } from '../../pluginManager'


export default {
    component: () => import("./src/KForm.vue"),
    schema: {
        id: "组件Id",
        label: "表单",
        type: "form",
        icon: "icon-qiapian",
        name: 'default',
        componentProps: {
            labelWidth: 100,
            labelCol: {
                span: 5
            },
            wrapperCol: {
                span: 19
            },
            hideRequiredMark: false
        },
        children: [],
    },
    atteditSchemas: [
        {
            label: "组件ID",
            type: "input",
            attrIndex: "id"
        },
        {
            label: "name",
            type: "input",
            attrIndex: "name",
        },
        {
            label: "标签长度",
            type: "input",
            attrIndex: "componentProps.labelWidth",
        },
        {
            label: "标签位置",
            type: "select",
            attrIndex: "componentProps.labelPosition",
            componentProps: {
                options: [
                    {
                        label: "left",
                        value: "left",
                    },
                    {
                        label: "right",
                        value: "right",
                    },
                    {
                        label: "top",
                        value: "top",
                    },
                ]
            }
        },
        {
            label: "表单尺寸",
            type: "select",
            attrIndex: "componentProps.size",
            componentProps: {
                options: [
                    {
                        label: "large",
                        value: "large",
                    },
                    {
                        label: "default",
                        value: "default",
                    },
                    {
                        label: "small",
                        value: "small",
                    },
                ]
            }
        },
        {
            label: "scrollToError",
            type: "switch",
            attrIndex: "componentProps.scrollToError",
        },
        {
            label: "行内模式",
            type: "switch",
            attrIndex: "componentProps.inline",
        },
        
    ] as ComponentAttr[],
    bindModel: ''
};