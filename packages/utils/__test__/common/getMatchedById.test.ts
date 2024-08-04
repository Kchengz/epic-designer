import { describe, it, expect } from 'vitest';
import { getMatchedById } from '../../';

// 示例数据
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

// 测试用例
describe('getMatchedById', () => {
    it('应该找到正确的节点路径', () => {
        const idToFind = 'number_m7ogpi26';
        const result = getMatchedById(schemas, idToFind);

        expect(result).toHaveLength(3); // 路径长度应为 3
        expect(result[0].id).toBe('root');
        expect(result[1].id).toBe('form_oyvwbf00');
        expect(result[2].id).toBe('number_m7ogpi26');
    });

    it('应该返回空数组当节点不存在时', () => {
        const idToFind = 'non_existent_id';
        const result = getMatchedById(schemas, idToFind);

        expect(result).toHaveLength(0);
    });
});
