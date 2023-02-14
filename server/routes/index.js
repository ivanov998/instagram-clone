import express from "express"
import path from "path"

import apiRoutes from "./api/index.js"

const apiPath = path.join('/', process.env.API_URL);

const router = express.Router();

router.use(apiPath, apiRoutes);

export default router;