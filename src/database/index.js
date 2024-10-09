import Sequelize  from "sequelize";
import databaseconfig from '../config/database'
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto'

const models = [Aluno,User, Foto];

const connection = new Sequelize(databaseconfig);

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))
