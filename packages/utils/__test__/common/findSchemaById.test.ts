import { describe, it, expect } from 'vitest';
import { findSchemaById } from '../../';

describe('findSchemaById 函数测试', () => {
    const schemas = [
        {
            type: "page",
            id: "root",
            label: "页面",
            children: [
                {
                    label: "表单",
                    type: "form",
                    componentProps: {
                        name: "default",
                        labelWidth: "100px",
                        labelLayout: "fixed",
                        labelCol: {
                            span: 5
                        },
                        wrapperCol: {
                            span: 19
                        }
                    },
                    children: [
                        {
                            label: "输入框",
                            type: "input",
                            field: "input_ttuyobv9",
                            input: true,
                            componentProps: {
                                placeholder: "请输入"
                            },
                            id: "input_ttuyobv9"
                        },
                        {
                            label: "数字输入框",
                            type: "number",
                            field: "number_m7ogpi26",
                            input: true,
                            componentProps: {
                                style: {
                                    width: "100%"
                                },
                                placeholder: "请输入"
                            },
                            id: "number_m7ogpi26"
                        }
                    ],
                    id: "form_oyvwbf00"
                }
            ],
            componentProps: {
                style: {
                    padding: "16px"
                }
            }
        }
    ];

    it('应该返回正确的节点', () => {
        const result = findSchemaById(schemas, 'input_ttuyobv9');
        expect(result).toEqual({
            label: "输入框",
            type: "input",
            field: "input_ttuyobv9",
            input: true,
            componentProps: {
                placeholder: "请输入"
            },
            id: "input_ttuyobv9"
        });
    });

    it('应该抛出错误当节点不存在', () => {
        expect(() => findSchemaById(schemas, 'non_existent_id')).toThrowError(
            '没有查询到id为non_existent_id的节点'
        );
    });
});
