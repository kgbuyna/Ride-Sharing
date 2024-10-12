"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("validators/auth");
const router = express_1.default.Router({ mergeParams: true });
router.route("/register").post((0, auth_1.validate)(auth_1.registerSchema), (req, res, next) => {
    console.log('error occured');
    res.status(200).json({ message: "User registered successfully" });
});
exports.default = router;
