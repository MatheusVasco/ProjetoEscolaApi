"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3,255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres'
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3,255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres'
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro'
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precis ser um numero inteiro ou de ponto flutuante'
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
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
} exports.default = Aluno;
