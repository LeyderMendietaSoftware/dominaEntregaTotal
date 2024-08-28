# Domina Entrega Total
Prueba Técnica (Arquitecto de Software)

## Requisitos para despliegue de servicios
- NPM Version usada: 10.8.2
- Node Version usada: 22.7.0
- Se requiere tener instalado MongoDB `Server por defecto localhost:27017`

## Desplegar servicios backend
- Ir a la carpeta de cada servicio en CMD o Powershell, ejectar el siguiente comando:
```bash
npm install
```
- Una vez instalados todos los paquetes, ejectar el siguiente comando:
```bash
node index.js
```

# Endpoints BackEnd

## Usuarios
- Registrar Usuario: http://localhost:5000/api/auth/register
- Ingresar Usuario: http://localhost:5000/api/auth/login

## Tareas [Requiere Bearer Token JWT]
- Crear Tarea:      [POST]   http://localhost:5001/api/tareas
- Actualizar Tarea: [PUT]    http://localhost:5001/api/tareas/:id
- Eliminar Tarea:   [DELETE] http://localhost:5001/api/tareas/:id

# Authors
- [@LeyderMendietaSoftware](https://github.com/LeyderMendietaSoftware)
