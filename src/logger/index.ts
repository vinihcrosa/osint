import { pino } from 'pino'

pino({
  level: 'debug',
  prettyPrint: {
    levelFirst: true,
    colorize: true
  }
})

export default pino