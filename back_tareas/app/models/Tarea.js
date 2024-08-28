const mongoose = require('mongoose');

const TareaModel = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  completado: { type: Boolean, default: false },
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }
});

module.exports = mongoose.model('Tarea', TareaModel);
