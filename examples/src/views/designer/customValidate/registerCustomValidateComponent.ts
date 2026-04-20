import { pluginManager } from '@epic-designer/manager';

import customValidateComponent, {
  CUSTOM_VALIDATE_COMPONENT_TYPE,
} from './customValidateComponent';

function ensureRegistered() {
  if (
    !pluginManager.component.getConfigByType(CUSTOM_VALIDATE_COMPONENT_TYPE)
  ) {
    pluginManager.component.register(customValidateComponent);
  }
}

export function showCustomValidateComponent() {
  ensureRegistered();
  pluginManager.component.show(CUSTOM_VALIDATE_COMPONENT_TYPE);
}

export function hideCustomValidateComponent() {
  ensureRegistered();
  pluginManager.component.hide(CUSTOM_VALIDATE_COMPONENT_TYPE);
}
