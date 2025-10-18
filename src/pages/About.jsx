import { Award, TrendingUp, Users, BookOpen, Rocket, Star, Target, Zap, Globe, Mail } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: TrendingUp, number: "10+", label: "Años de Experiencia" },
    { icon: Users, number: "500+", label: "Estudiantes Formados" },
    { icon: Award, number: "50+", label: "Proyectos Exitosos" },
    { icon: BookOpen, number: "100+", label: "Cursos Impartidos" }
  ];

  const skills = [
    { name: "Marketing Digital", level: 95 },
    { name: "SEO Avanzado", level: 92 },
    { name: "Google Ads", level: 88 },
    { name: "Estrategia de Contenidos", level: 90 },
    { name: "Analytics & Data", level: 85 },
    { name: "Automatización", level: 87 }
  ];

  const achievements = [
    {
      icon: Rocket,
      title: "Especialista en Growth Marketing",
      description: "Transformando negocios mediante estrategias de crecimiento escalables"
    },
    {
      icon: Target,
      title: "Certificado Google Partners",
      description: "Certificado oficial en publicidad digital y análisis de performance"
    },
    {
      icon: Globe,
      title: "Speaker Internacional",
      description: "Conferencista en eventos de marketing y transformación digital"
    },
    {
      icon: Zap,
      title: "Mentor de Startups",
      description: "Acompañando emprendedores en su journey digital"
    }
  ];

  const testimonials = [
    {
      text: "Transformó completamente nuestra estrategia digital. Los resultados fueron inmediatos y superaron todas las expectativas.",
      author: "Director de Marketing",
      company: "Tech Startup"
    },
    {
      text: "Su metodología de enseñanza es excepcional. Logra explicar conceptos complejos de manera simple y práctica.",
      author: "Estudiante",
      company: "Marketing Intelligent Academy"
    },
    {
      text: "Un visionario del marketing digital. Sus estrategias han posicionado nuestra marca como líder en el sector.",
      author: "CEO",
      company: "E-commerce Company"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white via-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Tu Mentor en Marketing Digital
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
                Transformando Carreras en el Mundo Digital
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Con más de una década liderando estrategias digitales para marcas globales, 
                ahora dedico mi experiencia a formar la próxima generación de expertos en marketing.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Conectar en LinkedIn
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Ver Portfolio
                </button>
              </div>
            </div>

            {/* Profile Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-purple-100">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  JC
                </div>
                
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                  Expert Lead Instructor
                </h3>
                
                <p className="text-gray-600 text-center mb-6">
                  Especialista en Marketing Digital & Growth Strategies
                </p>

                <div className="space-y-3">
                  {[
                    "🎯 10+ años en marketing digital",
                    "🚀 Ex-director en agencias internacionales",
                    "📈 Especialista en crecimiento escalable",
                    "💡 Mentor certificado",
                    "🌍 Experiencia global",
                    "🏆 Premios industry recognition"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-blue-600 bg-clip-text text-transparent mb-4">
              Áreas de Especialización
            </h2>
            <p className="text-xl text-gray-600">
              Dominio completo del ecosistema digital moderno
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-purple-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent mb-4">
              Logros & Certificaciones
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-pink-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Lo que dicen mis estudiantes y clientes
            </h2>
            <p className="text-xl text-purple-200">
              Experiencias reales de transformación profesional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-purple-100 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-purple-200 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para Transformar tu Carrera?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Únete a miles de estudiantes que ya están acelerando su crecimiento profesional con mis metodologías probadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
                Explorar Cursos
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                <Mail className="w-5 h-5 inline mr-2" />
                Contactar Directamente
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
