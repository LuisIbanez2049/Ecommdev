import React from 'react';
import { Check, Star, Zap, Shield, ShoppingBag, Users, BarChart3 } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: "Combo Inicial",
    subtitle: "Tu tienda lista para arrancar",
    price: "200 USD",
    maintenance: "50 USD/mes",
    color: "green",
    features: [
      "Página para mostrar tus productos",
      "Botón de WhatsApp y redes sociales integradas",
      "10 productos profesionales (fotos + descripciones)",
      "5 videos profesionales generados con IA",
      "Diseño optimizado para convertir",
      "Entrega rápida para que empieces a vender YA"
    ],
    icon: <ShoppingBag className="w-6 h-6" />,
    popular: false
  },
  {
    id: 2,
    name: "Combo Intermedio",
    subtitle: "Crece y destaca tu marca",
    price: "400 USD",
    maintenance: "70 USD/mes",
    color: "orange",
    features: [
      "Todo el Combo Inicial",
      "Configuración de pago (tarjetas, transferencias, etc.)",
      "Configuración de envíos con Andreani, Correo Argentino, etc.",
      "20 productos profesionales (fotos + descripciones)",
      "10 videos profesionales IA",
      "Optimización para aumentar conversiones",
      "Contenido de producto como regalo valor agregado"
    ],
    icon: <BarChart3 className="w-6 h-6" />,
    popular: true
  },
  {
    id: 3,
    name: "Combo Avanzado",
    subtitle: "Automatiza y vendé mientras dormís",
    price: "600 USD",
    maintenance: "100 USD/mes",
    color: "blue",
    features: [
      "Todo lo anterior",
      "Configuración completa de envíos (Andreani, Correo Argentino, OCA, etc.)",
      "Automatización de ventas: respuestas, seguimientos, carrito abandonado",
      "Creación y optimización de campañas publicitarias",
      "Creación de redes sociales",
      "Configuración de WhatsApp Business + catálogo",
      "30 productos profesionales (fotos + descripciones)",
      "30 videos profesionales IA",
      "Creativos para redes sociales",
      "Contenido de alto impacto para escalar tus ventas"
    ],
    icon: <Zap className="w-6 h-6" />,
    popular: false
  }
];

function PlanCard({ plan }) {
  const colors = {
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      button: "bg-green-600 hover:bg-green-700",
      accent: "bg-green-100",
      highlight: "bg-green-200"
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-800",
      button: "bg-orange-600 hover:bg-orange-700",
      accent: "bg-orange-100",
      highlight: "bg-orange-200"
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      button: "bg-blue-600 hover:bg-blue-700",
      accent: "bg-blue-100",
      highlight: "bg-blue-200"
    }
  };

  const colorClasses = colors[plan.color];

  return (
    <div className={`relative ${colorClasses.bg} border ${colorClasses.border} rounded-lg p-6 flex flex-col h-full`}>
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          MÁS POPULAR
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 ${colorClasses.accent} rounded-lg`}>
          <div className={colorClasses.text}>
            {plan.icon}
          </div>
        </div>
        <div>
          <h3 className={`text-xl font-bold ${colorClasses.text}`}>{plan.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{plan.subtitle}</p>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Mantenimiento opcional: {plan.maintenance}</p>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-6 flex-grow">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className={`mt-1 w-5 h-5 ${colorClasses.highlight} rounded-full flex items-center justify-center`}>
              <Check className={`w-3 h-3 ${colorClasses.text}`} />
            </div>
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className={`w-full ${colorClasses.button} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-md transition-all duration-200`}>
        Contratar ahora
      </button>
    </div>
  );
}

export default function Planes() {
  return (
    <div id='Tres' className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl mt-[50px] md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Planes de E-commerce
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Elige el plan perfecto para tu negocio y comienza a vender en línea hoy mismo
          </p>
        </div>

        {/* Plans Container - Desktop */}
        <div className="hidden md:flex justify-center gap-6">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Plans Container - Mobile (Horizontal Scroll) */}
        <div className="md:hidden overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max">
            {plans.map((plan) => (
              <div key={plan.id} className="w-80 flex-shrink-0">
                <PlanCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
