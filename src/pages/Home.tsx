import { Link } from "react-router-dom";
import { Star, Users, PlayCircle, Trophy, Clock, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white via-blue-50 relative overflow-hidden">
      {/* Elementos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge destacado */}
          <div className="mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-purple-200">
              🚀 Transforma tu carrera en marketing digital
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent leading-tight">
            Marketing Intelligent
            <span className="block text-3xl md:text-4xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mt-4">
              Academy
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Domina el <span className="text-purple-600 font-semibold">marketing digital</span>, 
            <span className="text-pink-600 font-semibold"> SEO avanzado</span> y 
            <span className="text-blue-600 font-semibold"> Google Ads</span> con expertos del sector
          </p>

          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/courses"
              className="group relative bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-200"
            >
              <span className="relative z-10">Comenzar Ahora</span>
            </Link>
            <Link
              to="/demo"
              className="group relative border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Ver Demo Gratis
            </Link>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: "500+", label: "Estudiantes" },
              { number: "50+", label: "Cursos" },
              { number: "98%", label: "Satisfacción" },
              { number: "24/7", label: "Soporte" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-purple-900">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Características */}
      <section className="relative py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre lo que hace única nuestra plataforma de aprendizaje
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-purple-600" />,
                title: "Comunidad Activa",
                description: "Únete a más de 500 estudiantes y profesionales del marketing"
              },
              {
                icon: <PlayCircle className="w-12 h-12 text-pink-600" />,
                title: "Contenido Actualizado",
                description: "Cursos que se mantienen al día con las últimas tendencias"
              },
              {
                icon: <Trophy className="w-12 h-12 text-blue-600" />,
                title: "Certificaciones",
                description: "Obtén certificados reconocidos en la industria"
              },
              {
                icon: <Clock className="w-12 h-12 text-purple-600" />,
                title: "Aprendizaje Flexible",
                description: "Estudia a tu propio ritmo desde cualquier dispositivo"
              },
              {
                icon: <Shield className="w-12 h-12 text-pink-600" />,
                title: "Garantía de Calidad",
                description: "30 días de garantía de devolución de tu dinero"
              },
              {
                icon: <Star className="w-12 h-12 text-blue-600" />,
                title: "Instructores Expertos",
                description: "Aprende de profesionales con años de experiencia"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Cursos Destacados */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-blue-600 bg-clip-text text-transparent mb-4">
              Cursos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los cursos más populares entre nuestra comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Marketing Digital Completo",
                description: "Domina todas las áreas del marketing digital desde cero",
                price: "$199",
                features: ["SEO", "Redes Sociales", "Email Marketing", "Analytics"]
              },
              {
                title: "SEO Avanzado",
                description: "Técnicas avanzadas para posicionamiento en Google",
                price: "$149",
                features: ["Keyword Research", "Link Building", "Technical SEO", "Local SEO"]
              },
              {
                title: "Google Ads Master",
                description: "Conviértete en experto en publicidad de Google",
                price: "$179",
                features: ["Search Ads", "Display Ads", "YouTube Ads", "Analytics"]
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-purple-100">
                <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-500"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="mb-6">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-purple-600">{course.price}</span>
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                      Inscribirse
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Todos los Cursos
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Testimonios */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent mb-4">
              Lo que dicen nuestros estudiantes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Especialista en Marketing",
                comment: "Los cursos transformaron completamente mi carrera. El contenido es actualizado y muy práctico.",
                rating: 5
              },
              {
                name: "Carlos Rodríguez",
                role: "Emprendedor",
                comment: "La plataforma es increíblemente fácil de usar y los instructores son expertos reales.",
                rating: 5
              },
              {
                name: "Ana López",
                role: "Freelancer",
                comment: "He duplicado mis ingresos gracias a las habilidades que aprendí aquí. Totalmente recomendado.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-purple-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comienza tu journey en marketing hoy
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de estudiantes que ya están transformando sus carreras con nuestros cursos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
            >
              Crear Cuenta Gratis
            </Link>
            <Link
              to="/courses"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Explorar Cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
