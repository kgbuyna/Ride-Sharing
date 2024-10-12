"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("db/sequelize");
const sequelize_2 = require("sequelize");
const User = sequelize_1.sequelize.define('User', {
    username: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false,
    }
});
