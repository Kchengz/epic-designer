import { describe, it, expect } from "vitest";
import { findSchemaById } from "../../packages/utils";

describe("utils.ts", () => {
  it("通过id查询schemas -> findSchemaById", () => {
    const schemas = [
      {
        type: "form",
        name: "default",
        id: "root",
        children: [
          {
            label: "文本框",
            type: "input",
            field: "input2",
            isInput: true,
            id: "glyhrunicr400",
            componentProps: {
              type: "text",
            },
          },
          {
            label: "文本框",
            type: "input",
            field: "input",
            isInput: true,
            id: "kluewssswzk00",
            componentProps: {},
            rules: [
              {
                required: true,
                message: "请输入",
              },
            ],
          },
        ],
      },
    ];
    // console.log(findSchemaById(schemas, "kluewssswzk00"))
    expect(findSchemaById(schemas, "kluewssswzk001")).toEqual(false);
  });
});
