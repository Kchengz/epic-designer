import { describe, expect, it } from 'vitest';

import { findSchemaById } from '../../';

describe('findSchemaById 函数测试', () => {
  const schemas = [
    {
      componentProps: {
        style: {
          padding: '16px',
        },
      },
      id: 'root',
      label: '页面',
      type: 'page',
      children: [
        {
          label: '表单',
          type: 'form',
          componentProps: {
            labelCol: {
              span: 5,
            },
            labelLayout: 'fixed',
            labelWidth: '100px',
            name: 'default',
            wrapperCol: {
              span: 19,
            },
          },
          children: [
            {
              label: '输入框',
              type: 'input',
              field: 'input_ttuyobv9',
              input: true,
              componentProps: {
                placeholder: '请输入',
              },
              id: 'input_ttuyobv9',
            },
            {
              label: '数字输入框',
              type: 'number',
              field: 'number_m7ogpi26',
              input: true,
              componentProps: {
                placeholder: '请输入',
                style: {
                  width: '100%',
                },
              },
              id: 'number_m7ogpi26',
            },
          ],
          id: 'form_oyvwbf00',
        },
      ],
    },
  ];

  it('应该返回正确的节点', () => {
    const result = findSchemaById(schemas, 'input_ttuyobv9');
    expect(result).toEqual({
      componentProps: {
        placeholder: '请输入',
      },
      field: 'input_ttuyobv9',
      id: 'input_ttuyobv9',
      input: true,
      label: '输入框',
      type: 'input',
    });
  });

  it('应该抛出错误当节点不存在', () => {
    expect(() => findSchemaById(schemas, 'non_existent_id')).toThrowError(
      '没有查询到id为non_existent_id的节点',
    );
  });
});
