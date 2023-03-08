import express from "express";

const router = express.Router();

import authRoutes from "./auth.js";
import usersRoutes from "./users.js";
import postsRoutes from "./posts.js";

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/posts', postsRoutes);

export default router;