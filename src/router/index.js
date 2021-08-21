import Router from '@koa/router'
import {getRouter as getUtilsRouter} from '../modules/utils'

export const getRouter = () => {
  const router = new Router()
  const utilsRouter = getUtilsRouter()
  router.use(utilsRouter.routes, utilsRouter.allowedMethods)
  return {
    router,
    routes: router.routes(),
    allowedMethods: router.allowedMethods()
  }
}
