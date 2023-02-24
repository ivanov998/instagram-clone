import express from "express"
import rateLimiter from 'express-rate-limit'

import { register, login, logout } from "../../controllers/authController.js";

const router = express.Router();

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: 'Too many requests'
});

router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);
router.route('/logout').get(logout);

export default router;