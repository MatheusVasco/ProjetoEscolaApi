import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3,255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres'
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3,255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres'
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já cadastrado'
        },
        validate: {
          isEmail: {
            msg: 'Email inválido'
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro'
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precis ser um numero inteiro ou de ponto flutuante'
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precis ser um numero inteiro ou de ponto flutuante'
          },
        },
      },
    }, {
      sequelize,
    });
    return this
  }
  //Metodo para dizer que a foto está em um aluno
  static associate(models){
    // this.hasOne(models.Foto, {foreignKey: 'id'}) //diz que o Aluno tem uma fota
    this.hasMany(models.Foto, {foreignKey: 'aluno_id'}) //diz que o Aluno tem varias fota
  }
}
