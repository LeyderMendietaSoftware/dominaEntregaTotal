const express = require('express');
const mongoose = require('mongoose');
const tareasRoutes = require('./app/tareasRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tareasdb');

app.use('/api/tareas', tareasRoutes);

app.listen(5001, () => console.log('Servicio ejecutando http://localhost:5001'));

console.info("Crear Tarea:      [POST]   http://localhost:5001/api/tareas");
console.info("Actualizar Tarea: [PUT]    http://localhost:5001/api/tareas/:id");
console.info("Eliminar Tarea:   [DELETE] http://localhost:5001/api/tareas/:id");