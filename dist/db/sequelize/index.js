"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const { Sequelize } = require("sequelize");
require("dotenv").config({ __dirname });
exports.sequelize = new Sequelize("ride-sharing", "postgres", process.env.PG_PASSWORD, {
    dialect: "postgres",
    host: "localhost"
});
