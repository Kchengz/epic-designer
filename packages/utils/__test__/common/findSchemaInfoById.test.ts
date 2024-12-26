import { describe, it, expect } from "vitest";
import { findSchemaInfoById } from "../../";

describe("findSchemaInfoById 函数测试", () => {
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
              span: 5,
            },
            wrapperCol: {
              span: 19,
            },
          },
          children: [
            {
              label: "输入框",
              type: "input",
              field: "input_ttuyobv9",
              input: true,
              componentProps: {
                placeholder: "请输入",
              },
              id: "input_ttuyobv9",
            },
            {
              label: "数字输入框",
              type: "number",
              field: "number_m7ogpi26",
              input: true,
              componentProps: {
                style: {
                  width: "100%",
                },
                placeholder: "请输入",
              },
              id: "number_m7ogpi26",
            },
          ],
          id: "form_oyvwbf00",
        },
      ],
      componentProps: {
        style: {
          padding: "16px",
        },
      },
    },
  ];

  it("应该返回正确info", () => {
    const inputSchema = {
      label: "输入框",
      type: "input",
      field: "input_ttuyobv9",
      input: true,
      componentProps: {
        placeholder: "请输入",
      },
      id: "input_ttuyobv9",
    };

    const listSchema = [
      {
        label: "输入框",
        type: "input",
        field: "input_ttuyobv9",
        input: true,
        componentProps: {
          placeholder: "请输入",
        },
        id: "input_ttuyobv9",
      },
      {
        label: "数字输入框",
        type: "number",
        field: "number_m7ogpi26",
        input: true,
        componentProps: {
          style: {
            width: "100%",
          },
          placeholder: "请输入",
        },
        id: "number_m7ogpi26",
      },
    ];

    const formSchema = {
      label: "表单",
      type: "form",
      componentProps: {
        name: "default",
        labelWidth: "100px",
        labelLayout: "fixed",
        labelCol: {
          span: 5,
        },
        wrapperCol: {
          span: 19,
        },
      },
      children: [
        {
          label: "输入框",
          type: "input",
          field: "input_ttuyobv9",
          input: true,
          componentProps: {
            placeholder: "请输入",
          },
          id: "input_ttuyobv9",
        },
        {
          label: "数字输入框",
          type: "number",
          field: "number_m7ogpi26",
          input: true,
          componentProps: {
            style: {
              width: "100%",
            },
            placeholder: "请输入",
          },
          id: "number_m7ogpi26",
        },
      ],
      id: "form_oyvwbf00",
    };
    const { list, schema, index, parentSchema } = findSchemaInfoById(
      schemas,
      "input_ttuyobv9"
    );

    expect(schema).toEqual(inputSchema);
    expect(list).toEqual(listSchema);
    expect(index).toEqual(0);
    expect(parentSchema).toEqual(formSchema);
  });

  it("应该找不到指定 id 的 schema 信息并抛出异常", () => {
    const id = "test_1";
    expect(() => findSchemaInfoById(schemas, id)).toThrow(
      `没有查询到id为${id}的节点`
    );
  });
});
