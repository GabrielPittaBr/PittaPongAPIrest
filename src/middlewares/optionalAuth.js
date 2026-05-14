const jwt = require('jsonwebtoken');
const Usuario = require('../models/userModels');

// Autenticação opcional: verifica req.user se o token estiver presente, mas não bloqueia a requisição
module.exports = async (req, res, next) => {
  res.locals.user = null;

  let token = null;

  const authHeader = req.headers.authorization;
  if (authHeader) {
    token = authHeader.split(' ')[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) return next();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const usuario = await Usuario.findById(decoded.id).select('-senha');
    if (usuario) {
      req.userId = decoded.id;
      req.user = usuario;
      res.locals.user = usuario;
    }
  } catch {
    // Token inválido ou expirado – apenas continua sem usuário
  }

  next();
};
