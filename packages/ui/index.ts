// export * from './antd'
// export * from "./elementPlus";
// export * from "./naiveUi";

import { type PluginManager } from "@epic-designer/utils";
export async function setupAntd(pluginManager: PluginManager) {
  const { setupAntd } = await import("./antd");
  setupAntd(pluginManager);
}

export async function setupElementPlus(pluginManager: PluginManager) {
  const { setupElementPlus } = await import("./elementPlus");
  setupElementPlus(pluginManager);
}

export async function setupNaiveUi(pluginManager: PluginManager) {
  const { setupNaiveUi } = await import("./naiveUi");
  setupNaiveUi(pluginManager);
}
