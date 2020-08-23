import { Router, Request, Response } from 'express';
import chalk from 'chalk';
import { sampleDatabaseOperations } from './sample.db';

const router: Router = Router();

router.get('/getData/:input', (req: Request, res: Response) => {

	sampleDatabaseOperations.sampleDbFunction(req.params.input)
		.then((result: string) => {
			console.log(chalk.blue.bold(result));
			res.status(200).send(result);
		})
		.catch((err: string) => {
			console.log(chalk.red.italic(err));
			res.status(500).send(err);
		})
})

export const SampleRouter: Router = router;
