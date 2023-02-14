import { StatusCodes } from "http-status-codes"

const register = (req, res) => {
    res.sendStatus(StatusCodes.OK)
}

const login = (req, res) => {
    res.sendStatus(StatusCodes.OK)
}


export { register, login }