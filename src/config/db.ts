
import { Sequelize } from "sequelize";
import { ENV } from "./env";

export const sequelize = new Sequelize(ENV.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});
