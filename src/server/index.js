import Koa from 'koa'
import logger from '../modules/logger/logger'

export const createServer = config => {
  const app = new Koa()
  app.use(logger)
  app.listen(
    config.port,
    () => {
      console.info(`Listing on http://localhost:${config.port}`)
    }
  )
  return app
}
