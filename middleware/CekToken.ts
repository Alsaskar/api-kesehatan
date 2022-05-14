import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

const cekToken = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, 'Token008007***', (error, decoded) => {
            if (error) {
                return res.status(200).json({
                    result: {
                        message: error.message,
                        loggedIn: false
                    }
                })
            } else {
                res.locals.jwt = decoded;
                next()
            }
        })
    }else{
        return res.status(200).json({
            message: 'Unauthorized',
            loggedIn: false
        })
    }
}

export default cekToken