import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config"

const ensureAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({
            message: "Invalid token"
        })

    }

    const splitedToken = token.split(" ")[1]

    jwt.verify(splitedToken, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) {
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        res.locals.userId = decoded.sub

        return next()
    })
}

export { ensureAuthMiddleware }