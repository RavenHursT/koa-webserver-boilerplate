import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'
import serveConfig from './serve.command'

const config = yargs(hideBin(process.argv))
  .command(serveConfig)
  // .command(
  //   'serve [port]',
  //   'Start the server',
  //   (yargs) => yargs.positional('port', {
  //     describe: 'Port to bind on',
  //     default: 8080,
  //     type: 'number'
  //   })
  // )
  .alias('v', 'version')
  .version()
  .option('verbose', {
    type: 'boolean',
    description: 'Run with verbose logging'
  })

export default config.argv
