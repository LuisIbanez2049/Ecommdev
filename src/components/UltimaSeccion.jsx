import React from 'react'
import PrincipalImg from "../assets/5Sec2.avif"
import Icon1 from "../assets/icon1.png"
import Icon2 from "../assets/icon2.png"
import Icon3 from "../assets/icon3.png"

function UltimaSeccion() {

    return (
        <div className='w-full min-h-screen flex flex-col items-center'>

            <div className='w-[90%] flex flex-row-reverse flex-wrap  justify-center items-center gap-10 mt-10 mb-20'>



                <div className='IMAGEN '>
                    <img src={PrincipalImg} alt="" className='w-[600px]' />
                </div>

                <div className='TEXTO w-[600px] flex flex-col items-start gap-4'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='leading-none'>Crea tu ecommerce altamente rentable</h2>
                        <p>Te ofrecemos a la vista el costo de una tienda online, nuestros planes te permiten elegir la opción para tu negocio,
                            haz crecer tu ecommerce al siguiente nivel.</p>
                    </div>

                    <div>

                        <div className='flex flex-row justify-start items-center gap-4 mb-4'>
                            <img src={Icon1} alt="" className='w-[55px] h-[55px]' />
                            <div>
                                <h4 className='text-[20px] font-bold'>Catálogo Unificado</h4>
                                <p>Gestiona precios de forma sencilla y rápida desde un solo lugar.</p>
                            </div>
                        </div>

                        <div className='flex flex-row justify-start items-center gap-4 mb-4'>
                            <img src={Icon2} alt="" className='w-[55px] h-[55px]' />
                            <div>
                                <h4 className='text-[20px] font-bold'>Empodera las Ventas</h4>
                                <p>Incentiva las ventas aplicando diferentes reglas de precios a tus compradores.</p>
                            </div>
                        </div>

                        <div className='flex flex-row justify-start items-center gap-4 mb-4'>
                            <img src={Icon3} alt="" className='w-[55px] h-[55px]' />
                            <div>
                                <h4 className='text-[20px] font-bold'>Vende en donde sea</h4>
                                <p>Conecta tus productos automáticamente con Google, Facebook, e Instagram para vender por diversos medios.</p>
                            </div>
                        </div>

                    </div>


                    <a href="http://" target="_blank" rel="noopener noreferrer" className='p-3 bg-[#FF006E] m-auto lg:m-0 shadow-sm rounded-full text-gray-100 font-bold transition-all duration-300 hover:scale-105'>
                        Quiero empezar ahora
                    </a>
                </div>


            </div>


            <div className='w-full text-center bg-[#8268fc] p-4 flex flex-row flex-wrap justify-center items-center gap-6'>
                <img src={Icon1} alt="" />
                <div className='flex flex-col gap-4 items-center'>
                    <h4 className='text-[25px] lg:text-[40px] font-bold text-slate-50 font-sans'>Ecommdev, la solución completa en ecommerce</h4>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='p-3 text-[12px] lg:text-[14px] bg-[#FF006E] m-auto lg:m-0 shadow-sm rounded-full text-gray-100 font-bold transition-all duration-300 hover:scale-105 '>
                        Solicitar ahora
                    </a>
                </div>

            </div>




        </div>
    )
}

export default UltimaSeccion