import { StatusCodes } from "http-status-codes"
import { BadRequestError } from "../utils/errors.js"
import db from "../utils/db.js"

const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        // Check if there is existing user with email or username

        const { rows: selectedRows } = await db.query(`SELECT FROM users WHERE username=$1 OR email=$2`, [username, email]);
        
        if (selectedRows.length) {
            throw new BadRequestError('Username or email already in use');
        }

        if (!username || !email || !password) {
            throw new BadRequestError('Please provide all values');
        }


        // TODO: password encrypt and validation
        const { rows: insertedRows } = await db.query(`INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING *;`,
            [username, email, password]);

        if (insertedRows.length) {
            res.sendStatus(StatusCodes.OK);
        } else {
            throw new Error;
        }

    } catch (error) {
        next(error)
    }
}

const login = (req, res) => {
    res.sendStatus(StatusCodes.OK)
}


export { register, login }