import { describe, it, expect } from 'vitest';
import { getFormSchemas } from '../../';

describe('getFormSchemas 函数测试', () => {
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
            },
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

  it('应该返回指定表单名称中的输入字段', () => {
    const result = getFormSchemas(schemas, 'default');
    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: 'input_ttuyobv9' }),
      expect.objectContaining({ id: 'number_m7ogpi26' })
    ]));
  });

  it('应该使用默认的表单名称', () => {
    const result = getFormSchemas(schemas);
    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: 'input_ttuyobv9' }),
      expect.objectContaining({ id: 'number_m7ogpi26' })
    ]));
  });

  it('应该返回空数组当表单没有输入字段', () => {
    const emptySchemas = [
      {
        type: "page",
        id: "root",
        label: "页面",
        children: [
          {
            label: "表单",
            type: "form",
            componentProps: {
              name: "emptyForm",
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
                label: "非输入框",
                type: "text",
                componentProps: {
                  placeholder: "不是输入框"
                },
                id: "text_field"
              }
            ],
            id: "form_empty"
          }
        ],
        componentProps: {
          style: {
            padding: "16px"
          }
        }
      }
    ];

    const result = getFormSchemas(emptySchemas, 'emptyForm');
    expect(result).toHaveLength(0);
  });
});
