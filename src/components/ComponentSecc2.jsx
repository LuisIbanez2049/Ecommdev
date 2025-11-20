import React from 'react'
import U1 from "../assets/1Sec22.avif"

function ComponentSecc2({ titulo, texto, img, arrayLi }) {

    const baseUrl = import.meta.env.VITE_APP_CONTACT_URL


    return (
        <div className='w-full p-2 lg:w-[80%] flex flex-row-reverse flex-wrap  justify-center items-center gap-10 mt-10 mb-20 border border-gray-300 rounded-xl'>


            <div>
                <img src={img} alt="" className='w-[450px]' />
            </div>


            <div className='flex flex-col gap-2 w-[500px]'>
                <h4 className='text-[27px] font-bold leading-none text-gray-700'>{titulo}</h4>
                <p>{texto}</p>
                <div className='flex flex-col mt-[10px] ml-[10px]'>
                    {arrayLi.map(lista => {
                        return (<>
                            <div className='flex flex-row'>
                                <i className="fa-solid fa-check text-[#FF006E] mr-[8px] block  pt-[9px]"></i>
                                <span className='text-gray-800 my-[6px] '>{lista}</span>
                            </div>
                        </>)
                    })}
                </div>

                <a href={baseUrl} target="_blank" rel="noopener noreferrer" className='bg-gradient m-auto lg:m-0 p-4 rounded-full shadow-lg w-[150px] my-[10px] transition-all duration-300 hover:scale-105'>
                    <h4 className='text-center text-slate-50 font-semibold'>Comenzarahora</h4>
                </a>

            </div>
            <style>
                {`
               .bg-gradient{
                background: linear-gradient(68deg, #f65555 -16.08% -16.08%, #7612fa 25.08%, #fa12e3);
               }

               :root {
  /* Colores */
  --color-primary: #E4006F;
  --color-text-primary: #111111; /* Colore de las <h> */
  --color-bg: #FFFFFF;
  --color-bg-alt: #F4F5F7;
  --color-text-secondary: #696969; /* Colore de las <p> */
  /* --color-text-secondary: #BDBDBD; */

  /* Tipografía */
  --font-family-base: 'Poppins', 'Inter', 'Montserrat', sans-serif;
  --font-size-base: 16px;
  --line-height-base: 1.5;
  --heading-weight: 700;
  --body-weight: 400;
}

body {
  font-family: var(--font-family-base);
  font-weight: var(--body-weight);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  background-color: var(--color-bg);
}
h1, h2, h3 {
  font-weight: var(--heading-weight);
  color: var(--color-text-primary);
}
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.75rem; 
}
p {
  color: var(--color-text-secondary);
  line-height: var(--line-height-base);
  font-size: 16px;
}

.highlight-text {
    background: linear-gradient(68deg, #f65555 -16.08% -16.08%, #7612fa 25.08%, #fa12e3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
}

.letra-color {
    color: #EB3569;
    font-size: 20px;
    font-weight: bold;
}
    
              `}
            </style>

        </div>
    )
}

export default ComponentSecc2