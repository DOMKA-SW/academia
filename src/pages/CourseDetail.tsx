import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Clock, Users, Star, PlayCircle, CheckCircle, ArrowLeft, BookOpen, Target, BarChart3, Award } from 'lucide-react';
import { Link } from "react-router-dom";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("lessons");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const docRef = doc(db, "courses", id);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setCourse({ id: snap.id, ...snap.data() });
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white via-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Cargando curso...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white via-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curso no encontrado</h2>
          <p className="text-gray-600 mb-6">El curso que buscas no existe o ha sido removido.</p>
          <Link
            to="/courses"
            className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors"
          >
            Volver a los cursos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white via-blue-50">
      {/* Header del curso */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              to="/courses"
              className="flex items-center gap-2 text-purple-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a cursos
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Información del curso */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {course.category || "Marketing Digital"}
                </span>
                {course.level && (
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {course.level}
                  </span>
                )}
                {course.isPopular && (
                  <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                    Popular
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {course.title}
              </h1>
              
              <p className="text-xl text-purple-100 mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Estadísticas */}
              <div className="flex flex-wrap gap-6 mb-6">
                {course.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{course.duration}</span>
                  </div>
                )}
                {course.students && (
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{course.students} estudiantes</span>
                  </div>
                )}
                {course.rating && (
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span>{course.rating} ({course.reviews || 0} reseñas)</span>
                  </div>
                )}
              </div>

              {/* Instructores */}
              {course.instructor && (
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-white">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-purple-100">Instructor</div>
                    <div className="font-semibold">{course.instructor}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Card de inscripción */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 text-gray-900">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                {course.image ? (
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <PlayCircle className="w-16 h-16 text-white" />
                )}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-purple-600">
                    {course.price || "$99"}
                  </span>
                  {course.originalPrice && (
                    <span className="text-gray-400 line-through text-lg">
                      {course.originalPrice}
                    </span>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Inscribirse ahora
                </button>

                <button className="w-full border-2 border-purple-600 text-purple-600 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Agregar a lista de deseos
                </button>

                <div className="text-center text-sm text-gray-500">
                  30 días de garantía de devolución
                </div>

                {/* Características incluidas */}
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  {[
                    "Acceso de por vida",
                    "Certificado de finalización",
                    "Soporte 24/7",
                    "Actualizaciones gratuitas"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido del curso */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Navegación de pestañas */}
        <div className="flex border-b border-gray-200 mb-8">
          {[
            { id: "lessons", label: "Contenido", icon: BookOpen },
            { id: "objectives", label: "Objetivos", icon: Target },
            { id: "requirements", label: "Requisitos", icon: BarChart3 },
            { id: "certificate", label: "Certificado", icon: Award }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 border-b-2 font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido de las pestañas */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contenido principal */}
          <div className="lg:col-span-2">
            {activeTab === "lessons" && (
              <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contenido del curso ({course.lessons?.length || 0} lecciones)
                </h3>
                <div className="space-y-3">
                  {course.lessons?.map((lesson, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all group"
                    >
                      <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {lesson.title || `Lección ${index + 1}`}
                        </h4>
                        {lesson.duration && (
                          <p className="text-sm text-gray-500">{lesson.duration}</p>
                        )}
                      </div>
                      <PlayCircle className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    </div>
                  )) || (
                    <p className="text-gray-500 text-center py-8">
                      No hay lecciones disponibles para este curso.
                    </p>
                  )}
                </div>
              </div>
            )}

            {activeTab === "objectives" && (
              <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Lo que aprenderás
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {(course.objectives || [
                    "Dominar los conceptos fundamentales",
                    "Aplicar las técnicas en casos reales",
                    "Desarrollar habilidades prácticas",
                    "Prepararte para el mercado laboral"
                  ]).map((objective, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "requirements" && (
              <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Requisitos
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {(course.requirements || [
                    "No se requiere experiencia previa",
                    "Computadora con acceso a internet",
                    "Ganas de aprender y practicar"
                  ]).map((requirement, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "certificate" && (
              <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Certificado
                </h3>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Certificado de finalización
                    </h4>
                    <p className="text-gray-600">
                      Al completar este curso recibirás un certificado digital que podrás 
                      compartir en tu LinkedIn y agregar a tu currículum.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tarjeta de instructor */}
            {course.instructor && (
              <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Instructor</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{course.instructor}</div>
                    <div className="text-sm text-gray-500">Instructor especializado</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {course.instructorBio || "Instructor con años de experiencia en la industria del marketing digital."}
                </p>
                <button className="w-full text-purple-600 border border-purple-600 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-sm">
                  Ver perfil completo
                </button>
              </div>
            )}

            {/* Tarjeta de estadísticas */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Este curso incluye</h3>
              <div className="space-y-3">
                {[
                  { icon: PlayCircle, label: `${course.lessons?.length || 0} lecciones on-demand` },
                  { icon: Clock, label: course.duration || "10 horas de video" },
                  { icon: Award, label: "Certificado de finalización" },
                  { icon: BookOpen, label: "Recursos descargables" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
                    <item.icon className="w-4 h-4 text-purple-600" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
