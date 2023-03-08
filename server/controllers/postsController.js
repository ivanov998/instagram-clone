import { StatusCodes } from "http-status-codes";

import { nanoid } from "nanoid";

import { BadRequestError } from "../utils/errors.js";
import db from "../utils/db.js";

const createPost = async (req, res, next) => {

    try {
        let { caption } = req.body;
        
        if (!caption) {
            throw new BadRequestError('Please provide all values');
        }
        
        const { userId } = req;
        const url = nanoid(12);

        const { rows: insertedRows } = await db.query(`INSERT INTO posts (caption, url, user_id) VALUES ($1,$2,$3) RETURNING *;`,
            [caption, url, userId]);

        if (insertedRows.length) {
            res.sendStatus(StatusCodes.OK);
        } else {
            throw new Error;
        }

    } catch (error) {
        next(error);
    }
}

const getPost = async (req, res, next) => {
    console.log(req);
    // Empty controller
    res.sendStatus(StatusCodes.OK);
}

const updatePost = async (req, res, next) => {
    // Empty controller
    res.sendStatus(StatusCodes.OK);
}

const deletePost = async (req, res, next) => {
    // Empty controller
    res.sendStatus(StatusCodes.OK);
}

export { createPost, getPost, updatePost, deletePost }