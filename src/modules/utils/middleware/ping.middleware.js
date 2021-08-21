import getPingModel from '../models/ping.model'

const pingMiddleware = async ctx =>
  ctx.body = await getPingModel()

export default pingMiddleware
