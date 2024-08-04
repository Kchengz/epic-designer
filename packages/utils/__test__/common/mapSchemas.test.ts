import { describe, it, expect } from 'vitest';
import { findSchemas } from '../../';

describe('findSchemas 函数测试', () => {
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

  it('应该返回所有符合条件的节点', () => {
    const result = findSchemas(schemas, (item) => item.type === 'input');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('input_ttuyobv9');
  });

  it('应该在 once 为 true 时返回一个符合条件的节点', () => {
    const result = findSchemas(schemas, (item) => item.type === 'number', true);
    expect(result).toEqual({
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
    });
  });

  it('应该根据过滤函数跳过某些节点的子节点', () => {
    const result = findSchemas(schemas, (item) => item.type === 'input', false, (item) => item.type !== 'form');
    expect(result).toHaveLength(0);
  });

  it('应该返回 false 当 once 为 true 时没有符合条件的节点', () => {
    const result = findSchemas(schemas, (item) => item.type === 'checkbox', true);
    expect(result).toBe(false);
  });

  it('应该返回空数组当没有符合条件的节点时', () => {
    const result = findSchemas(schemas, (item) => item.type === 'checkbox');
    expect(result).toHaveLength(0);
  });
});
