import { login } from "controllers/auth";
import express, { NextFunction, Request, Response } from "express";
import { registerSchema, validate  } from "validators/auth";

const router = express.Router({ mergeParams: true });

router.route("/register").post( 
    validate(registerSchema),
    
    (req:Request, res:Response, next:NextFunction) => {
        console.log('error occured') 
        res.status(200).json({ message: "User registered successfully" });  
    }
);

export default router;