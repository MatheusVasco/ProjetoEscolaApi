import jsonwebtoken from "jsonwebtoken";
import User from "../models/User";
export default async (req, res, next) => {
  const { authorization} = req.headers;

  if (!authorization){
    return res.status(401).json({
      errors: ['Login required'],
    })
  }
  const [,token] = authorization.split(' ');

  try {
    const dados = jsonwebtoken.verify(token, process.env.TOKEN_SECRET)
    const {id, email} = dados
    //Verificar se os dados informados do token ainda estão na base de dados
    const user = await User.findOne({where: {id, email}})
    if(!user){
      return res.status(401).json({
        errors: ['Usuário não é mais valido, por favor fazer login novamente com os dados']
      })
    }
    req.userId = id;
    req.userEmail = email;
    return next()
  } catch (e) {
    console.log(e);

    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    })
  }
}
