import React from 'react'

const AddButton = () => {
  return (
    <a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer" className="fixed bottom-20 right-40 p-4 ">
    
    <button className="w-16 h-16 rounded-full bg-violet-800 hover:bg-gray-400 focus:outline-none transition duration-300 transform hover:rotate-180">
 
      <img src={'cruz.svg'} alt="Botón con imagen SVG" className="w-8 h-8 mx-auto" />
    
    </button>
  </a>
    )
}

    
  


export default AddButton
