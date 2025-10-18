import { Link } from "react-router-dom";
import { Clock, Users, Star, PlayCircle } from 'lucide-react';

export default function CourseCard({ course, viewMode = "grid" }) {
  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Imagen del curso */}
          <div className="lg:w-64 lg:h-40 w-full h-48 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
            {course.imageUrl ? (
              <img 
                src={course.imageUrl} 
                alt={course.title}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <PlayCircle className="w-12 h-12 text-white" />
            )}
          </div>
          
          {/* Contenido */}
          <div className="flex-1">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {course.category || "Marketing"}
                  </span>
                  {course.isPopular && (
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  {course.duration && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  )}
                  {course.students && (
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students} estudiantes</span>
                    </div>
                  )}
                  {course.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-purple-600">
                    {course.price || "$99"}
                  </span>
                  {course.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {course.originalPrice}
                    </span>
                  )}
                </div>
                <Link
                  to={`/course/${course.id}`}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Ver Curso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vista grid (default)
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 overflow-hidden group">
      {/* Banner superior de color */}
      <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-500"></div>
      
      <div className="p-6">
        {/* Header con categoría y badges */}
        <div className="flex justify-between items-start mb-4">
          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
            {course.category || "Marketing"}
          </span>
          {course.isPopular && (
            <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
              Popular
            </span>
          )}
        </div>

        {/* Imagen del curso */}
        <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
          {course.imageUrl ? (
            <img 
              src={course.imageUrl} 
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <PlayCircle className="w-12 h-12 text-white" />
          )}
        </div>

        {/* Información del curso */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Metadatos */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          {course.duration && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
          )}
          {course.students && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.students}</span>
            </div>
          )}
          {course.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{course.rating}</span>
            </div>
          )}
        </div>

        {/* Precio y CTA */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">
              {course.price || "$99"}
            </span>
            {course.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                {course.originalPrice}
              </span>
            )}
          </div>
          <Link
            to={`/course/${course.id}`}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            Ver Curso
          </Link>
        </div>
      </div>
    </div>
  );
}
