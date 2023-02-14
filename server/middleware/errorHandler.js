import { StatusCodes } from "http-status-codes"

const errorHandler = (err, req, res, next) => {

    const error = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Try again later"
    }

    console.error(`Error: ${error.statusCode}: ${error.msg}`)

    res.status(error.statusCode).json({ msg: error.msg })
}

export default errorHandler