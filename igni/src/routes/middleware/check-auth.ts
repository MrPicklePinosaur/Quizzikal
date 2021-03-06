import { jwtKey } from '../../config';

const jwt = require('jsonwebtoken');

export const check_auth = (req:any,res:any,next:any) =>{
    try{
        const token = req.header("x-access-token");
        const decoded = jwt.verify(token, jwtKey);

        req.userData = decoded;

    } catch(error){
        return res.status(401).json({
            message:'Auth failed'
        });
    }

    next();

};
