const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { usuario, clave } = req.body;
  
  if (!usuario || !clave) {
    return res.status(400).json({ status: 'error', message: 'Usuario y clave son requeridos' });
  }

  const userExiste = await Usuario.findOne({ usuario });
  if (userExiste) {
    return res.status(401).json({ status: 'error', message: 'El usuario ya existe' });
  }

  const user = new Usuario({ usuario, clave });
  await user.save();
  res.status(201).json({ status: 'success', message: 'Usuario Registrado', user: user });
  
};

exports.login = async (req, res) => {
  const { usuario, clave } = req.body;

  if (!usuario || !clave) {
    return res.status(400).json({ status: 'error', message: 'Usuario y clave son requeridos' });
  }

  const user = await Usuario.findOne({ usuario });
  if (!user || !(await bcrypt.compare(clave, user.clave))) {
    return res.status(401).json({ status: 'error', message: 'Usuario y/o contraseña incorrecta' });
  }
  const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
  res.json({status: 'success', token: token });
};
