import { AlternativeValidationError, checkSchema, FieldValidationError, GroupedAlternativeValidationError, Schema, UnknownFieldsError, ValidationChain, ValidationError, validationResult } from "express-validator";
import express, { Request, RequestHandler, Response, NextFunction } from "express";
import { RunnableValidationChains } from "express-validator/lib/middlewares/schema";

export const registerSchema = checkSchema({
    username: { 
        isString: {
            errorMessage: "Username must be a string."
        }, 
        notEmpty: { 
            errorMessage: "Username is required." 
        },
        isLength: { 
            options: { min: 3 }, 
            errorMessage: "Username must be at least 3 characters long." 
        }
    },
    password: { 
        notEmpty: { 
            errorMessage: "Password is required." 
        },
        isLength: { 
            options: { min: 8 }, 
            errorMessage: "Password must be at least 8 characters long." 
        }
    },
    passwordConfirm: { 
        notEmpty: { 
            errorMessage: "Password confirmation is required." 
        },
        custom: {
            options: (value, { req }) => {
                return value === req.body.password;
            },
            errorMessage: "Passwords do not match."
        }
    }
});

export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
    return (req: Request, res: Response, next: NextFunction) => { 
        validation.run(req).then((result) => {
            try {
                validationResult(req).throw();       
                next();  
            }
            catch (err) {
                return res.status(400).json({ errors: err });
            }
        })
    };
};
