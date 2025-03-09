import { describe, expect, it } from 'vitest';

import { getMatchedById } from '../../';

// 示例数据
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
