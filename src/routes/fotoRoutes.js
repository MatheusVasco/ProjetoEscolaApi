import { Router } from "express";

import fotoController from "../controllers/FotoController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();
//indica que na rota de post de fotos irá receber um arquivo, no campo passado como arquivo
router.post('/', loginRequired, fotoController.store);

export default router
