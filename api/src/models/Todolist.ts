import { config } from "dotenv";
import { Sequelize, Model, DataTypes } from "sequelize";
config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Todolist`,
  {
    logging: false, //quita la informacion de consola
    native: false, //mas rapido la cnexion
  }
);

interface Task extends Model {
  id: string;
  name: string;
  description: string;
  active: boolean;
}

const UserModel = sequelize.define<Task>("Task", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default UserModel;
