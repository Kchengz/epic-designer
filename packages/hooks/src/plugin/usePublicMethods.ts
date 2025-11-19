import type {
  PublicMethodModel,
  PublicMethodsModel,
} from '@epic-designer/types';

export function usePublicMethods() {
  // 公共方法模型，存储插件的公共方法
  const methodsMap: PublicMethodsModel = {
    // 示例数据
    // publicTest: {
    //   description: '测试函数',
    //   handler: (e) => {
    //     console.log(e);
    //     // alert("测试函数弹出");
    //   },
    //   name: 'test',
    // },
  };
  /**
   * 添加公共方法
   * @param publicMethod
   */
  function addPublicMethod(publicMethod: PublicMethodModel): void {
    if (publicMethod.methodName) {
      console.warn(
        `[Epic:公共函数]注册配置'methodName'属性已弃用,请使用'name'代替`,
      );
    }

    if (publicMethod.method) {
      console.warn(
        `[Epic:公共函数]注册配置'method'属性已弃用,请使用'handler'代替`,
      );
    }

    if (publicMethod.describe) {
      console.warn(
        `[Epic:公共函数]注册配置'describe'属性已弃用,请使用'description'代替`,
      );
    }

    // 兼容旧公共函数注册，后期可能移除该判断
    const name = publicMethod.methodName ?? publicMethod.name;
    const handler = publicMethod.method ?? publicMethod.handler;
    const description = publicMethod.describe ?? publicMethod.description;

    methodsMap[name] = {
      description,
      handler,
      name,
    };
  }

  /**
   * 移除公共方法
   * @param methodName
   */
  function removePublicMethod(methodName: string): void {
    delete methodsMap[methodName];
  }

  return {
    addPublicMethod,
    methodsMap,
    removePublicMethod,
  };
}
