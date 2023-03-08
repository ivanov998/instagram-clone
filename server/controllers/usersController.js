import { StatusCodes } from "http-status-codes";
import { nanoid } from "nanoid";

import { BadRequestError } from "../utils/errors.js";
import db from "../utils/db.js";

const getUserByUsername = async (req, res, next) => {

    try {
        const { username } = req.params;
        
        const { rows: selectedRows } = await db.query(`SELECT username FROM users WHERE username=$1`, [username]);

        if (!selectedRows.length) {
            throw new BadRequestError('Invalid username');
        }
        
        res.status(StatusCodes.OK).json({ user: selectedRows[0] });
    } catch (error) {
        next(error);
    }
}

const getCurrentUser = async (req, res, next) => {

    try {
        const userId = req.userId;
        
        const { rows } = await db.query(`SELECT username, email FROM users WHERE id=$1`, [userId]);
        
        if (!rows) {
            throw new Error;
        }
        
        const user = rows[0];
        res.status(StatusCodes.OK).json(user);
    } catch(error) {
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    // Empty controller
    res.sendStatus(StatusCodes.OK);
}

const deleteUser = async (req, res, next) => {
    // Empty controller
    res.sendStatus(StatusCodes.OK);
}

export { getUserByUsername, getCurrentUser, updateUser, deleteUser }