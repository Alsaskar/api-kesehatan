import express from 'express';
import {register, login, loggedIn} from '../controllers/Auth';
import CekToken from '../middleware/CekToken';
const router: express.Router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/logged-in', CekToken, loggedIn);

export default router;