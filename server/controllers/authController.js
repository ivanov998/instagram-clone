import { StatusCodes } from "http-status-codes"
import { BadRequestError } from "../utils/errors.js"
import db from "../utils/db.js"

const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        // Check if there is existing user with email or username

        const { rows } = await db.query(`SELECT FROM users WHERE username=$1 OR email=$2`, [username, email])
        
        if (rows.length) {
            throw new BadRequestError('Username or email already in use');
        }

        if (!username || !email || !password) {
            throw new BadRequestError('Please provide all values')
        }

        res.sendStatus(StatusCodes.OK)
    } catch (error) {
        next(error)
    }
}

const login = (req, res) => {
    res.sendStatus(StatusCodes.OK)
}


export { register, login }