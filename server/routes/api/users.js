import express from "express"

import { getUserByUsername, getCurrentUser, updateUser, deleteUser } from "../../controllers/usersController.js";
import auth from "../../middleware/auth.js";

const router = express.Router();

router.route('/user/:username').get(getUserByUsername);
router.route('/current').get(auth, getCurrentUser);
router.route('/update/:id').put(auth, updateUser);
router.route('/delete/:id').delete(auth, deleteUser);

export default router;