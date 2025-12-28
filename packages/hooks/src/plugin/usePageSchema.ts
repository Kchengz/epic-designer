import { reactive } from 'vue';

import { PageSchema } from '@epic-designer/types';
import { deepClone, deepCompareAndModify } from '@epic-designer/utils';

// 兼容旧数据的映射关系
const legacyModeMap = {
  mobile: 'mobile',
  pad: 'tablet',
  pc: 'desktop',
} as const;

/**
 * 迁移旧的 canvas mode 数据
 * @param schema 页面数据
 * @returns 迁移后的页面数据
 */
function migrateCanvasMode(schema: PageSchema): PageSchema {
  if (schema.canvas?.mode && schema.canvas.mode in legacyModeMap) {
    const newMode =
      legacyModeMap[schema.canvas.mode as keyof typeof legacyModeMap];
    return {
      ...schema,
      canvas: {
        ...schema.canvas,
        mode: newMode,
      },
    };
  }
  return schema;
}

// 内部默认页面数据
const innerDefaultSchema: PageSchema = {
  schemas: [
    {
      id: 'root',
      label: '页面',
      props: {
        style: {
          padding: '16px',
        },
      },
      type: 'page',
      children: [],
    },
  ],
  script: `const { defineExpose, find } = epic;
  
  function test (){
      console.log('test')
  }
  
  // 通过defineExpose暴露的函数或者属性
  defineExpose({
   test
  })`,
};

export function usePageSchema() {
  const pageSchema = reactive<PageSchema>({
    schemas: [],
    script: innerDefaultSchema.script,
  });

  function setPageSchema(schema: PageSchema) {
    // 先迁移旧的 canvas mode 数据
    const migratedSchema = migrateCanvasMode(schema);
    // 调用 deepCompareAndModify 函数比较 pageSchema 和传入的 schema，进行修改
    deepCompareAndModify(pageSchema, deepClone(migratedSchema));
  }

  return {
    pageSchema,
    setPageSchema,
  };
}
