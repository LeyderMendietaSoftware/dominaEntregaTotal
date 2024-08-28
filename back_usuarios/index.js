const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./app/auth');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Permitir solicitudes solo desde este origen
    methods: 'GET,POST,PUT,DELETE', // Métodos HTTP permitidos
    credentials: true // Permitir credenciales (opcional)
  }));

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/userdb');

app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Servicio ejecutando http://localhost:5000'));

console.info("Registrar Usuario: http://localhost:5000/api/auth/register");
console.info("Ingresar Usuario: http://localhost:5000/api/auth/login");