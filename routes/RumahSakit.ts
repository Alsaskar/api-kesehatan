import express from 'express';
import {add, countRs} from '../controllers/RumahSakit';
const router: express.Router = express.Router();

router.post('/add', add);
router.get('/count', countRs);

export default router;