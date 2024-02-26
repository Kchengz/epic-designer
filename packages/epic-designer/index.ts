import { pluginManager } from '../utils'

export * from '../core'

export * from '../utils'

export * from '../ui'

export async function setupAntdV3 () {
  const { setupAntdV3 } = await import('../ui-antdv3/src')
  setupAntdV3.bind(null, pluginManager)()
}
