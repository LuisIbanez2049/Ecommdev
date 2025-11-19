import { useEffect, useState } from 'react'
import Principal from './components/Principal'
import SeccionUno from './components/SeccionUno'
import NavBar from './components/NavBar'
import SeccionDos from './components/SeccionDos'
import SeccionTres from './components/SeccionTres'
import Servicios from './components/Servicios'
import Planes from './components/Planes'
import UltimaSeccion from './components/UltimaSeccion'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    // Habilita scroll suave a nivel del documento
    const html = document.documentElement
    const previous = html.style.scrollBehavior
    html.style.scrollBehavior = 'smooth'

    return () => {
      // Restaurar comportamiento anterior al desmontar (opcional)
      html.style.scrollBehavior = previous || ''
    }
  }, [])

  return (
    <>
      <NavBar/>
      <Principal/>
      <SeccionUno/>
      <SeccionDos/>
      <SeccionTres/>
      <Servicios/>
      <Planes/>
      <UltimaSeccion/>
      <Footer/>
    </>
  )
}

export default App
