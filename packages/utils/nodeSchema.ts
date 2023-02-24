/**
 * 节点管理
 */
import { NodeItem, SchemaGroupItem } from "../types/kDesigner.d";
import { getUUID } from "./index";

class NodeSchema {
  schemaList: NodeItem[] = [];
  schemaGroup: SchemaGroupItem[] = [
    {
      title: "基础组件",
      list: [
        "input",
        "test",
        "textarea",
        "number",
        "password",
        "select",
        "checkbox",
        "radio",
        "date",
        "time",
        "rate",
        "slider",
        "upload-file",
        "upload-image",
        "cascader",
        "treeSelect",
        "batch",
        "selectInputList",
        "editor",
        "switch",
        "button",
        "alert",
        "text",
        "html",
        "card",
        "form",
        // "monacoEditor",
      ],
    },
  ];

  /**
   * 添加单个节点结构数据
   *
   * @param {*} schema
   * @returns
   */
  addSchema(schema: NodeItem) {
    // 初始化组件id
    schema.id = getUUID();
    return this.schemaList.push(schema);
  }
  /**
   * 添加多个节点结构数据
   *
   * @param {*} schemas []
   * @returns
   */
  addSchemas(schemas: NodeItem[]) {
    schemas.forEach((item) => {
      this.addSchema(item);
    });
  }

  /**
   * 获取所有node schema
   * @returns
   */
  getSchemaList() {
    return this.schemaList;
  }

  /**
   * 通过type获取node schema
   * @returns
   */
  getSchemaByType(type: string) {
    const schemaList = this.schemaList;
    for (const i in schemaList) {
      if (schemaList[i].type === type) {
        return schemaList[i];
      }
    }
    return null;
  }

  /**
   * 设置分组,这个操作将会覆盖原来的数据
   * @param {*} schemaGroup
   * @returns
   */
  setSchemaGroup(schemaGroup: SchemaGroupItem[]) {
    this.schemaGroup = schemaGroup;
  }

  /**
   * 添加分组
   * @param {*} schemaGroupItem
   * @returns
   */
  addSchemaGroup(schemaGroupItem: SchemaGroupItem) {
    this.schemaGroup.push(schemaGroupItem);
  }

  /**
   * 添加计算schemaGroup 值
   * @param {*} schemaGroup
   */
  // addComputed(schemaGroup) {
  //     this.designSchemaGroup = schemaGroup;
  //     schemaGroup.push(...this.getSchemaByGroup());
  // }

  /**
   * 按照分组获取schemaGroupList
   * @returns schemaGroupList
   */
  getSchemaByGroup() {
    const schemaGroupList = this.schemaGroup.map((item) => {
      const list = this.schemaList
        .filter((element) => {
          return item.list.includes(element.type || "");
        })
        .map((element) => ({
          ...element,
          id: getUUID(),
        }));
      return {
        ...item,
        list,
      };
    });
    return schemaGroupList;
  }
}

export const nodeSchema = new NodeSchema();
//  nodeSchema.addSchemas(defaultSchemaList);
