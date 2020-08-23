import express from 'express';
import { handleRequestBodyParsing, handleCors, handleHTTPLogs } from './common.middleware';

export default function applyMiddlewares(app: express.Application): void {
	handleRequestBodyParsing(app);
	handleCors(app);
	handleHTTPLogs(app);
}
