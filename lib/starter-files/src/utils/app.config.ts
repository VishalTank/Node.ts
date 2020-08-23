export const AppConfig = {
	mode: process.env.MODE || 'dev',
	server: {
		port: parseInt(process.env.PORT) || 3000,
		logLevel: process.env.LOG_LEVEL || 'info'
	}
};
