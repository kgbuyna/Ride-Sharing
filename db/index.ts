import { sequelize } from "./sequelize";

require("dotenv").config({ __dirname });

export const assertDatabaseConnectionOk = async ()=> {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error)
    process.exit(1);
  }
};