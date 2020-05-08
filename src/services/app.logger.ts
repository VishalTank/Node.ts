import winston, { createLogger, format, transports } from 'winston';

const level = process.env.LOG_LEVEL;

const logFormat = format.printf(({ level, message, timestamp }) => {
	return `[${timestamp}] ${level}: ${message}`;
});

const formatOptions = format.combine(
	format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
	logFormat
);

const fileOptions = {
	level: 'info',
	filename: `./logs/app.log`,
	handleExceptions: true,
	maxsize: 5000000,
	maxFiles: 1,
	colorize: false
};

export const logger: winston.Logger = createLogger({
	level,
	format: formatOptions,
	transports: [
		new transports.Console(),
		new transports.File(fileOptions)
	]
});

export const stream = {
	write: function (message): void {
		// eslint-disable-next-line no-control-regex
		logger.info(message.slice(0, -1).replace(/\u001b\[[0-9]{1,2}m/g, ''));
	}
}
