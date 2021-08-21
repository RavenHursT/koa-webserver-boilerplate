import Router from '@koa/router'
import pingRoute from './routes/ping.route'

const router = new Router()

export const getRouter = () => {
  const ping = pingRoute()

  router.use(ping.routes, ping.allowedMethods)
  return {
    router,
    routes: router.routes(),
    allowedMethods: router.allowedMethods()
  }
}
