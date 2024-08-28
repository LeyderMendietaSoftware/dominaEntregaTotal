import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Reemplaza 'YOUR_API_URL' con la URL de tu API
    axios.get('http://localhost:5001/api/tareas', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
        .then(response => setTasks(response.data.data))
        .catch(error => 
        {
            console.error('Error fetching tasks:', error);
            navigate("/login");
        }
        
      );
  }, [navigate]);

  const eliminarTarea = async (event, tareaSeleccionada) => {
    event.preventDefault();
    try {
        const token = localStorage.getItem('token');
        const url = `http://localhost:5001/api/tareas/${tareaSeleccionada}`;
        const method = 'delete';

        await axios({ method, url, headers: { 'Authorization': `Bearer ${token}` } });
        alert("Se ha eliminado la tarea");
        window.location.reload();
        
    } catch (error) {
        alert(error.response.data.message);
        console.error('Error guardando tarea:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tareas</h2>
      <div className="row">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <div key={task._id} className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><div className='text-danger pointer text-start smalltext' onClick={(e) => {
                    eliminarTarea(e,task._id)}}>Eliminar</div>{task.titulo}</h5>
                  <p className="card-text">{task.descripcion}</p>
                  <div className="d-flex justify-content-between">
                    <span className={`badge ${task.completed ? 'bg-success' : 'bg-secondary'}`}>
                      {task.completed ? 'Completado' : 'Pendiente'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No hay tareas disponibles.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
