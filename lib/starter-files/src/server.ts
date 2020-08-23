import express from 'express';
import routes from './components/routes';
import applyMiddlewares from './middlewares';

class Server {
	private app: express.Application;

	constructor() { }

	public getServer(): express.Application {
		this.app = express();
		this.configureApp();

		return this.app;
	}

	private configureApp(): void {
		applyMiddlewares(this.app);
		this.app.use('/server', routes);
	}
}

export const server: Server = new Server();
