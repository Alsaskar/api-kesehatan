import express from 'express';
import {get_all, add, get_by, remove} from '../controllers/Kamar';
const router: express.Router = express.Router();

router.get('/get-all', get_all);
router.post('/add', add);
router.get('/get-by/:idRs', get_by);
router.delete('/remove/:idKamar', remove);

export default router