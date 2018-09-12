import { init } from '@rematch/core'
import * as models from './models'
import createRouterPlugin from './storeRouterPlugin'

export default init({
  models,
  plugins: [createRouterPlugin()]
})
