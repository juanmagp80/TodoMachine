import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-scren">
      <div className="container mx-auto flex flex-row space-x-4">
      <div className="flex-1">
          {/* Card en el lado izquierdo */}
          <div className="bg-white rounded-md p-4 shadow-md mt-40 w-2/3 h-72 mx-auto">
            <h2 className="text-lg font-semibold mb-2">Título de la card</h2>
            <p className='overflow-y-auto h-32'>Contenido de la card</p>
          </div>
        </div>
        <div className="flex-1">

      <h1 className='text-6xl font-bold text-center mt-28 font-poppins text-violet-800'>Todo Machine</h1>
      <h2 className="text-2xl mt-4 text-center text-violet-700">Has completado 0 de 0 tareas</h2>
      <div className="flex flex-col items-center mt-4">
        
        <div className='relative w-full md:w-96 mt-4'>
          <input
          type="text"
          placeholder="Buscar..."
          className="py-2 px-4 mx-auto items-center pr-10 w-full md:w-96 border border-solid bg-orange-200 border-gray-300 focus:outline-2 shadow-2xl rounded-xl"
        />
        <span className="absolute inset-y-0 right-0 flex items-center px-3">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400" />

        </span>
        </div>
        
      </div>
      <div className='flex-1'>
      <h2 className="text-1xl mt-6 text-center text-violet-700">Crea tu primera tarea!</h2>
</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
