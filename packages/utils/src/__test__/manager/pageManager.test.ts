import { defineComponent } from 'vue';

import { describe, expect, it } from 'vitest';

import { usePageManager } from '../../';

describe('usePageManager 函数测试', () => {
  it('应该正确创建 PageManager 实例', () => {
    const pageManager = usePageManager();
    expect(pageManager).toBeDefined();
    expect(pageManager.componentInstances).toBeInstanceOf(Object);
    expect(pageManager.funcs).toBeInstanceOf(Object);
    expect(pageManager.isDesignMode).toBeInstanceOf(Object);
    expect(pageManager.defaultComponentIds).toBeInstanceOf(Object);
    expect(pageManager.forms).toBeInstanceOf(Object);
  });

  it('应该正确添加和移除组件实例', () => {
    const pageManager = usePageManager();
    const mockInstance = defineComponent({
      name: 'Cmp',
    }) as any; // 模拟 Vue 组件实例

    pageManager.addComponentInstance('component1', mockInstance);
    expect(pageManager.findInstance('component1')).toEqual(mockInstance);

    pageManager.removeComponentInstance('component1');
    expect(pageManager.findInstance('component1')).toBeNull();
  });

  it('应该正确设置和获取方法', () => {
    const pageManager = usePageManager();
    const mockScript = `const { defineExpose, find } = epic;

            function test (){
                return 'mock result'
            }

            // 通过defineExpose暴露的函数或者属性
            defineExpose({
            test
            })`;
    pageManager.setMethods(mockScript);

    expect(pageManager.funcs.value.test).toBeDefined();
    expect(pageManager.funcs.value.test()).toBe('mock result');
  });

  it('应该正确设置设计模式', () => {
    const pageManager = usePageManager();

    pageManager.setDesignMode(true);
    expect(pageManager.isDesignMode.value).toBe(true);

    pageManager.setDesignMode(false);
    expect(pageManager.isDesignMode.value).toBe(false);
  });

  it('应该正确设置表单数据', () => {
    const pageManager = usePageManager();
    const formData = { field1: 'value1' };

    pageManager.addFormData(formData, 'form1');
    expect(pageManager.forms.form1).toEqual(formData);
  });

  it('应该正确设置默认组件 IDs', () => {
    const pageManager = usePageManager();
    const schemas = [
      { id: 'component1', type: 'component' },
      { id: 'component2', type: 'component' },
    ];

    pageManager.setDefaultComponentIds(schemas);
    expect(pageManager.defaultComponentIds.value).toEqual([
      'component2',
      'component1',
    ]);
  });
});
