import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Elementos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-300 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-10 animate-bounce"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* Badge destacado */}
        <div className="mb-6">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            🚀 Plataforma de aprendizaje inteligente
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-tight">
          Marketing Intelligent
          <span className="block text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
            Academy
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
          Domina el <span className="text-cyan-300 font-semibold">marketing digital</span>, 
          <span className="text-purple-300 font-semibold"> SEO avanzado</span> y 
          <span className="text-blue-300 font-semibold"> Google Ads</span> con metodologías innovadoras
        </p>

        {/* Estadísticas */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-cyan-200 text-sm">Estudiantes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-purple-200 text-sm">Cursos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-blue-200 text-sm">Satisfacción</div>
          </div>
        </div>

        {/* CTA Principal */}
        <Link
          to="/courses"
          className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl mb-6 overflow-hidden"
        >
          <span className="relative z-10">Explorar Cursos Premium</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </Link>

        {/* CTA Secundario */}
        <Link
          to="/about"
          className="text-cyan-300 hover:text-white transition-colors duration-300 font-medium flex items-center gap-2 group"
        >
          Conoce nuestra metodología
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}
