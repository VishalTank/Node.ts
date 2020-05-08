import express, { Router } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { stream } from '../services/app.logger';

export const handleRequestBodyParsing = (router: Router): void => {
	router.use(express.json());
	router.use(express.urlencoded({ extended: true }));
};

export const handleCors = (router: Router): void => {
	router.use(cors());
};

export const handleHTTPLogs = (router: Router): void => {
	router.use(morgan('dev'));
	router.use(morgan('dev', { stream }));
}
