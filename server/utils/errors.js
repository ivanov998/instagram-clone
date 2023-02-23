import { StatusCodes } from "http-status-codes"

class CustomAPIError extends Error {
    constructor (message) {
        super(message)
    }
}

class BadRequestError extends CustomAPIError {
    constructor (message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

class UnauthorizedError extends CustomAPIError {
    constructor (message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}


export { BadRequestError, UnauthorizedError }