import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import "../../App.css";
import AddButton from "../AddButton";

const Layout = () => {
  const [tasks, setTasks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addingIndex, setAddingIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    console.log("addTask");
    console.log("inputValue", inputValue);
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { name: inputValue, completed: false }]);
      setAddingIndex(tasks.length);
      setTimeout(() => {
        setAddingIndex(null);
      }, 3000);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    console.log("handleInputChange");
    // Añade este manejador para actualizar newTask
    setInputValue(event.target.value);
    console.log("event.target.value", event.target.value);
  };

  const handleCheckboxChange = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const filteresdTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchValue)
  );
  const handleDelete = (index) => {
    setDeletingIndex(index);
    setTimeout(() => {
      setTasks(tasks.filter((task, i) => i !== index));
      setDeletingIndex(null);
    }, 1000);
  };

  const [deletingIndex, setDeletingIndex] = useState(null);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  useEffect(() => {
    if (addingIndex !== null) {
      setTimeout(() => {
        setAddingIndex(null);
      }, 5000);
    }
  }, [tasks, addingIndex]);

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-scren">
        <div className="container mx-auto flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1 h-96">
            {/* Card en el lado izquierdo */}
            <div className="bg-pink-200 bg-right-bottom bg-50% bg-no-repeat rounded-xl p-4 shadow-4xl mt-10 md:mt-40 w-full md:w-2/3">
              <h1 className="text-2xl font-semibold mb-4 text-violet-800">
                Crea una nueva tarea
              </h1>

              <h2 className="text-lg font-semibold text-violet-800 mb-2">
                Nombre de la tarea
              </h2>
              <div className="relative w-full mt-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Hacer la compra"
                  className="py-4 px-4 mx-auto items-center pr-10 w-full border border-solid bg-white border-gray-300 focus:outline-2 shadow-3xl rounded-xl"
                />
                <div className="flex justify-between mt-8">
                  <button
                    onClick={addTask}
                    className="inline-block w-full text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-800 border border-transparent transform hover:scale-105 hover:border-white transition-transform duration-3000 ease-in-out"
                  >
                    AÑADIR
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-4 md:mt-10">
            <h1 className="text-6xl font-bold text-center mt-28 font-poppins text-orange-200">
              Todo Machine
            </h1>
            <h2 className="text-2xl mt-4 text-center text-orange-300">
              Has completado {completedTasks} de {totalTasks} tareas
            </h2>
            <div className="flex flex-col items-center mt-4">
              <div className="relative w-3/4 mx-auto mt-4">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchValue}
                  onChange={handleSearchChange}
                  className="py-2 px-4 mx-auto items-center pr-10 w-full border border-solid bg-orange-200 border-gray-300 focus:outline-2 shadow-4xl rounded-xl"
                />
                <span className="absolute inset-y-0 right-0 flex items-center px-3">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                </span>
              </div>
              <div className="mt-4 flex-1 w-full lg:w-auto md:w-1/4">
                <ul>
                  {filteresdTasks.map((task, index) => (
                    <li
                      key={index}
                      className={`bg-gray-200  items-center w-full md:w-96 border border-solid bg-orenge-200 border-gray-300 focus:outline-2 shadow-4xl rounded-xl p-2 mb-2 ${
                        index === deletingIndex ? "animate-fade-out" : ""
                      } ${index === addingIndex ? "animate-fade-in" : ""}`}
                    >
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleCheckboxChange(index)}
                        className="mr-2"
                      />
                      <span
                        style={{
                          textDecoration: task.completed
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {task.name}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleDelete(index)}
                        className="float-right bg-indigo-500 hover:bg-red-700 text-white font-bold mb-2py-1 px-4 rounded-full"
                      >
                        X
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <AddButton
                inputValue={inputValue}
                setInputValue={setInputValue}
                tasks={tasks}
                setTasks={setTasks}
              />
              <h2 className="text-1xl mt-6 text-center text-violet-700">
                Crea tu primera tarea!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
