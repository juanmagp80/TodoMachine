import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../../App.css'

const Layout = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-scren">
      <div className="container mx-auto flex flex-row space-x-4">
      <div className="flex-1">
          {/* Card en el lado izquierdo */}
          <div className="bg-pink-200 bg-logo bg-right-bottom bg-50% bg-no-repeat bg-rounded-xl p-4 shadow-4xl mt-40 w-2/3 h-full mx-auto">
          <h1 className="text-2xl font-semibold mb-4 text-violet-800">Crea una nueva tarea</h1>

            <h2 className="text-lg font-semibold text-violet-800 mb-2">Nombre de la tarea</h2>
            <div className='relative w-full md:w-96 mt-4'>
          <input
          type="text"
          placeholder="Buscar..."
          className="py-4 px-4 mx-auto items-center pr-10 w-full md:w-96 border border-solid bg-white border-gray-300 focus:outline-2 shadow-3xl rounded-xl"
        />
        <div className="flex justify-between mt-8">
            <button className="inline-block text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-800 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">
              Crear
            </button>
            <button className="inline-block text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-800 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">
              Cancelar
            </button>
          </div>
          
        </div>
          </div>
        </div>
        <div className="flex-1 mt-10">

      <h1 className='text-6xl font-bold text-center mt-28 font-poppins text-violet-800'>Todo Machine</h1>
      <h2 className="text-2xl mt-4 text-center text-violet-700">Has completado 0 de 0 tareas</h2>
      <div className="flex flex-col items-center mt-4">
        
        <div className='relative w-full md:w-96 mt-4'>
          <input
          type="text"
          placeholder="Buscar..."
          className="py-2 px-4 mx-auto items-center pr-10 w-full md:w-96 border border-solid bg-orange-200 border-gray-300 focus:outline-2 shadow-4xl rounded-xl"
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

export default Layout
