import jwt from "jsonwebtoken";

export const attachCookies = (res, token) => {
    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production'
    })
}

export const signJwt = (userId) => 
    jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })