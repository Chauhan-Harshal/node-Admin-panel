import express from 'express';
import { getUsers, deleteUser } from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to admin dashboard', user: req.user });
});

router.get('/users', verifyToken, getUsers);
router.delete('/users/:id', verifyToken, deleteUser);

export default router;