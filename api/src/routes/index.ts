import { Router } from "express";
import taskRoutes from "./taskroutes";
const mainroutes = Router();

//aca van las rutas use
// ejemplo de rutas mainroutes('/', auth)
mainroutes.use("/", taskRoutes);

export default mainroutes;
