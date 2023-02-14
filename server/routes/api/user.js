import express from "express"
import db from "../../utils/db.js"

const router = express.Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    const { rows } = await db.query(`SELECT username FROM users WHERE id = $1`,[id])
    res.send(rows[0])
})

export default router;