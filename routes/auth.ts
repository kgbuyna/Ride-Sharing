import { login } from "controllers/auth";
import express, { NextFunction, Request, Response } from "express";
import { registerSchema, validate  } from "validators/auth";
// import db from "db/models/user";
import { User } from "db/models"; // Ensure the path is correct

const router = express.Router({ mergeParams: true });

router.route("/register").post( 
    validate(registerSchema),
    async (req:Request, res:Response, next:NextFunction) => {
        try {
            console.log(req.body);
            const user = await User.create(req.body);
            res.status(200).json({ message: "User registered successfully", user });  
        } catch (error) {
            next(error);
        }
    }
);

export default router;