import { StatusCodes } from "http-status-codes";
import { nanoid } from "nanoid";

import { BadRequestError } from "../utils/errors.js";
import db from "../utils/db.js";

const createPost = async (req, res, next) => {
    try {

        const { caption } = req.body;
        
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

const getPostByUrl = async (req, res, next) => {
    try {

        const { url } = req.params;
        
        // TODO: post id length to be moved into .env instead of hardcoding it;
        if (!url || url.length < 12) {
            throw new BadRequestError('Invalid URL');
        }
        const { rows: selectedRows } = await db.query(`SELECT * FROM posts WHERE url=$1`, [url]);

        if (!selectedRows.length) {
            throw new BadRequestError('Invalid URL');
        }
        
        res.status(StatusCodes.OK).json({ post: selectedRows[0] });
    } catch (error) {
        next(error);
    }
}

const getAllPostsForUser = async (req, res, next) => {
    try {

        const { id } = req.params;
        
        // For now, it is safe to select everything;
        const { rows } = await db.query(`SELECT * FROM posts WHERE user_id=$1`, [id]);
        
        res.status(StatusCodes.OK).json({ posts: rows });
    } catch (error) {
        next(error);
    }
}

const updatePost = async (req, res, next) => {
    // Empty controller
    res.sendStatus(StatusCodes.OK);
}

const deletePost = async (req, res, next) => {
    // Empty controller
    res.sendStatus(StatusCodes.OK);
}

export { createPost, getPostByUrl, getAllPostsForUser, updatePost, deletePost }