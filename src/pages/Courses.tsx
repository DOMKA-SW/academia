import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnap = await getDocs(collection(db, "courses"));
      const list = querySnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCourses(list);
    };
    fetchCourses();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
      {courses.length === 0 && (
        <p className="text-gray-600 text-center col-span-full">No hay cursos disponibles aún.</p>
      )}
    </div>
  );
}
