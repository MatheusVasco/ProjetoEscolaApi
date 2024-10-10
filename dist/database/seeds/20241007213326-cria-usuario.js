"use strict";'use strict';
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'users', //nome da tabela
      [
        //Dados a inserido no formato de objeto
        {
          nome: 'Vitor',
          email: 'vitor@gmail.com',
          password_hash: await bcryptjs.hash('654321',8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Luan',
          email: 'Luan@gmail.com',
          password_hash: await bcryptjs.hash('321321',8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Mario',
          email: 'Mario@gmail.com',
          password_hash: await bcryptjs.hash('123456',8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  async down () {}
};
