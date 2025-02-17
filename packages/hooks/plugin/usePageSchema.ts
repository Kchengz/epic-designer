
import {
    deepCompareAndModify,
    deepClone,
} from "@epic-designer/utils";
import { reactive } from "vue";
import { PageSchema } from "@epic-designer/core/types/epic-designer";

// 内部默认页面数据
const innerDefaultSchema: PageSchema = {
    schemas: [
        {
            type: "page",
            id: "root",
            label: "页面",
            children: [],
            componentProps: {
                style: {
                    padding: "16px",
                },
            },
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
        // 调用 deepCompareAndModify 函数比较 pageSchema 和传入的 schema，进行修改
        deepCompareAndModify(pageSchema, deepClone(schema));
    }

    return {
        pageSchema,
        setPageSchema
    }
}