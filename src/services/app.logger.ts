import winston, { createLogger, format, transports } from 'winston';
import chalk from 'chalk';
const level = process.env.LOG_LEVEL;

const logFormat = format.printf(({ level, message, timestamp }) => {
	return `[${chalk.blueBright(timestamp)}] [${level}]: ${message}`;
});

const fileFormat = format.printf(({ level, message, timestamp }) => {
	return `[${timestamp}] [${level}]: ${message}`;
});

const options = {
	console: {
		level: 'debug',
		handleExceptions: true,
		json: true,
		format: format.combine(
			format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
			format.colorize(),
			logFormat
		)
	},
	file: {
		level,
		filename: `./logs/app.log`,
		handleExceptions: true,
		maxsize: 5000000,
		maxFiles: 1,
		format: format.combine(
			format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
			fileFormat
		)
	}
};

export const logger: winston.Logger = createLogger({
	transports: [
		new transports.Console(options.console),
		new transports.File(options.file),
	]
});

export const stream = {
	write: function (message: string): void {
		// eslint-disable-next-line no-control-regex
		logger.info(message.slice(0, -1).replace(/\u001b\[[0-9]{1,2}m/g, ''));
	}
}
