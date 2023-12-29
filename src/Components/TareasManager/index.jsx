import React, { useState } from 'react';
import AddButton from '../AddButton';
import ListadoTareas from '../ListadoTareas';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="flex-1 mt-10">
      {/* Resto de tu contenido */}
      {/* ... */}
      <input
        type="text"
        placeholder="Buscar..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="py-2 px-4 w-full border border-solid bg-orange-200 border-gray-300 focus:outline-2 shadow-4xl rounded-xl"
      />
      <AddButton onClick={addTask} />
      <ListadoTareas tasks={tasks} />
    </div>
  );
}

export default TaskManager;
