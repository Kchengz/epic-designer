import { describe, it, expect } from 'vitest';
import { getValueByPath } from '../../';

describe('getValueByPath 函数测试', () => {
    const data = {
        user: {
            profile: {
                name: 'John Doe',
                age: 30,
                address: {
                    city: 'New York',
                    zip: '10001'
                }
            },
            settings: {
                theme: 'dark'
            }
        }
    };

    it('应该返回存在路径的值', () => {
        expect(getValueByPath(data, 'user.profile.name')).toBe('John Doe');
        expect(getValueByPath(data, 'user.profile.age')).toBe(30);
        expect(getValueByPath(data, 'user.profile.address.city')).toBe('New York');
    });

    it('对于不存在的路径，应该返回默认值', () => {
        expect(getValueByPath(data, 'user.profile.nonExistingField', '默认值')).toBe('默认值');
        expect(getValueByPath(data, 'user.nonExistingField', '默认值')).toBe('默认值');
    });

    it('当路径为空时，应该返回默认值', () => {
        expect(getValueByPath(data, '', '默认值')).toBe('默认值');
    });

    it('处理解析到 undefined 的路径', () => {
        expect(getValueByPath(data, 'user.settings.nonExistingField', '默认值')).toBe('默认值');
    });

    it('应该处理包含嵌套对象的路径', () => {
        expect(getValueByPath(data, 'user.profile.address.zip')).toBe('10001');
    });

    it('应该处理包含数组的路径', () => {
        const dataWithArray = {
            user: {
                profile: {
                    names: ['John', 'Jane']
                }
            }
        };
        expect(getValueByPath(dataWithArray, 'user.profile.names.1')).toBe('Jane');
    });
});
