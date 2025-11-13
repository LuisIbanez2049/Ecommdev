import React, { useState } from 'react'

function SeccionDos() {

  // Estado que guarda cuál botón está activo
  const [active, setActive] = useState("home");

  const buttons = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Acerca" },
    { id: "services", label: "Servicios" },
    { id: "contact", label: "Contacto" },
  ];

  const divs = [
    {id: "home", content: <div>
      <p>Hola, como estas?</p>
    </div>},
    {id: "about", content: <div>
      <p>Hola, como estas?2</p>
    </div>},
    {id: "services", content: <div>
      <p>Hola, como estas?3</p>
    </div>},
  ]


  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center' id='dos'>
      <h1><span className='highlight-text'>Crece </span> con Ecommdev</h1>
      <p>Implementaciones y estrategias hechas a medida.</p>

      <div className='w-[90%] border border-black my-[30px]'>

        <div id="navbar" className='w-full flex flex-row justify-center items-center gap-4 p-2'>
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActive(btn.id)}
              className={`px-4 py-2 rounded-xl text-[15px] transition-colors duration-300 ${active === btn.id
                ? "bg-[#7916fa21] border border-[#7a16fa] text-[#7a16fa]"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-[#7916fa21]"
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div>
          
        </div>

      </div>
    </div>
  )
}

export default SeccionDos