import React, { useState } from "react";

function AddButton({ setTasks }) {
  const [newTask, setNewTask] = useState("");
  const [showModal, setShowModal] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
      setShowModal(false);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed bottom-40 right-40 mb-4 mr-4">
      {/* Botón para abrir el modal */}
      <button
        className="inline-block text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-800 border border-transparent transform hover:scale-110 hover:border-white duration-3000 ease-in-out w-16 h-16 bg-violet-800 hover:bg-gray-400 focus:outline-none transition duration-300  hover:rotate-180"
        onClick={openModal}
      >
        <img
          src={"cruz.svg"}
          alt="Botón con imagen SVG"
          className="w-8 h-8 mx-auto"
        />
      </button>
      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-2">Escriba la tarea</h1>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="py-2 px-4 mb-2 mr-2 border border-solid border-gray-300 rounded-md focus:outline-2 shadow-md"
            />
            <button
              className="inline-block mr-2 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-800 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-outon"
              onClick={addTask}
            >
              Confirmar
            </button>
            <button
              className="inline-block text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-800 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-outon"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
      {/* Lista de tareas */}
    </div>
  );
}

export default AddButton;
