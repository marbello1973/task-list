"use strict";
const { Router } = require('express');
const router = Router();
//espacio para configurar las rutas 
router.get("/todolist", (req, res) => {
    res.status(200).json('esta es la ruta get ');
});
module.exports = router;
//# sourceMappingURL=index.js.map