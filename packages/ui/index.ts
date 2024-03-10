import { pluginManager } from "@epic-designer/utils";
export { provideGlobalConfig } from "element-plus";

import dayjs from "dayjs";

/**
 * 设置 Day.js 的日期语言环境
 * @param {string} locale - 日期语言环境，例如 'zh-cn', 'en', 'fr-fr' 等
 */
export function setDateLocale(locale = "zh-cn") {
  // 设置 Day.js 的日期语言环境
  dayjs.locale(locale);

  // 根据不同的 locale 参数导入对应的 Day.js 语言环境
  switch (locale.toLowerCase()) {
    // case "ar_eg":
    //   import(`dayjs/locale/ar-eg`);
    //   break;
    case "az_az":
      import(`dayjs/locale/az`);
      break;
    case "bg_bg":
      import(`dayjs/locale/bg`);
      break;
    case "bn_bd":
      import(`dayjs/locale/bn-bd`);
      break;
    case "by_by":
      import(`dayjs/locale/be`);
      break;
    case "ca_es":
      import(`dayjs/locale/ca`);
      break;
    case "cs_cz":
      import(`dayjs/locale/cs`);
      break;
    case "da_dk":
      import(`dayjs/locale/da`);
      break;
    case "de_de":
      import(`dayjs/locale/de`);
      break;
    case "el_gr":
      import(`dayjs/locale/el`);
      break;
    case "en_gb":
      import(`dayjs/locale/en-gb`);
      break;
    case "en_us":
      import(`dayjs/locale/en`);
      break;
    case "es_es":
      import(`dayjs/locale/es`);
      break;
    case "et_ee":
      import(`dayjs/locale/et`);
      break;
    case "fa_ir":
      import(`dayjs/locale/fa`);
      break;
    case "fi_fi":
      import(`dayjs/locale/fi`);
      break;
    // case "fr_be":
    //   import(`dayjs/locale/fr-be`);
      break;
    case "fr_ca":
      import(`dayjs/locale/fr-ca`);
      break;
    case "fr_fr":
      import(`dayjs/locale/fr`);
      break;
    case "ga_ie":
      import(`dayjs/locale/ga`);
      break;
    case "gl_es":
      import(`dayjs/locale/gl`);
      break;
    case "he_il":
      import(`dayjs/locale/he`);
      break;
    case "hi_in":
      import(`dayjs/locale/hi`);
      break;
    case "hr_hr":
      import(`dayjs/locale/hr`);
      break;
    case "hu_hu":
      import(`dayjs/locale/hu`);
      break;
    case "hy_am":
      import(`dayjs/locale/hy-am`);
      break;
    case "id_id":
      import(`dayjs/locale/id`);
      break;
    case "index":
      // Index locale, do something else or import a default locale
      break;
    case "is_is":
      import(`dayjs/locale/is`);
      break;
    case "it_it":
      import(`dayjs/locale/it`);
      break;
    case "ja_jp":
      import(`dayjs/locale/ja`);
      break;
    case "ka_ge":
      import(`dayjs/locale/ka`);
      break;
    case "kk_kz":
      import(`dayjs/locale/kk`);
      break;
    case "km_kh":
      import(`dayjs/locale/km`);
      break;
    case "kmr_iq":
      import(`dayjs/locale/ku`);
      break;
    case "kn_in":
      import(`dayjs/locale/kn`);
      break;
    case "ko_kr":
      import(`dayjs/locale/ko`);
      break;
    case "ku_iq":
      import(`dayjs/locale/ku`);
      break;
    case "lt_lt":
      import(`dayjs/locale/lt`);
      break;
    case "lv_lv":
      import(`dayjs/locale/lv`);
      break;
    case "mk_mk":
      import(`dayjs/locale/mk`);
      break;
    case "ml_in":
      import(`dayjs/locale/ml`);
      break;
    case "mn_mn":
      import(`dayjs/locale/mn`);
      break;
    case "ms_my":
      import(`dayjs/locale/ms-my`);
      break;
    case "nb_no":
      import(`dayjs/locale/nb`);
      break;
    case "ne_np":
      import(`dayjs/locale/ne`);
      break;
    case "nl_be":
      import(`dayjs/locale/nl-be`);
      break;
    case "nl_nl":
      import(`dayjs/locale/nl`);
      break;
    case "pl_pl":
      import(`dayjs/locale/pl`);
      break;
    case "pt_br":
      import(`dayjs/locale/pt-br`);
      break;
    case "pt_pt":
      import(`dayjs/locale/pt`);
      break;
    case "ro_ro":
      import(`dayjs/locale/ro`);
      break;
    case "ru_ru":
      import(`dayjs/locale/ru`);
      break;
    case "sk_sk":
      import(`dayjs/locale/sk`);
      break;
    case "sl_si":
      import(`dayjs/locale/sl`);
      break;
    case "sr_rs":
      import(`dayjs/locale/sr`);
      break;
    case "sv_se":
      import(`dayjs/locale/sv`);
      break;
    case "ta_in":
      import(`dayjs/locale/ta`);
      break;
    case "th_th":
      import(`dayjs/locale/th`);
      break;
    case "tr_tr":
      import(`dayjs/locale/tr`);
      break;
    case "uk_ua":
      import(`dayjs/locale/uk`);
      break;
    case "ur_pk":
      import(`dayjs/locale/ur`);
      break;
    case "vi_vn":
      import(`dayjs/locale/vi`);
      break;
    case "zh_cn":
      import(`dayjs/locale/zh-cn`);
      break;
    case "zh_hk":
      import(`dayjs/locale/zh-hk`);
      break;
    case "zh_tw":
      import(`dayjs/locale/zh-tw`);
      break;
    default:
      // Default action if locale is not found
      break;
  }
}

export async function setupAntd() {
  const { setupAntd } = await import("./antd");
  setupAntd.bind(null, pluginManager)();
}

export async function setupElementPlus() {
  const { setupElementPlus } = await import("./elementPlus");
  setupElementPlus.bind(null, pluginManager)();
}

export async function setupNaiveUi() {
  const { setupNaiveUi } = await import("./naiveUi");
  setupNaiveUi.bind(null, pluginManager)();
}
