import Aluno from '../models/Aluno'
import Foto from '../models/Foto'

class AlunoController {
  async index(req, res){
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'idade', 'peso', 'altura'], //campos a serem selecionados
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']], //ordena de forma decrescente o Aluno, e as fotos
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      } //informa que inclue as fotos com esse id
    })
    res.json(alunos);
  }
  async store(req, res){
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }
  }

  async show(req, res){
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID']
        })
      }
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'idade', 'peso', 'altura'], //campos a serem selecionados
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']], //ordena de forma decrescente o Aluno, e as fotos
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        } //informa que inclue as fotos com esse id
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        })
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }
  }

  async delete(req, res){
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID']
        })
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        })
      }
      await aluno.destroy()
      return res.json({
        apagado: true
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }
  }

  async update(req, res){
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID']
        })
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        })
      }
      const novoAluno = await aluno.update(req.body)
      return res.json(novoAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }
  }
}

export default new AlunoController();
