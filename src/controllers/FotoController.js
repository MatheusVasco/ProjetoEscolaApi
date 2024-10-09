import multer from "multer";

import multerConfig from "../config/multerConfig";

import Foto from '../models/Foto';

//pode ser colocado como middleware, para alguma rota que precise receber um arquivo
const upload = multer(multerConfig).single('arquivo')

class FotoController {
  store(req, res){
    // req.file // fica guardado as informações do arquivo que foi importado
    // req.file.filename //Nome fo arquivo gerado
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err],
        })
      }
      try {
        const { originalname, filename} = req.file
        const { aluno_id } = req.body
        const foto = await Foto.create( {originalname, filename, aluno_id }) //salva o arquivo na base de dados com o nome passado, e ajustado, e o id enviado
        return res.json(foto)
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        })
      }
    })
  }
}

export default new FotoController();
