"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
const router = new (0, _express.Router)();

//Não se deve mostrar os dados dos outros usuários
router.get('/', _loginRequired2.default, _UserController2.default.index);
router.get('/:id', _loginRequired2.default, _UserController2.default.show);

router.post('/', _loginRequired2.default, _UserController2.default.store);
//Usuário só pode alterar e deletar o proprio usuário e para isso ele precisa está logado
router.put('/', _loginRequired2.default, _UserController2.default.update);
//No caso de deletar, tem que tomar bastante cuidado, e decidir se deseja realmente apagar do banco, ou por exemplo marcar uma flag inativando o usuário
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH OU PUT
*/
