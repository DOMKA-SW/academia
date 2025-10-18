import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={course.image || "/cursos/default.jpg"}
        alt={course.title}
        className="rounded-lg h-40 w-full object-cover mb-3"
      />
      <h3 className="text-lg font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{course.description}</p>
      <Link
        to={`/course/${course.id}`}
        className="mt-auto bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700"
      >
        Ver curso
      </Link>
    </div>
  );
}
