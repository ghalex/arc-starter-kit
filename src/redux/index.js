
import { init } from '@rematch/core'
import * as models from './models'
import selectPlugin from '@rematch/select'
import { subscriptionsPlugin, initPlugin } from './plugins'

export default init({
  models,
  plugins: [
    subscriptionsPlugin(),
    selectPlugin(),
    initPlugin()
  ]
})
