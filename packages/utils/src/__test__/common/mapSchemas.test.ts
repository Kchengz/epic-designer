import { describe, expect, it } from 'vitest';

import { findSchemas } from '../../';

describe('findSchemas 函数测试', () => {
  const schemas = [
    {
      props: {
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
          props: {
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
              props: {
                placeholder: '请输入',
              },
              id: 'input_ttuyobv9',
            },
            {
              label: '数字输入框',
              type: 'number',
              field: 'number_m7ogpi26',
              input: true,
              props: {
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

  it('应该返回所有符合条件的节点', () => {
    const result = findSchemas(schemas, (item) => item.type === 'input');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('input_ttuyobv9');
  });

  it('应该在 once 为 true 时返回一个符合条件的节点', () => {
    const result = findSchemas(schemas, (item) => item.type === 'number', true);
    expect(result).toEqual({
      props: {
        placeholder: '请输入',
        style: {
          width: '100%',
        },
      },
      field: 'number_m7ogpi26',
      id: 'number_m7ogpi26',
      input: true,
      label: '数字输入框',
      type: 'number',
    });
  });

  it('应该根据过滤函数跳过某些节点的子节点', () => {
    const result = findSchemas(
      schemas,
      (item) => item.type === 'input',
      false,
      (item) => item.type !== 'form',
    );
    expect(result).toHaveLength(0);
  });

  it('应该返回 false 当 once 为 true 时没有符合条件的节点', () => {
    const result = findSchemas(
      schemas,
      (item) => item.type === 'checkbox',
      true,
    );
    expect(result).toBe(false);
  });

  it('应该返回空数组当没有符合条件的节点时', () => {
    const result = findSchemas(schemas, (item) => item.type === 'checkbox');
    expect(result).toHaveLength(0);
  });
});
