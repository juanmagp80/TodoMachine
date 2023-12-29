import React from 'react'

function ListadoTareas({ tasks }) {
    return (
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="bg-gray-200 p-2 mb-2 rounded-md">{task}</li>
        ))}
      </ul>
    );
  }
  
  export default ListadoTareas  ;
