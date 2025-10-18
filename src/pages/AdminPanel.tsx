import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { 
  Plus, 
  Trash2, 
  Edit, 
  BookOpen, 
  Users, 
  DollarSign, 
  BarChart3,
  Search,
  Filter,
  Eye
} from 'lucide-react';

interface Course {
  id?: string;
  title: string;
  description: string;
  level: string;
  price: number;
  category?: string;
  students?: number;
  createdAt?: any;
}

export default function AdminPanel() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formData, setFormData] = useState<Course>({
    title: "",
    description: "",
    level: "Básico",
    price: 0,
    category: "Marketing",
    students: 0
  });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [activeTab, setActiveTab] = useState("courses");

  // 🔹 Cargar cursos existentes
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const courseList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Course[];
      setCourses(courseList);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // 🔹 Crear nuevo curso
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "courses"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setFormData({ 
        title: "", 
        description: "", 
        level: "Básico", 
        price: 0, 
        category: "Marketing",
        students: 0
      });
      fetchCourses();
    } catch (error) {
      console.error("Error creating course:", error);
      alert("Error al crear el curso");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Eliminar curso
  const handleDelete = async (id?: string) => {
    if (!id) return;
    
    if (!confirm("¿Estás seguro de que quieres eliminar este curso? Esta acción no se puede deshacer.")) {
      return;
    }

    try {
      await deleteDoc(doc(db, "courses", id));
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Error al eliminar el curso");
    }
  };

  // 🔹 Filtrar cursos
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  // 🔹 Estadísticas
  const stats = {
    totalCourses: courses.length,
    totalStudents: courses.reduce((sum, course) => sum + (course.students || 0), 0),
    totalRevenue: courses.reduce((sum, course) => sum + (course.price * (course.students || 0)), 0),
    averagePrice: courses.length > 0 ? courses.reduce((sum, course) => sum + course.price, 0) / courses.length : 0
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white via-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent mb-2">
            Panel de Administración
          </h1>
          <p className="text-gray-600">Gestiona tus cursos y contenido educativo</p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: BookOpen, label: "Total Cursos", value: stats.totalCourses, color: "purple" },
            { icon: Users, label: "Estudiantes", value: stats.totalStudents, color: "blue" },
            { icon: DollarSign, label: "Ingresos", value: `$${stats.totalRevenue.toLocaleString()}`, color: "green" },
            { icon: BarChart3, label: "Precio Promedio", value: `$${stats.averagePrice.toFixed(2)}`, color: "pink" }
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
          {/* Formulario de creación */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 sticky top-8">
              <div className="flex items-center gap-2 mb-6">
                <Plus className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-bold text-gray-900">Crear Nuevo Curso</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Título del curso *
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Marketing Digital Completo"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción *
                  </label>
                  <textarea
                    placeholder="Describe el contenido del curso..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={4}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nivel
                    </label>
                    <select
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option>Básico</option>
                      <option>Intermedio</option>
                      <option>Avanzado</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoría
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option>Marketing</option>
                      <option>SEO</option>
                      <option>Publicidad</option>
                      <option>Redes Sociales</option>
                      <option>Analytics</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Precio (USD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="number"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: Number(e.target.value) })
                      }
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Creando...
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5" />
                      Crear Curso
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Lista de cursos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Cursos Existentes ({filteredCourses.length})
                </h2>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Barra de búsqueda */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Buscar cursos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all w-full sm:w-64"
                    />
                  </div>

                  {/* Filtro por nivel */}
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="all">Todos los niveles</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
                  <p className="text-gray-600 mt-4">Cargando cursos...</p>
                </div>
              ) : filteredCourses.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No hay cursos</h3>
                  <p className="text-gray-600">
                    {searchTerm || selectedLevel !== "all" 
                      ? "No se encontraron cursos que coincidan con tu búsqueda." 
                      : "Comienza creando tu primer curso."}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredCourses.map((course) => (
                    <div
                      key={course.id}
                      className="p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="font-bold text-gray-900 text-lg group-hover:text-purple-600 transition-colors">
                              {course.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              course.level === "Básico" ? "bg-green-100 text-green-600" :
                              course.level === "Intermedio" ? "bg-yellow-100 text-yellow-600" :
                              "bg-red-100 text-red-600"
                            }`}>
                              {course.level}
                            </span>
                            {course.category && (
                              <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                                {course.category}
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {course.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              <span>${course.price}</span>
                            </div>
                            {course.students !== undefined && (
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                <span>{course.students} estudiantes</span>
                              </div>
                            )}
                            {course.createdAt && (
                              <span>
                                Creado: {course.createdAt?.toDate?.()?.toLocaleDateString() || "Reciente"}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 ml-4">
                          <button
                            onClick={() => {/* Implementar edición */}}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                            title="Editar curso"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(course.id)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                            title="Eliminar curso"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
