import { pluginManager } from '../utils'

export * from '../core'

export * from '../utils'

export * from '../ui'

export function setupAntdV3 () {
  import('../ui-antdv3/src').then(({ setupAntdV3 }) => {
    setupAntdV3.bind(null, pluginManager)()
  })
}
