import "dotenv/config";
import { Sequelize } from "sequelize";
const { DB_USER, DB_HOST, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Todolist`,
  {
    logging: false, //quita la informacion de consola
    native: false, //mas rapido la cnexion
  }
);

export default sequelize;
