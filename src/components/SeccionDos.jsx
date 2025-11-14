import React, { useState } from 'react'
import ComponentSecc2 from './ComponentSecc2';
import U1 from "../assets/1Sec22.avif"
import U2 from "../assets/2Sec22.avif"
import U3 from "../assets/3Sec22.avif"
import U4 from "../assets/4Sec22.avif"
import U5 from "../assets/5Sec22.avif"

function SeccionDos() {

  // Estado que guarda cuál botón está activo
  const [active, setActive] = useState("diseno");

  const buttons = [
    { id: "diseno", label: "Diseño" },
    { id: "pagos", label: "Pagos" },
    { id: "envios", label: "Envíos" },
    { id: "marketing", label: "Marketing" },
    { id: "carritos", label: "Carritos_Abandonados" }
  ];



  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center' id='dos'>
      <div className='w-[90%] flex flex-col text-center'>
        <h1><span className='highlight-text'>Crece </span> con Ecommdev</h1>
        <p>Implementaciones y estrategias hechas a medida.</p>
      </div>

      <div className='w-[90%] my-[30px]'>

        <div id="navbar" className='w-full flex flex-row justify-start lg:justify-center items-center gap-4 p-2 overflow-x-scroll lg:overflow-hidden scrollbar-hide'>
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActive(btn.id)}
              className={` px-4 py-2 rounded-xl text-[15px] transition-colors duration-300 ${active === btn.id
                ? "bg-[#7916fa21] border border-[#7a16fa] text-[#7a16fa]"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-[#7916fa21]"
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div id='contenido' className='w-full flex flex-col justify-center items-center'>

          <div className={`${active == "diseno" ? "show" : "hidden"} w-full flex flex-col justify-center items-center`}>
            <ComponentSecc2 titulo={"Diseña una tienda online a medida, que convierta sin códigos ni límites"}
              texto={"Tu marca es única y tu tienda también debe serlo. Con Ecommdev, obtén una experiencia omnicanal y un diseño web profesional" +
                " sin necesidad de tener conocimientos técnicos."}
              img={U1}
              arrayLi={[
                "Olvídate del mantenimiento y las actualizaciones: nos encargamos de todo",
                "Crea una experiencia de marca consistente con diseños personalizados",
                "Vende con una plataforma ecommerce que evoluciona con tu negocio, sin esfuerzo"
              ]} />
          </div>

          <div className={`${active == "pagos" ? "show" : "hidden"} w-full flex flex-col justify-center items-center`}>
            <ComponentSecc2 titulo={"Pagos fluidos, integrados y sin comisiones extras"}
              texto={"Acepta todos los medios de pago que tus clientes prefieren, directamente en tu tienda. Con Ecommdev, tu dinero es 100% tuyo desde el"
                + "primer segundo."}
              img={U2}
              arrayLi={[
                "Integración directa con Mercado Pago, PayPal, Stripe, Getnet, Nave y más",
                "Proceso de pago de alta conversión para minimizar carritos abandonados"
              ]} />
          </div>

          <div className={`${active == "envios" ? "show" : "hidden"} w-full flex flex-col justify-center items-center`}>
            <ComponentSecc2 titulo={"Logística automatizada para disparar tus entregas"}
              texto={"Agiliza tus pedidos y optimiza la operación logística. Conecta tu tienda online con los principales proveedores de envío como Andreani," 
                + " Correo Argentino, OCA e-Pack, UPS, FedEx, DHL y más. Gestiona todos tus despachos desde un único panel de control y ofrece una experiencia" 
                + "de entrega rápida y confiable."}
              img={U3}
              arrayLi={[
                "Sincronización en tiempo real con los medios de envío más utilizados",
                "Creación automática de órdenes de envío desde tu tienda",
                "Cotización de envíos en el proceso de compra",
                "Ofrece entregas en el día para compras confirmadas antes de las 12 hs"
              ]} />
          </div>

          <div className={`${active == "marketing" ? "show" : "hidden"} w-full flex flex-col justify-center items-center`}>
            <ComponentSecc2 titulo={"Marketing que convierte: la fórmula de las grandes marcas"}
              texto={"Ya no basta con vender, necesitas una estrategia. Incrementa el promedio de tus ventas por comprador y aumenta tu rentabilidad"
                + " con herramientas de marketing inteligente integradas."}
              img={U4}
              arrayLi={[
                "Aumenta tus ventas con Up-selling y Cross-selling automatizado",
                "Crea descuentos y promociones dinámicas para atraer y fidelizar clientes",
                "Conecta tus productos con los canales de venta más importantes: Google, Facebook, Instagram, Tiktok"
              ]} />
          </div>

          <div className={`${active == "carritos" ? "show" : "hidden"} w-full flex flex-col justify-center items-center`}>
            <ComponentSecc2 titulo={"Recupera ventas con nuestro módulo de Carritos Abandonados"}
              texto={"Convierte la pérdida en ganancia. Nuestro módulo te permite identificar, notificar y recuperar carritos de clientes que" 
              + " no completaron su compra, impulsando tus ventas de forma proactiva."}
              img={U5}
              arrayLi={[
                "Panel de control con información detallada de cada carrito abandonado",
                "Notifica a tus clientes vía email o WhatsApp para cerrar la venta",
                "Filtra por productos, clientes o estado para una gestión eficiente",
                "Exporta datos para análisis y campañas de remarketing"
              ]} />
          </div>

        </div>

      </div>
    </div>
  )
}

export default SeccionDos