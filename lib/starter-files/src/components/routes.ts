import { Router } from 'express';
import { SampleRouter } from './sample/sample.routes';

const router: Router = Router();

router.use('/sample', SampleRouter);

export default router;
