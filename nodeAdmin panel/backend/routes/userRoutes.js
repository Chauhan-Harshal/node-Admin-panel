import express from 'express';
import { register, login, logout } from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

export default router;
//
//Show Password

// mongodb+srv://chauhanharshal382_db_user:R3iKGUnrgCsInk41@cluster01.tqzyqgp.mongodb.net/?appName=Cluster01
// password