import express from "express"
import rateLimiter from 'express-rate-limit'

import { createPost, getPostByUrl, getAllPostsForUser, updatePost, deletePost } from "../../controllers/postsController.js";
import auth from "../../middleware/auth.js";

const router = express.Router();

// TODO: find the most appropriate rate limit
const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
    message: 'Too many requests'
});

router.route('/create').post(auth, apiLimiter, createPost);
// Get doesn't require authentication, posts should be visible to non-authenticated users
router.route('/:url').get(getPostByUrl);
router.route('/allPosts/:id').get(getAllPostsForUser);
router.route('/update/:id').patch(auth, updatePost);
router.route('/delete/:id').delete(auth, deletePost);

export default router;