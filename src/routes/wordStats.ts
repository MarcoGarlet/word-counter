import { Router } from 'express';
import resourceController  from '../controllers/resourceController';

const router: Router = Router();

router.post('/analyze', (req, res) => resourceController.analyzeResource(req, res));

export default router;
