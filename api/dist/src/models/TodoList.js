"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Todolist`, {
    logging: false,
    native: false, //mas rapido la cnexion
});
const UserModel = sequelize.define("Task", {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
exports.default = UserModel;
//# sourceMappingURL=Todolist.js.map