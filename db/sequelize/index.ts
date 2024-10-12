const { Sequelize } = require("sequelize");
require("dotenv").config({ __dirname });

export const sequelize = new Sequelize("ride-sharing","postgres", process.env.PG_PASSWORD, {
    dialect: "postgres",  
    host: "localhost"
}); 