
import { ENV } from "./env";
import { SequelizeOptions, Sequelize } from "sequelize-typescript";

const defaultConfig: SequelizeOptions = {
    host: ENV.DB_HOST,
    port: Number(ENV.DB_PORT),
    username: ENV.DB_USERNAME,
    password: ENV.DB_PASSWORD,
    database: ENV.DB_DATABASE,
    dialect: "postgres",
    logging: false,
    models: [__dirname + "/../models"],
};
export const sequelize = new Sequelize(defaultConfig);
export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection established.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    throw error;
  }
}