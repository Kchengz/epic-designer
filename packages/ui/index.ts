import { pluginManager } from "@epic-designer/utils";


export function setupAntd() {
  import("./antd").then(({ setupAntd }) => {
    setupAntd.bind(null, pluginManager)();
  });
}

export function setupElementPlus() {
  import("./elementPlus").then(({ setupElementPlus }) => {
    setupElementPlus.bind(null, pluginManager)();
  });
}

export function setupNaiveUi() {
  import("./naiveUi").then(({ setupNaiveUi }) => {
    setupNaiveUi.bind(null, pluginManager)();
  });
}


