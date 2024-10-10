"use strict";'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      //mudar coluna email da tabela alunos com as informações passada no objeto, caso dê validation error, pode ser por já ter dados na tabela que não permitem alterar a configuração da coluna
      'alunos',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    );
  },

  async down () {}
};
