import express from "express";

const router = express.Router();

import authRoutes from "./auth.js";
import postsRoutes from "./posts.js";

router.use('/auth', authRoutes);
router.use('/posts', postsRoutes);

export default router;