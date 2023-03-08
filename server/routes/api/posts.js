import express from "express"
import rateLimiter from 'express-rate-limit'

import { createPost, getPost, updatePost, deletePost } from "../../controllers/postsController.js";
import auth from "../../middleware/auth.js";

const router = express.Router();

// TODO: find the most appropriate rate limit
const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
    message: 'Too many requests'
});

router.route('/create').post(apiLimiter, createPost);
router.route('/get').get(getPost);
router.route('/create').patch(updatePost);
router.route('/delete').delete(deletePost);

export default router;