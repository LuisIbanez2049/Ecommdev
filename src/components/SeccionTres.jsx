import React, { useRef, useState } from 'react'
import U1 from "../assets/1Sec3.avif"
import U2 from "../assets/2Sec3.avif"
import U3 from "../assets/3Sec3.avif"
import U4 from "../assets/4Sec3.avif"

function SeccionTres() {


  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const items = [
    {
      title: "Adminstra",
      text: "Publica y vende tus productos en tiempo real. Administra todo desde tu panel de control.",
      img: U1,
    },
    {
      title: "Automatiza",
      text: "Automatiza la segmentación y define listas de precios, inventario y beneficios exclusivos a clientes.",
      img: U2,
    },
    {
      title: "Pagos y Envíos",
      text: "Revoluciona la forma de cobrar y de enviar tus productos a través de aplicaciones integradas.",
      img: U3,
    },
    {
      title: "Funcionalidades",
      text: "Solo necesitas una plataforma para gestionar todo tu comercio electrónico.",
      img: U4,
    },
  ];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;

    if (delta > 50) {
      // Swipe left → next slide
      setCurrent((prev) => Math.min(prev + 1, items.length - 1));
    }

    if (delta < -50) {
      // Swipe right → previous slide
      setCurrent((prev) => Math.max(prev - 1, 0));
    }
  };


  return (
    <div className='w-full flex flex-col bg-[#F6F6F6] pb-10' id='tres'>


      <div className='w-full flex flex-col text-center items-center mt-14 mb-10 p-2'>
        <h1 className='text-[2rem] lg:text-[2.5rem]'>Tu tienda online con las funciones líderes en la industria</h1>
        <p>Gestiona tu negocio y multiplica tus ventas</p>
      </div>




      <section className="w-full flex flex-col items-center py-10">

        {/* DESKTOP */}
        <div className="hidden md:flex w-full max-w-6xl justify-between gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center max-w-xs">
              <img src={item.img} className="w-48 h-48 object-contain" />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
              <a href="http://" target="_blank" rel="noopener noreferrer" className='mt-4 px-5 py-2 bg-blue-500 text-white rounded-full'>
                Saber más
              </a>
              {/* <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-full">
              Saber más
            </button> */}
            </div>
          ))}
        </div>

        {/* MOBILE CAROUSEL (with swipe) */}
        <div
          className="md:hidden w-full overflow-hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {items.map((item, i) => (
              <div key={i} className="min-w-full flex flex-col items-center text-center px-6">
                <img src={item.img} className="w-48 h-48 object-contain mx-auto" />
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.text}</p>
                <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-full">
                  Saber más
                </button>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {items.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${current === i ? "bg-blue-600" : "bg-gray-300"
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </section>




    </div>
  )
}

export default SeccionTres