import Router from '@koa/router'
import {getRouter as getUtilsRouter} from '../modules/utils'
import Boom from '@hapi/boom'

export const getRouter = () => {
  const router = new Router()
  const utilsRouter = getUtilsRouter()
  router.use(utilsRouter.routes, utilsRouter.allowedMethods)
  return {
    router,
    routes: router.routes(),
    allowedMethods: router.allowedMethods({
      throw: true,
      notImplemented: Boom.notImplemented(),
      methodNotAllowed: Boom.methodNotAllowed()
    })
  }
}
