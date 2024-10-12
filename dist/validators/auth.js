"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.registerSchema = void 0;
const express_validator_1 = require("express-validator");
exports.registerSchema = (0, express_validator_1.checkSchema)({
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
const validate = (validation) => {
    return (req, res, next) => {
        validation.run(req).then((result) => {
            try {
                (0, express_validator_1.validationResult)(req).throw();
                next();
            }
            catch (err) {
                return res.status(400).json({ errors: err });
            }
        });
    };
};
exports.validate = validate;
