import Koa from 'koa'

export const createServer = config => {
  const app = new Koa()
  app.listen(
    config.port,
    (...args) => {
      console.log(`args => `, args)
      console.info(`Listing on http://localhost:${config.port}`)
    }
  )
  return app
}
