import jwt from 'jsonwebtoken';
import config from "./config";

export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    },
    config.JWT_SECRET
    )
};

export const isAuth = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if(!bearerToken){
        res.status(401).send({message: 'Token is not supplied!'})
    } else {
        //If there is a token, it will get the actual token part from the bearerToken string.
        //This string is usually of the form "Bearer <token>",
        //so the slice(7, bearerToken.length) function will remove the "Bearer " at the beginning and keep only the <token> part.
        const token = bearerToken.slice(7, bearerToken.length);
        jwt.verify(token, config.JWT_SECRET, (err, data) => {
            if(err){
                res.status(401).send({message: 'Invalid token!'})
            } else {
                req.user = data;
                next();
            }
        })
    }
}

export const isAdmin = (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        next();
    }else {
        res.status(401).send({ message: 'Token is not valid for admin user!' });
    }
}