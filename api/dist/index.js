"use strict";
/* import { config } from "dotenv";
import server from "./src/app";
import conn from "./src/models/Todolist";
config();
const { PORT } = process.env;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server conectado en el puerto ${PORT}`);
  });
});
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const server = (0, express_1.default)();
const port = 3000;
server.get("/todo", (req, res) => {
    res.send("ruta get ");
});
server.listen(port, () => {
    console.log("leventado puerto ", port);
});
//# sourceMappingURL=index.js.map