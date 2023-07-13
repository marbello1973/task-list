"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todolist = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("src/db");
const Todolist = db_1.sequalize.define("Task", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
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
        defaultValue: false,
        allowNull: false,
    },
});
exports.Todolist = Todolist;
//# sourceMappingURL=Todolist.js.map