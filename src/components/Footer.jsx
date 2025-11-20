import React from 'react'
import Logo from "../assets/soloLetraPNG-ecommdev.png"

function Footer() {
    return (
        <div className='w-full p-8 bg-slate-100'>
            <div className='flex flex-row justify-center items-center'>
                <img src={Logo} alt="" className='w-[50px]' />
                <h4 className='text-[#FF006E] font-extrabold text-[32px]'>{`Ecomm{dev.}`}</h4>
            </div>
            <p className="text-[14px] text-center my-4">© Copyright {new Date().getFullYear()} Ecommdev | Think big without limits | Todos los derechos reservados.</p>
        
        <style>{`

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

      
        
      `}</style>
        
        </div>
    )
}

export default Footer