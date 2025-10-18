import { useAuth } from "../context/AuthContext";
import { BookOpen, Clock, Award, TrendingUp, Calendar, PlayCircle, CheckCircle, Target, BarChart3, Users } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();

  // Datos de ejemplo para el dashboard
  const userProgress = {
    enrolledCourses: 3,
    completedCourses: 1,
    totalHours: 24,
    weeklyGoal: 10,
    currentWeekProgress: 7
  };

  const enrolledCourses = [
    {
      id: 1,
      title: "Marketing Digital Completo",
      progress: 75,
      nextLesson: "Email Marketing Avanzado",
      image: "/api/placeholder/300/200",
      category: "Marketing",
      instructor: "Ana López",
      lastAccessed: "Hace 2 días"
    },
    {
      id: 2,
      title: "SEO Avanzado 2024",
      progress: 30,
      nextLesson: "Technical SEO",
      image: "/api/placeholder/300/200",
      category: "SEO",
      instructor: "Carlos Ruiz",
      lastAccessed: "Hace 1 semana"
    },
    {
      id: 3,
      title: "Google Ads Master",
      progress: 10,
      nextLesson: "Creación de Campañas",
      image: "/api/placeholder/300/200",
      category: "Publicidad",
      instructor: "María González",
      lastAccessed: "Ayer"
    }
  ];

  const recentActivities = [
    {
      type: "lesson_completed",
      course: "Marketing Digital Completo",
      lesson: "Fundamentos del SEO",
      time: "Hace 2 horas",
      icon: CheckCircle
    },
    {
      type: "course_enrolled",
      course: "Google Ads Master",
      lesson: "Nuevo curso",
      time: "Hace 1 día",
      icon: BookOpen
    },
    {
      type: "achievement",
      course: "Marketing Digital Completo",
      lesson: "Certificado obtenido",
      time: "Hace 3 días",
      icon: Award
    },
    {
      type: "goal_met",
      course: "Meta semanal",
      lesson: "7/10 horas completadas",
      time: "Hace 4 días",
      icon: Target
    }
  ];

  const recommendedCourses = [
    {
      id: 4,
      title: "Analytics para Marketers",
      category: "Analytics",
      duration: "8 horas",
      students: "1.2k",
      rating: 4.9,
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "Redes Sociales Pro",
      category: "Social Media",
      duration: "12 horas",
      students: "2.4k",
      rating: 4.8,
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white via-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header del Dashboard */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent">
                Hola, {user?.name || "Estudiante"}! 👋
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Bienvenido a tu panel de aprendizaje
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Nivel actual</p>
                <p className="font-semibold text-purple-600">Principiante</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0) || "U"}
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: BookOpen,
              label: "Cursos Inscritos",
              value: userProgress.enrolledCourses,
              color: "purple"
            },
            {
              icon: Award,
              label: "Cursos Completados",
              value: userProgress.completedCourses,
              color: "pink"
            },
            {
              icon: Clock,
              label: "Horas de Estudio",
              value: userProgress.totalHours,
              color: "blue"
            },
            {
              icon: TrendingUp,
              label: "Progreso Semanal",
              value: `${userProgress.currentWeekProgress}/${userProgress.weeklyGoal}h`,
              color: "green"
            }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
                <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Columna Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progreso de Cursos */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Tus Cursos</h2>
                <Link 
                  to="/courses" 
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  Ver todos
                </Link>
              </div>
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                          {course.category}
                        </span>
                        <span className="text-xs text-gray-500">{course.lastAccessed}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 truncate group-hover:text-purple-600 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 truncate">Siguiente: {course.nextLesson}</p>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progreso</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/course/${course.id}`}
                      className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors flex-shrink-0"
                    >
                      <PlayCircle className="w-5 h-5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Actividad Reciente */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Actividad Reciente</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <activity.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">
                        {activity.lesson} - <span className="text-purple-600">{activity.course}</span>
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Meta Semanal */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Tu Meta Semanal</h2>
              <div className="text-center mb-4">
                <div className="relative inline-block">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 * (1 - userProgress.currentWeekProgress / userProgress.weeklyGoal)}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">
                      {Math.round((userProgress.currentWeekProgress / userProgress.weeklyGoal) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600 mb-4">
                {userProgress.currentWeekProgress} de {userProgress.weeklyGoal} horas completadas
              </p>
              <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                Continuar Estudiando
              </button>
            </div>

            {/* Cursos Recomendados */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recomendados para ti</h2>
              <div className="space-y-4">
                {recommendedCourses.map((course) => (
                  <div key={course.id} className="flex gap-3 p-3 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{course.duration}</span>
                        <Users className="w-3 h-3 ml-2" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${
                              i < Math.floor(course.rating) 
                                ? "text-yellow-400 fill-current" 
                                : "text-gray-300"
                            }`} 
                          />
                        ))}
                        <span className="text-xs text-gray-600 ml-1">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/courses"
                className="block text-center text-purple-600 hover:text-purple-700 font-medium mt-4 text-sm"
              >
                Ver más cursos
              </Link>
            </div>

            {/* Logros */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Tus Logros</h2>
              <div className="space-y-3">
                {[
                  { name: "Primer Curso", earned: true, icon: Award },
                  { name: "Estudiante Consistente", earned: true, icon: Calendar },
                  { name: "Especialista en SEO", earned: false, icon: Target },
                  { name: "Comunidad Activa", earned: false, icon: Users }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      achievement.earned 
                        ? "bg-green-100 text-green-600" 
                        : "bg-gray-100 text-gray-400"
                    }`}>
                      <achievement.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`font-medium ${
                        achievement.earned ? "text-gray-900" : "text-gray-400"
                      }`}>
                        {achievement.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {achievement.earned ? "Completado" : "Por ganar"}
                      </p>
                    </div>
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
