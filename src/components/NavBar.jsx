import React from 'react'
import Logo from "../assets/soloLetraPNG-ecommdev.png" 

function NavBar() {
  return (
    <div className=' flex flex-col items-center justify-center sticky top-0 py-4 z-20'>

      <div className='w-[90%] rounded-full flex flex-row shadow-md justify-evenly gap-10 py-4 px-8 bg-[#fdfdfd]'>
        <div className='flex flex-row justify-center items-center'>
        <img src={Logo} alt="" className='w-[45px]'/>
        <h4 className='text-[#FF006E] font-extrabold text-[30px]'>{`Ecomm{dev.}`}</h4>
      </div>

      <div className='flex flex-row justify-center items-center font-sans font-bold text-gray-700  gap-6'>
        <a href="#" className=' transition-all duration-150 hover:text-[#8268fc]'>Inicio</a>
        <a href="#Dos" className='transition-all duration-150 hover:text-[#8268fc]'>Servicios</a>
        <a href="#Tres" className='transition-all duration-150 hover:text-[#8268fc]'>Planes</a>
        <a href="" className=' text-slate-50 bg-[#FF006E] p-2 rounded-full mx-[10px] transition-all duration-300 animate-pulse hover:scale-105'>Empezar ahora</a>

      </div>
      </div>

    </div>
  )
}

export default NavBar