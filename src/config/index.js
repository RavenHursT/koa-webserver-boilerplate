import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'
import serveConfig from './serve.command'
import logConfigOptions from '../modules/logger/config'

const cliConfig = yargs(hideBin(process.argv))
  .command(serveConfig)
  .alias('v', 'version')
  .version()

logConfigOptions.forEach(
  ({name, config}) => cliConfig.option(name, config)
)

export default cliConfig.argv
