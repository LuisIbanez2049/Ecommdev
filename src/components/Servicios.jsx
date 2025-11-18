import React from 'react';
import { Video, Users, BarChart3, MessageSquare, Smartphone, ShoppingBag, Layout, Code } from 'lucide-react';
import Meta from "../assets/meta.avif"
import Ugc from "../assets/ugc.webp"
import Sistema from "../assets/desarrolloSistema.webp"
import Ecommerce from "../assets/ecommerce.jpg"
import Landing from "../assets/landing.jpg"
import ChatBot from "../assets/chatBot.png"
import Community from "../assets/community.jpg"
import AiProduct from "../assets/aiProduct.webp"

const services = [
  {
    id: 1,
    title: "UGC con Avatares IA",
    price: "40 USD",
    img: Ugc,
    description: "Videos donde un avatar humano realista habla sobre tu producto, lo explica y lo recomienda como si fuera un creador de contenido. Perfecto para anuncios, reels y TikTok.",
    features: ["Avatar realista", "Recomendaciones naturales", "Ideal para redes", "Calidad 4K"],
    icon: <Video className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Multimedia Profesional",
    price: "20 USD",
    img: AiProduct,
    description: "Transformamos tu producto en contenido irresistible. A partir de una simple foto, generamos modelos realistas que lucen tu vestimenta o sostienen tus accesorios con un estilo profesional, moderno y aspiracional. Descripciones claras, atractivas y persuasivas que aumentan el deseo de compra. Ideal para transmitir calidad y diferenciarte de tu competencia.",
    features: ["4 fotos + 1 video", "Copywriting incluido", "Estilo profesional", "Modelos realistas"],
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Publicidad en Meta Ads",
    subtitle: "Creación + Gestión mensual",
    price: "200 USD",
    img: Meta,
    description: "Creamos tus campañas, optimizamos audiencias, analizamos resultados y gestionamos mes a mes para maximizar tu retorno. Más visibilidad, más clientes, más ventas.",
    features: ["Campañas optimizadas", "Gestión mensual", "Análisis de resultados", "ROI garantizado"],
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Manejo de Redes Sociales",
    subtitle: "Community Manager",
    price: "200 USD",
    img: Community,
    description: "Publicaciones, respuestas, mensajes, diseño, estrategia y crecimiento. Mantené activa tu comunidad mientras vos te enfocás en tu negocio.",
    features: ["Publicaciones diarias", "Respuestas en tiempo real", "Diseño incluido", "Estrategia de crecimiento"],
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Chat Automatizado con IA",
    price: "200 USD",
    img: ChatBot,
    description: "Atendé consultas, ventas y preguntas 24/7 sin perder oportunidades. Integración en Instagram, WhatsApp, web y Messenger.",
    features: ["Atención 24/7", "Integración múltiple", "Sin oportunidades perdidas", "Respuestas inteligentes"],
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    id: 6,
    title: "Landing Page Profesional",
    price: "200 USD",
    img: Landing,
    description: "Tu página perfecta para convertir visitas en ventas. Diseño premium, rápido, moderno, con enfoque 100% en escalar tu marca.",
    features: ["Diseño premium", "Alta conversión", "Carga rápida", "Responsive"],
    icon: <Layout className="w-6 h-6" />
  },
  {
    id: 7,
    title: "Ecommerce Profesional",
    price: "200 USD",
    img: Ecommerce,
    description: "Tu tienda lista para vender, con diseño limpio, estructura pensada para maximizar ventas y una experiencia profesional desde cualquier dispositivo.",
    features: ["Diseño limpio", "Optimizado para ventas", "Multiplataforma", "Fácil gestión"],
    icon: <ShoppingBag className="w-6 h-6" />
  },
  {
    id: 8,
    title: "Sistema Web 100% Personalizado",
    price: "Precio a consultar",
    img: Sistema,
    description: "Soluciones totalmente adaptadas a tu negocio. Desde sistemas internos hasta plataformas completas.",
    features: ["Desarrollo personalizado", "Soluciones únicas", "Soporte continuo", "Escalable"],
    icon: <Code className="w-6 h-6" />
  }
];

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Decorative Top Bar */}
      <div className="h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
      
      {/* Main Content */}
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
            <div className="text-white">
              {service.icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
            {service.subtitle && (
              <p className="text-sm text-gray-600 mt-1">{service.subtitle}</p>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">{service.price}</span>
          </div>
        </div>

        {/* Placeholder Image */}
        <div className="relative mb-6 rounded-2xl overflow-hidden border-2 border-gray-100 bg-gradient-to-br from-purple-100 to-blue-100 h-32 flex items-center justify-center">
          <img src={service.img} alt="" />
          {/* <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium">Contenido IA</p>
          </div> */}
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-sm mb-6">
          {service.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              <span className="text-xs text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
          {service.price === "Precio a consultar" ? "Consultar ahora" : "Contratar servicio"}
        </button>
      </div>
    </div>
  );
}

export default function Servicios() {
  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">
            Catálogo de Servicios Digitales
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones innovadoras con inteligencia artificial y tecnología de vanguardia para potenciar tu negocio en el mundo digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
