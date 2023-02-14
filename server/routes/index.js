import express from "express"
import apiRoutes from "./api/index.js"

// Hardcoded; TODO: move it as variable inside .env
const apiPath = '/api';

const router = express.Router();

router.use(apiPath, apiRoutes);

export default router;