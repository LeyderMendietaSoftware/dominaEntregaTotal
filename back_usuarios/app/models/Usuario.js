const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuarioModel = new mongoose.Schema({
  usuario: { type: String, required: true, unique: true },
  clave: { type: String, required: true }
});

UsuarioModel.pre('save', async function(next) {
  if (this.isModified('clave')) {
    this.clave = await bcrypt.hash(this.clave, 10);
  }
  next();
});

module.exports = mongoose.model('Usuario', UsuarioModel);
