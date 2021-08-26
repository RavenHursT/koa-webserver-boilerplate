export const VERBOSE_LOGGING_OPTION_NAME = 'verbose'


const verboseLoggingOption = {
  name: VERBOSE_LOGGING_OPTION_NAME,
  config: {
    type: 'boolean',
    description: 'Verbose logging'
  }
}

export default [
  verboseLoggingOption
]
