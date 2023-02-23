import { StatusCodes } from "http-status-codes"
import bcrypt from "bcrypt"

import { BadRequestError, UnauthorizedError } from "../utils/errors.js"
import db from "../utils/db.js"

const register = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;

        // Check if there is existing user with email or username

        const { rows: selectedRows } = await db.query(`SELECT FROM users WHERE username=$1 OR email=$2`, [username, email]);
        
        if (selectedRows.length) {
            throw new BadRequestError('Username or email already in use');
        }

        if (!username || !email || !password) {
            throw new BadRequestError('Please provide all values');
        }

        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

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

const login = async (req, res, next) => {

    try {
        const { login, password } = req.body;

        if (!login.length || !password.length) {
            throw new Error;
        }

        // TODO: optimize this query
        const { rows: selectedRows } = await db.query(`SELECT password FROM users WHERE (username=$1 OR email=$1)`, [login]);

        if (!selectedRows.length) {
            throw new UnauthorizedError("The username/email is not registered")
        }

        const retrievedPassword = selectedRows[0].password;

        const isMatch = await bcrypt.compare(password, retrievedPassword)

        if (isMatch) {
            res.sendStatus(StatusCodes.OK);
        } else {
            throw new UnauthorizedError("Invalid password")
        }
    } catch(error) {
        next(error);
    }

}


export { register, login }