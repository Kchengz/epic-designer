import { describe, expect, it } from 'vitest';

import { findSchemaInfoById } from '../../';

describe('findSchemaInfoById 函数测试', () => {
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

  it('应该返回正确info', () => {
    const inputSchema = {
      componentProps: {
        placeholder: '请输入',
      },
      field: 'input_ttuyobv9',
      id: 'input_ttuyobv9',
      input: true,
      label: '输入框',
      type: 'input',
    };

    const listSchema = [
      {
        componentProps: {
          placeholder: '请输入',
        },
        field: 'input_ttuyobv9',
        id: 'input_ttuyobv9',
        input: true,
        label: '输入框',
        type: 'input',
      },
      {
        componentProps: {
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
      },
    ];

    const formSchema = {
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
      id: 'form_oyvwbf00',
      label: '表单',
      type: 'form',
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
    };
    const { index, parentSchema, schema, list } = findSchemaInfoById(
      schemas,
      'input_ttuyobv9',
    );

    expect(schema).toEqual(inputSchema);
    expect(list).toEqual(listSchema);
    expect(index).toEqual(0);
    expect(parentSchema).toEqual(formSchema);
  });

  it('应该找不到指定 id 的 schema 信息并抛出异常', () => {
    const id = 'test_1';
    expect(() => findSchemaInfoById(schemas, id)).toThrow(
      `没有查询到id为${id}的节点`,
    );
  });
});
