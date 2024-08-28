import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ task, onSave }) => {
  const [titulo, setTitulo] = useState(task ? task.titulo : '');
  const [descripcion, setDescripcion] = useState(task ? task.descripcion : '');
  const [completed, setCompleted] = useState(task ? task.completed : false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const token = localStorage.getItem('token');
        const url = task ? `http://localhost:5001/api/tareas/${task._id}` : 'http://localhost:5001/api/tareas/';
        const method = task ? 'put' : 'post';

        await axios({ method, url, data: { titulo, descripcion, completed }, headers: { 'Authorization': `Bearer ${token}` } });
        onSave();
        alert("Se ha guardado la tarea");
        window.location.reload();
        
    } catch (error) {
        alert(error.response.data.message);
        console.error('Error guardando tarea:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">Nueva Tarea</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="titulo" className="form-label">Título</label>
                  <input
                    type="text"
                    id="titulo"
                    className="form-control"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">Descripción</label>
                  <textarea
                    id="descripcion"
                    className="form-control"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    id="completed"
                    className="form-check-input"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                  />
                  <label htmlFor="completed" className="form-check-label">Completado</label>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
