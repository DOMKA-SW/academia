import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const docRef = doc(db, "courses", id);
      const snap = await getDoc(docRef);
      if (snap.exists()) setCourse(snap.data());
    };
    fetchCourse();
  }, [id]);

  if (!course) return <p className="p-6">Cargando curso...</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6">
      <img src={course.image} alt={course.title} className="rounded mb-4" />
      <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <h3 className="text-lg font-semibold mb-2">Lecciones</h3>
      <ul className="list-disc pl-5">
        {course.lessons?.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
