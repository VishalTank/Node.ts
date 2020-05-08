require('dotenv').config();
import express from 'express';
import { server } from './server';
import { AppConfig } from './utils/app.config';
import { logger } from './services/app.logger';

class App {
	private app: express.Application = server.getServer();

	public initializeHttpServer(): void {
		this.app.listen(AppConfig.server.port, '0.0.0.0', () => {
			this.log(`HTTP Server started listening on: ${AppConfig.server.port}`);
		});
	}

	private log(message: string): void {
		console.log(message);
		logger.info(message);
	}
}

const app = new App();

app.initializeHttpServer();
