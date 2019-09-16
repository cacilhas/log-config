import * as winston from 'winston'

export enum LogLevel {
  EMERG = 'emerg',
  ALERT = 'alert',
  CRIT = 'crit',
  CRITICAL = 'crit',
  ERROR = 'error',
  WARN = 'warning',
  WARNING = 'warning',
  NOTICE = 'notice',
  INFO = 'info',
  DEBUG = 'debug',
}

function getLevel(): string {
  const level = process.env.LOG_LEVEL
    ? LogLevel[process.env.LOG_LEVEL.toLocaleUpperCase()]
    : null
  switch (process.env.NODE_ENV) {
    case 'test':
      return LogLevel.EMERG

    case 'production':
      return level || LogLevel.INFO

    default:
      return level || LogLevel.DEBUG
  }
}

function createLogger(): winston.Logger {
  const appName = (process.env.APP_NAME || '').trim()
  const defaultMeta = appName === '' ? {} : { service: appName }
  return winston.createLogger({
    levels: winston.config.syslog.levels,
    level: getLevel(),
    defaultMeta,
    // For simplicity, only console is supported
    transports: [new winston.transports.Console()],
  })
}

export const logger = createLogger()

if (process.env.NODE_ENV !== 'test')
  logger.log(logger.level, 'minimal log level', {})
