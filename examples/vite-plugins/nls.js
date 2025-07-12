import fs from 'node:fs';
import path from 'node:path';
import MagicString from 'magic-string';
export var Languages;
(function (Languages) {
    Languages["bg"] = "bg";
    Languages["cs"] = "cs";
    Languages["de"] = "de";
    Languages["en_gb"] = "en-gb";
    Languages["es"] = "es";
    Languages["fr"] = "fr";
    Languages["hu"] = "hu";
    Languages["id"] = "id";
    Languages["it"] = "it";
    Languages["ja"] = "ja";
    Languages["ko"] = "ko";
    Languages["nl"] = "nl";
    Languages["pl"] = "pl";
    Languages["ps"] = "ps";
    Languages["pt_br"] = "pt-br";
    Languages["ru"] = "ru";
    Languages["tr"] = "tr";
    Languages["uk"] = "uk";
    Languages["zh_hans"] = "zh-hans";
    Languages["zh_hant"] = "zh-hant";
})(Languages || (Languages = {}));
/**
 * 在vite中dev模式下会使用esbuild对node_modules进行预编译，导致找不到映射表中的filepath，
 * 需要在预编译之前进行替换
 * @param options 替换语言包
 * @returns
 */
export function esbuildPluginMonacoEditorNls(options) {
    options = Object.assign({ locale: Languages.en_gb }, options);
    const CURRENT_LOCALE_DATA = getLocalizeMapping(options.locale, options.localeData);
    return {
        name: 'esbuild-plugin-monaco-editor-nls',
        setup(build) {
            build.onLoad({ filter: /esm[/\\]vs[/\\]nls\.js/ }, async () => {
                return {
                    contents: getLocalizeCode(CURRENT_LOCALE_DATA),
                    loader: 'js',
                };
            });
            build.onLoad({ filter: /monaco-editor[/\\]esm[/\\]vs.+\.js/ }, async (args) => {
                return {
                    contents: transformLocalizeFuncCode(args.path, CURRENT_LOCALE_DATA),
                    loader: 'js',
                };
            });
        },
    };
}
/**
 * 使用了monaco-editor-nls的语言映射包，把原始localize(data, message)的方法，替换成了localize(path, data, defaultMessage)
 * vite build 模式下，使用rollup处理
 * @param options 替换语言包
 * @returns
 */
export default function (options) {
    options = Object.assign({ locale: Languages.en_gb }, options);
    const CURRENT_LOCALE_DATA = getLocalizeMapping(options.locale, options.localeData);
    return {
        name: 'rollup-plugin-monaco-editor-nls',
        enforce: 'pre',
        load(filepath) {
            if (/esm[/\\]vs[/\\]nls\.js/.test(filepath)) {
                return getLocalizeCode(CURRENT_LOCALE_DATA);
            }
        },
        transform(code, filepath) {
            if (/monaco-editor[/\\]esm[/\\]vs.+\.js/.test(filepath)
                && !/esm[/\\]vs[/\\].*nls\.js/.test(filepath)) {
                const re = /monaco-editor[/\\]esm[/\\](.+)(?=\.js)/;
                if (re.exec(filepath) && code.includes('localize(')) {
                    let path = RegExp.$1;
                    path = path.replace(/\\/g, '/');
                    code = code.replace(/localize\(/g, `localize('${path}', `);
                    return {
                        code: code,
                        /** 使用magic-string 生成 source map */
                        map: new MagicString(code).generateMap({
                            includeContent: true,
                            hires: true,
                            source: filepath,
                        }),
                    };
                }
            }
        },
    };
}
/**
 * 替换调用方法接口参数，替换成相应语言包语言
 * @param filepath 路径
 * @param CURRENT_LOCALE_DATA 替换规则
 * @returns
 */
function transformLocalizeFuncCode(filepath, _CURRENT_LOCALE_DATA) {
    let code = fs.readFileSync(filepath, 'utf8');
    const re = /monaco-editor[/\\]esm[/\\](.+)(?=\.js)/;
    if (re.exec(filepath)) {
        let path = RegExp.$1;
        path = path.replace(/\\/g, '/');
        // if (filepath.includes('contextmenu')) {
        //     console.log(filepath);
        //     console.log(JSON.parse(CURRENT_LOCALE_DATA)[path]);
        // }
        // console.log(path, JSON.parse(CURRENT_LOCALE_DATA)[path])
        code = code.replace(/localize\(/g, `localize('${path}', `);
    }
    return code;
}
/**
 * 获取语言包
 * @param locale 语言
 * @param localeData
 * @returns
 */
function getLocalizeMapping(locale, localeData = undefined) {
    if (localeData)
        return JSON.stringify(localeData);
    const locale_data_path = path.join(__dirname, `./locale/${locale}.json`);
    return fs.readFileSync(locale_data_path);
}
/**
 * 替换代码
 * @param CURRENT_LOCALE_DATA 语言包
 * @returns
 */
function getLocalizeCode(CURRENT_LOCALE_DATA) {
    return `
    /*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// eslint-disable-next-line local/code-import-patterns
import { getNLSLanguage, getNLSMessages } from './nls.messages.js';
// eslint-disable-next-line local/code-import-patterns
export { getNLSLanguage, getNLSMessages } from './nls.messages.js';
const isPseudo = getNLSLanguage() === 'pseudo' || (typeof document !== 'undefined' && document.location && document.location.hash.indexOf('pseudo=true') >= 0);
function _format(message, args) {
    let result;
    if (args.length === 0) {
        result = message;
    }
    else {
        result = message.replace(/\\{(\\d+)\\}/g, (match, rest) => {
            const index = rest[0];
            const arg = args[index];
            let result = match;
            if (typeof arg === 'string') {
                result = arg;
            }
            else if (typeof arg === 'number' || typeof arg === 'boolean' || arg === void 0 || arg === null) {
                result = String(arg);
            }
            return result;
        });
    }
    if (isPseudo) {
        // FF3B and FF3D is the Unicode zenkaku representation for [ and ]
        result = '\uFF3B' + result.replace(/[aouei]/g, '$&$&') + '\uFF3D';
    }
    return result;
}
/**
 * @skipMangle
 */
// export function localize(data /* | number when built */, message /* | null when built */, ...args) {
//     if (typeof data === 'number') {
//         return _format(lookupMessage(data, message), args);
//     }
//     return _format(message, args);
// }
// ------------------------invoke----------------------------------------
    export function localize(path, data, defaultMessage, ...args) {
        if (typeof data === 'number') {
            return _format(lookupMessage(data, message), args);
        }
        var key = typeof data === 'object' ? data.key : data;
        var data = ${CURRENT_LOCALE_DATA} || {};
        var message = (data[path] || data?.contents?.[path] || {})[key];
        if (!message) {
            message = defaultMessage;
        }
        return _format(message, args);
    }
// ------------------------invoke----------------------------------------
/**
 * Only used when built: Looks up the message in the global NLS table.
 * This table is being made available as a global through bootstrapping
 * depending on the target context.
 */
function lookupMessage(index, fallback) {
    const message = getNLSMessages()?.[index];
    if (typeof message !== 'string') {
        if (typeof fallback === 'string') {
            return fallback;
        }
        throw new Error(\`!!! NLS MISSING: \${index} !!!\`);
    }
    return message;
}
/**
 * @skipMangle
 */
export function localize2(data /* | number when built */, originalMessage, ...args) {
    let message;
    if (typeof data === 'number') {
        message = lookupMessage(data, originalMessage);
    }
    else {
        message = originalMessage;
    }
    const value = _format(message, args);
    return {
        value,
        original: originalMessage === message ? value : _format(originalMessage, args)
    };
}
  
    `;
}
