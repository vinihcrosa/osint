import pino from 'pino'

export default pino({
  level: 'debug', // seta o nível mínimo de logs que aparecerão no console
	prettyPrint: { // seta o pino-pretty
		levelFirst: true,
		colorize: true,
    translateTime: 'dd-mm-yyyy HH:MM:SS'
	}
}, pino.destination("./pino-logger.log"))