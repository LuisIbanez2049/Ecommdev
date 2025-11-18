import React from 'react'
import PrincipalImg from "../assets/imgPrincipal.avif"
import Uno from "../assets/el-tovareno.avif"
import Dos from "../assets/helles-haus.avif"
import Tres from "../assets/joggers.avif"
import Cuatro from "../assets/kadur-sport.avif"
import Cinco from "../assets/la-huella-import.avif"
import Seis from "../assets/las-locas.avif"
import Siete from "../assets/ocn-argentina.avif"
import Ocho from "../assets/rimmel.avif"
import Nueve from "../assets/sonnos.avif"
import Diez from "../assets/thonet-vander.avif"

function Principal() {

  const imgs = [Uno, Dos, Tres, Cuatro, Cinco, Seis, Siete, Ocho, Nueve, Diez];
  return (
    <div className='w-full min-h-screen flex flex-col items-center'>

      <div className='w-[90%] flex flex-row-reverse flex-wrap  justify-center items-center gap-10 mt-10 mb-20'>



        <div className='IMAGEN '>
          <img src={PrincipalImg} alt="" className='w-[600px]' />
        </div>

        <div className='TEXTO flex flex-col items-start gap-4'>
          <p className='text-[11px] font-semibold'>CREA TU TIENDA ONLINE</p>
          <div>
            <h1 className=''>Más compradores.</h1>
            <h1 className=''>Más ventas.</h1>
            <h1 className=''>Más rápido.</h1>
          </div>

          <p>Ecommdev la plataforma ecommerce para empresas diseñada para el<br />cambio. Crear una tienda online nunca fue tan simple.</p>

          <a href="http://" target="_blank" rel="noopener noreferrer" className='p-3 bg-[#FF006E] m-auto lg:m-0 shadow-sm rounded-full text-gray-100 font-bold transition-all duration-300 hover:scale-105'>Hablá con un experto</a>
        </div>


      </div>


      <div className='w-[90%] text-center'>
        <h2 className=''>Crea tu negocio altamente rentable</h2>
        <p>Ecommerces que trabajan con Ecommdev</p>
      </div>

      <div className=' w-full overflow-hidden whitespace-nowrap my-6'>

        <div className='slider-track will-change-contents flex flex-row items-center gap-6'>
          {imgs.map(img => (
            <img src={img} alt="" className='w-[100px] opacity-80 hover:opacity-100' />
          ))}

          {imgs.map(img => (
            <img src={img} alt="" className='w-[100px] opacity-80 hover:opacity-100' />
          ))}

          {imgs.map(img => (
            <img src={img} alt="" className='w-[100px] opacity-80 hover:opacity-100' />
          ))}

          {imgs.map(img => (
            <img src={img} alt="" className='w-[100px] opacity-80 hover:opacity-100' />
          ))}

          {imgs.map(img => (
            <img src={img} alt="" className='w-[100px] opacity-80 hover:opacity-100' />
          ))}

          {imgs.map(img => (
            <img src={img} alt="" className='w-[100px] opacity-80 hover:opacity-100' />
          ))}
        </div>


      </div>

      {/* display: inline-block; */}
      <style>{`

      .slider-track {
        
        animation: scroll 25s linear infinite;
      }

      @keyframes scroll {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      
        
      `}</style>


    </div>
  )
}

export default Principal