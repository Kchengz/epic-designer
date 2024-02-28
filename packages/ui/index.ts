// export * from './antd'
// export * from "./elementPlus";
// export * from "./naiveUi";

import { pluginManager } from "@epic-designer/utils";
import type { Language } from "element-plus/es/locale";
export {
  provideGlobalConfig,
} from "element-plus";

export async function setupAntd() {
  const { setupAntd } = await import("./antd");
  setupAntd.bind(null, pluginManager)();
}



export async function setupElementPlus( locale?: Language) {
  const { setupElementPlus } = await import("./elementPlus");
  setupElementPlus.bind(null, pluginManager)(locale);
}

export async function setupNaiveUi() {
  const { setupNaiveUi } = await import("./naiveUi");
  setupNaiveUi.bind(null, pluginManager)();
}









