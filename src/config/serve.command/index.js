const serveConfig = {
  command: 'serve [port]',
  description: 'Start the server',
  builder: {
    port: {
      describe: 'Port to bind on',
      default: 8080,
      type: 'number'
    }
  }
}

export default serveConfig
