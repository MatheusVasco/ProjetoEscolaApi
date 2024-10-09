import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";
const router = new Router();

//Não se deve mostrar os dados dos outros usuários
router.get('/', loginRequired, userController.index);
router.get('/:id', loginRequired, userController.show);

router.post('/', loginRequired, userController.store);
//Usuário só pode alterar e deletar o proprio usuário e para isso ele precisa está logado
router.put('/', loginRequired, userController.update);
//No caso de deletar, tem que tomar bastante cuidado, e decidir se deseja realmente apagar do banco, ou por exemplo marcar uma flag inativando o usuário
router.delete('/', loginRequired, userController.delete);

export default router

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH OU PUT
*/
