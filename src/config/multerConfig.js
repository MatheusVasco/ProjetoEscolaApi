import multer from "multer";
import { extname, resolve } from 'path'

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000)

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg') {
      return cb(new multer.MulterError('Arquivo precisa ser png, jpg ou jpeg'))
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      //destino do arquivo que está sendo carregado
      cb(null, resolve(__dirname, '..', '..', 'uploads','images'))
    },
    filename: (req, file, cb) => {
      //Altera o nome do arquivo, para a data atual com os milisegundos, um numero aleatorio entre 10 mil e 20 mil e a extensão do arquivo original
      cb(null,`${Date.now()}_${aleatorio()}${extname(file.originalname)}`)
    },
  })
}
