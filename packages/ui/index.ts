// export * from './antd'
// export * from "./elementPlus";
// export * from "./naiveUi";

import { pluginManager } from "@epic-designer/utils";
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


