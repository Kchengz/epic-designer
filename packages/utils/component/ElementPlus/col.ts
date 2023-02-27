export default {
    component: () => import("./KCol"),
    schema: {
        label: "栅格布局-列",
        type: "col",
        icon: "icon-xiala",
        children: [],
        componentProps: {
            span: 6
        }
    },
    atteditSchemas: [
        {
            label: "占位格数",
            type: "number",
            attrIndex: "componentProps.span",
        },

    ],
    bindModel: "modelValue",
};