import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Home = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleSave = () => {
    setSelectedTask(null); // Reset selected task after saving
  };

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <TaskList />
      <h2>{selectedTask ? 'Editar Tarea' : 'Nueva Tarea'}</h2>
      <TaskForm task={selectedTask} onSave={handleSave} />
    </div>
  );
};

export default Home;
