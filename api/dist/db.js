"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = exports.Todolist = exports.sequalize = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const dotenv_1 = require("dotenv");
const sequalize = new sequelize_typescript_1.Sequelize(`postgres://${dotenv_1.DB_USER}:${dotenv_1.DB_PASSWORD}@:${dotenv_1.DB_HOST}/todolist`, {
    logging: false,
    native: false,
});
exports.sequalize = sequalize;
const basename = path_1.default.basename(__filename);
const modelDefiners = [];
fs_1.default.readdirSync(path_1.default.join(__dirname, "/models"))
    .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === "ts")
    .forEach((file) => {
    const model = require(path_1.default.join(__dirname, "/models", file));
    modelDefiners.push(model.default);
});
// Nos conectamos a Sequelize
modelDefiners.forEach((model) => model(sequalize));
const ent = Object.entries(sequalize.models);
const capsEntries = ent.map(([key, value]) => [
    key[0].toUpperCase() + key.slice(1),
    value,
]);
const models = Object.fromEntries(capsEntries);
exports.models = models;
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Todolist: ModelCtor };
;
models;
/* require('dotenv').config()
const {Sequelize} = require('sequelize')
const fs = require('fs')
const path  = require('path')
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env

const sequelize =  new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/todolist`, {
        logging: false,
        native:false
    }
)

const basename = path.basename(__filename)
const modelDefiners = []

// para leer todos los archivos de la carpeta models

fs.readdirSync(path.join(__dirname, '/models')).filter((file) =>
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts'
).forEach((file) => { modelDefiners.push(require(path.join(__dirname, '/models', file)))
    
});


//nos conectamos a sequalize
modelDefiners.forEach((model) => model(sequelize))
let entries = Object.entries(sequelize.models)
let capsEntries =  entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1]
])
sequelize.models = Object.fromEntries(capsEntries)

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {Todolist} = sequelize.models
// Aca vendrian las relaciones
module.exports = {
    ...sequelize.models,//para importar los modelos
    conn: sequelize//para importar la conexion conn
} */
//# sourceMappingURL=db.js.map