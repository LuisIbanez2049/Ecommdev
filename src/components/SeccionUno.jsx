import React, { useEffect, useState } from 'react'
import U1 from "../assets/1Sec2.avif"
import U2 from "../assets/2Sec2.avif"
import U3 from "../assets/3Sec2.avif"
import U4 from "../assets/4Sec2.avif"
import U5 from "../assets/5Sec2.avif"
import ComponentSecc1 from './ComponentSecc1'

function SeccionUno() {


  const baseUrl = import.meta.env.VITE_APP_CONTACT_URL


  const [currentDiv, setCurrentDiv] = useState(0); // índice del div visible

  // Lista de "pantallas" o divs que vas a mostrar
  const divs = [
    <ComponentSecc1 titulo={"01. Gestiona con facilidad"}
      texto={<><span className='font-bold'>Crear tu plataforma</span> de ecommerce omnicanal elegida por negocios de todo el mundo.</>}
      img={U1} />,

    <ComponentSecc1 titulo={"02. Medios de pago múltiples"}
      texto={<>Acepta pagos online y presenciales con integraciones a
        <span className='font-bold'> Mercado Pago, Stripe, Getnet, Nave, Modo y más. </span>
        Ofrece a tus clientes la forma de pago más conveniente y nunca pierdas una venta.</>}
      img={U2} />,

    <ComponentSecc1 titulo={"03. Fácil envío y entrega"}
      texto={<>Simplifica tus envíos con nuestras integraciones automáticas de
        <span className='font-bold'> Correo Argentino, Andreani, OCA y más. </span>
        Crea etiquetas, gestiona pedidos y realiza seguimientos de tus envíos en un solo lugar.</>}
      img={U3} />,

    <ComponentSecc1 titulo={"04. Optimización de comercio"}
      texto={<>Habilita una mejor experiencia de comercio electrónico
        mediante el uso de segmentación automatizada de precios y clientes, órdenes de compra y condiciones de pago</>}
      img={U4} />,

    <ComponentSecc1 titulo={"05. Experiencia mejorada"}
      texto={<>Las experiencias de compra tradicionales no se acercan a lo que esperan los compradores modernos.
        Ecommdev permite crear grandes catálogos, con segmentación de precios y clientes en cuestión de minutos.
      </>}
      img={U5} />
  ];

  useEffect(() => {
    // Cambiar de div cada 5 segundos
    const interval = setInterval(() => {
      setCurrentDiv((prev) => (prev + 1) % divs.length);
    }, 12000);

    // Limpieza del intervalo al desmontar
    return () => clearInterval(interval);
  }, []);



  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-[#F6F6F6]'>


      <div className='w-[90%] text-center mt-14 '>
        <div className='flex flex-row gap-4 justify-center'>
          <h1><span className='highlight-text'>Diseñado para construir.</span> Listo para Crecer</h1>
          {/* <h1 className=''>Listo para Crecer</h1> */}
        </div>

        <span className=' font-bold text-[#696969] text-[17px]'>Crea tu plataforma de ecommerce </span>
        <span className='text-[#696969] text-[17px]'>elegida por negocios de todo el mundo.</span>
      </div>


      {/* <ComponentSecc1 titulo={"Gestiona con facilidad"}
        texto={<><span className='font-bold'>Crear tu plataforma</span> de ecommerce omnicanal elegida por negocios de todo el mundo.</>}
        img={U1} /> */}

      <div
        key={currentDiv}
        className="w-full flex flex-col items-center"
      >
        {divs[currentDiv]}
      </div>

      <div className='bg-gradient w-full py-[30px] text-center flex flex-col justify-center items-center gap-3'>

        <p className="text-[#ffffffe8] font-semibold">SIMPLIFICA EL COMERCIO</p>
        <h2 className='text-[#ffffffe8]'>TODO LO QUE NECESITAS EN UNA SOLA PLATAFORMA</h2>

        <a href={baseUrl} target="_blank" rel="noopener noreferrer"
          className='my-[10px] p-4 rounded-full bg-[#ffffffe8] font-semibold text-[#805bf9] transition-all duration-300 hover:scale-105'>
          Solicitá tu pagina
        </a>
        <style>
          {`
           .bg-gradient{
            background: linear-gradient(351deg, #5037E7 12.36%, #EB00FF 124.69%);
           }

          `}
        </style>
      </div>


    </div>
  )
}

export default SeccionUno