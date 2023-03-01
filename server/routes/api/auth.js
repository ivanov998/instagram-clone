import express from "express"
import rateLimiter from 'express-rate-limit'

import { register, login, getCurrentUser, logout } from "../../controllers/authController.js";
import auth from "../../middleware/auth.js";

const router = express.Router();

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
    message: 'Too many requests'
});

router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);
router.route('/getCurrentUser').get(auth, getCurrentUser);
router.route('/logout').get(logout);

export default router;