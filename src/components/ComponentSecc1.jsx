import React, { useEffect } from 'react'

function ComponentSecc1({ titulo, texto, img }) {


    


    return (
        <div className='w-[80%] flex flex-row-reverse flex-wrap  justify-center items-center gap-10 mt-10 mb-20'>


            <div>
                <img src={img} alt="" className='w-[400px]' />
            </div>


            <div className='flex flex-col gap-2 w-[500px]'>
                <span className='letra-color'>{titulo}</span>
                <p>{texto}</p>


                {/* ------------------- Barra de carga ------------------- */}
                <div className=" lg:w-[500px] h-1 mt-2 rounded-full overflow-hidden">
                    <div className="h-full bg-[#EB3569] animate-[grow_12s_linear_forwards]"></div>

                    <style>{`
                @keyframes grow {
                from { width: 0; }
                to { width: 100%; }
              }
            `}</style>
                </div>
                {/* ------------------- Barra de carga ------------------- */}


            </div>

        </div>
    )
}

export default ComponentSecc1