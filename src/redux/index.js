import { init } from '@rematch/core'
import * as models from './models'
import * as plugins from './plugins'

export default init({
  models,
  plugins
})
