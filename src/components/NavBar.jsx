import React, { useEffect, useState } from 'react'
import Logo from "../assets/soloLetraPNG-ecommdev.png"

function NavBar() {

  const baseUrl = import.meta.env.VITE_APP_CONTACT_URL


  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 450);
  const [verBotones, setVerBotones] = useState(false);

  useEffect(() => {
    // Función para actualizar el estado según el ancho de la pantalla
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 450);
    };

    // Agregar el listener de evento al cargar el componente
    window.addEventListener('resize', handleResize);

    // Eliminar el listener al desmontar el componente para evitar pérdidas de memoria
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  function cuentaRegresiva() {
    const interval = setInterval(() => {
      setVerBotones(false);
      console.log("cerrando");
      clearInterval(interval);
    }, 4000);
  }


  return (
    <div className=' flex flex-col items-center justify-center sticky top-0 py-4 z-20'>

      <div className={`${isMobileView ? "hidden" : "show"} w-[90%] rounded-full border border-gray-100 flex flex-row shadow-md justify-evenly gap-10 py-4 px-8 bg-[#fdfdfd]`}>
        <a href="#">
          <div className='flex flex-row justify-center items-center'>
            <img src={Logo} alt="" className='w-[45px]' />
            <h4 className='text-[#FF006E] font-extrabold text-[30px]'>{`Ecomm{dev.}`}</h4>
          </div>
        </a>

        <div className='flex flex-row justify-center items-center font-sans font-bold text-gray-700  gap-6'>
          <a href="#" className=' transition-all duration-150 hover:text-[#8268fc]'>Inicio</a>
          <a href="#Dos" className='transition-all duration-150 hover:text-[#8268fc]'>Servicios</a>
          <a href="#Tres" className='transition-all duration-150 hover:text-[#8268fc]'>Planes</a>
          <a href={baseUrl} target="_blank" rel="noopener noreferrer" className=' text-slate-50 bg-[#FF006E] p-2 rounded-full mx-[10px] transition-all duration-300 animate-pulse hover:scale-105'>Empezar ahora</a>
        </div>
      </div>


      <div className={`${isMobileView ? "show" : "hidden"} w-[90%] rounded-full border border-gray-100 overflow-hidden relative  flex flex-row shadow-md justify-between items-center py-4 px-4 bg-[#fdfdfd]`}>
        <a href="#">
          <div className='flex flex-row justify-center items-center'>
            <img src={Logo} alt="" className='w-[30px]' />
            <h4 className='text-[#FF006E] font-extrabold text-[22px]'>{`Ecomm{dev.}`}</h4>
          </div>
        </a>

        <div className=' h-full flex flex-col justify-center items-center p-2 rounded-full' onClick={() => {
          setVerBotones(!verBotones)
          cuentaRegresiva();
        }}>
          <i className="fa-solid fa-bars text-[25px] font-extrabold"></i>
        </div>

        <div className={`absolute top-0 left-0
          w-full h-full rounded-full
          flex items-center justify-center
          bg-[#fdfdfd]
          transform transition-transform duration-700
          ${verBotones ? "translate-x-0" : "translate-x-full"}`}>
          <div onClick={() => {
            setVerBotones(!verBotones)
          }} className=' flex flex-row justify-center items-center font-sans font-bold text-gray-700  gap-4'>
            <a href="#" className=' transition-all duration-150 hover:text-[#8268fc]'>Inicio</a>
            <a href="#Dos" className='transition-all duration-150 hover:text-[#8268fc]'>Servicios</a>
            <a href="#Tres" className='transition-all duration-150 hover:text-[#8268fc]'>Planes</a>
            <a href={baseUrl} target="_blank" rel="noopener noreferrer" className='transition-all duration-150 hover:text-[#8268fc] p-1 bg-[#ff00008a] rounded-full animate-bounce'>Contacto</a>
            {/* <a href="" className=' text-slate-50 bg-[#FF006E] p-2 rounded-full mx-[10px] transition-all duration-300 animate-pulse hover:scale-105'>Empezar ahora</a> */}
          </div>
        </div>



      </div>

    </div>
  )
}

export default NavBar