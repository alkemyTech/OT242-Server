import { Router } from "express";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from "../config/auth"

const sessionRouter = Router();

sessionRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    jwt.sign({user}, process.env.secretKey, (err, token) => {
        res.json({
            subject: String(user.id),
            token
        })
        
    });
    
    return res.json(user.name, token)

})

export default sessionRouter;