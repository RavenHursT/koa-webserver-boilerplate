import loggerMiddleware from 'koa-pino-logger'
import crypto from 'crypto'

const logger = loggerMiddleware({
  genReqId: () => crypto.randomBytes(32).toString('hex')
})

export default logger
