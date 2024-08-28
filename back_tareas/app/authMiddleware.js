const jwt = require('jsonwebtoken');

// Clave secreta para firmar el JWT (debe ser la misma en el servidor y cliente)
const SECRET_KEY = 'secret';

// Middleware para verificar el token y extraer el IdUser
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, usuario) => {
    if (err) return res.sendStatus(403);
    req.usuario = usuario;
    next();
  });
};

module.exports = authenticateToken;
