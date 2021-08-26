import getPingModel from '../models/ping.model'

const pingMiddleware = async ctx => {
  ctx.request.log.info('Handling ping request')
  ctx.body = await getPingModel()
}
export default pingMiddleware
