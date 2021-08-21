import config from './config'
import {createServer} from './server'
import {getRouter as getRootRouter}from './router'

const rootRouter = getRootRouter()

createServer(config)
  .use(rootRouter.routes)
  .use(rootRouter.allowedMethods)
