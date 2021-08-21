import Route from '@koa/router'
import pingMiddleware from '../middleware/ping.middleware'

const pingRoute = () => {
  const router = new Route()
  router.get(
    '/ping',
    pingMiddleware
  )
  return {
    router,
    routes: router.routes(),
    allowedMethods: router.allowedMethods()
  }
}

export default pingRoute
