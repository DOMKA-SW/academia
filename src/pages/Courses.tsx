import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import CourseCard from "../components/CourseCard";
import { Search, Filter, Grid, List } from 'lucide-react';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnap = await getDocs(collection(db, "courses"));
        const list = querySnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCourses(list);
        setFilteredCourses(list);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Filtrar cursos basado en búsqueda y categoría
  useEffect(() => {
    let filtered = courses;

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory, courses]);

  // Obtener categorías únicas
  const categories = ["all", ...new Set(courses.map(course => course.category).filter(Boolean))];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white via-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Cargando cursos...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white via-blue-50 py-12">
      {/* Header de la página */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent mb-4">
            Nuestros Cursos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre todos nuestros cursos de marketing digital y transforma tu carrera
          </p>
        </div>

        {/* Filtros y Búsqueda */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-purple-100">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Barra de búsqueda */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Selector de categoría */}
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "Todas las categorías" : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Selector de vista */}
            <div className="flex border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 transition-all ${viewMode === "grid" ? 'bg-purple-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 transition-all ${viewMode === "list" ? 'bg-purple-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Información de resultados */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold text-purple-600">{filteredCourses.length}</span> de{" "}
            <span className="font-semibold text-purple-600">{courses.length}</span> cursos
          </p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Limpiar búsqueda
            </button>
          )}
        </div>
      </div>

      {/* Grid de cursos */}
      <div className="max-w-7xl mx-auto px-4">
        {filteredCourses.length > 0 ? (
          <div className={`
            ${viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "grid grid-cols-1 gap-6"
            }
          `}>
            {filteredCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                viewMode={viewMode}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-purple-100">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No se encontraron cursos
              </h3>
              <p className="text-gray-600 mb-6">
                No hay cursos que coincidan con tu búsqueda. Intenta con otros términos o categorías.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors"
              >
                Ver todos los cursos
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      {courses.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-purple-100 mb-6 text-lg">
              Contáctanos y te ayudamos a encontrar el curso perfecto para tus objetivos
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
              Contactar Asesor
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
