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
        </div>
    )
}

export default Footer