const Tarea = require('../models/Tarea');

exports.createTarea = async (req, res) => {
  const { titulo, descripcion } = req.body;

  if (!titulo || !descripcion) {
    return res.status(400).json({ status: 'error', message: 'titulo, descripcion y usuarioId  son requeridos' });
  }

  const tarea = new Tarea({ titulo, descripcion, usuarioId: req.usuario.id });
  await tarea.save();

  res.status(201).send(tarea);
};

exports.updateTarea = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ status: 'error', message: 'ID es requerido' });
  }

  const tarea = await Tarea.findByIdAndUpdate(id, req.body, { new: true });
  if (!tarea) return res.status(404).send('Tarea not found');
  res.send(tarea);
};

exports.deleteTarea = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ status: 'error', message: 'ID es requerido' });
  }
  
  const tarea = await Tarea.findByIdAndDelete(id);
  if (!tarea) return res.status(404).send('Tarea not found');
  res.send('Tarea deleted');
};
