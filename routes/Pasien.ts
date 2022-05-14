import express from 'express';
import {add, get_all} from '../controllers/Pasien';
const router: express.Router = express.Router();

router.post('/add', add);
router.get('/get-all', get_all);

export default router