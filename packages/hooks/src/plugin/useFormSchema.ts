import type { ComponentSchema } from '@epic-designer/types';

import { deepCompareAndModify } from '@epic-designer/utils';

export function useFormSchema() {
  // 表单模式默认schema数据
  const formSchema: ComponentSchema[] = [
    {
      props: {
        colon: true,
        labelAlign: 'right',
        labelCol: {
          span: 5,
        },
        labelLayout: 'fixed',
        labelPlacement: 'left',
        labelWidth: 100,
        layout: 'horizontal',
        name: 'default',
        style: {
          padding: '16px',
        },
        wrapperCol: {
          span: 19,
        },
      },
      id: 'root',
      label: '表单',
      type: 'form',
      children: [],
    },
  ];

  /**
   * 设置表单模式schema数据
   * @param schema
   */
  function setFormSchema(schema: ComponentSchema[]) {
    deepCompareAndModify(formSchema, schema);
  }

  return {
    formSchema,
    setFormSchema,
  };
}
