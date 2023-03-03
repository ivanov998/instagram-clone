import { UnauthorizedError } from "../utils/errors.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            throw new UnauthorizedError;
        }

        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            req.userId = payload.userId;
            next();
        } catch (error) {
            throw new UnauthorizedError;
        }
    } catch(error) {
        next(error);
    }
}

export default auth;