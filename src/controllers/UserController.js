import { password } from '../config/database';
import User from '../models/User'

class UserController {
  //Create
  async store(req, res){
    try {
      const novoUser = await User.create(req.body);
      const {id, nome, email} = novoUser
      return res.json({id, nome, email});
    } catch(e){
      return res.status(400).json({
        errors: e.errors.map( (err) => err.message)
      })
    }
  }

  //Index
  async index(req, res){
    try {
      const users = await User.findAll({attributes: ['id','nome','email']}); //Retorna somente os dados do id, nome e email
      return res.json(users);
    } catch(e){
      return res.json(null)
    }
  }

  //Show
  async show(req, res){
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email} = user
      return res.json({ id, nome, email}); //Mostra somente o id, o nome e o email do usuário especificado
    } catch(e){
      return res.json(null)
    }
  }

  //Update
  async update(req, res){
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        })
      }
      const dadosUser = await user.update(req.body)
      const {id, nome, email} = dadosUser
      return res.json({id, nome, email});
    } catch(e){
      return res.status(400).json({
        errors: e.errors.map( (err) => err.message)
      })
    }
  }

  //Delete
  async delete(req, res){
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        })
      }
      await user.destroy()
      return res.json(null);
    } catch(e){
      return res.status(400).json({
        errors: e.errors.map( (err) => err.message)
      })
    }
  }
}

export default new UserController();
