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

interface Course {
  id?: string;
  title: string;
  description: string;
  level: string;
  price: number;
}

export default function AdminPanel() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formData, setFormData] = useState<Course>({
    title: "",
    description: "",
    level: "Básico",
    price: 0,
  });

  // 🔹 Cargar cursos existentes
  const fetchCourses = async () => {
    const querySnapshot = await getDocs(collection(db, "courses"));
    const courseList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Course[];
    setCourses(courseList);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // 🔹 Crear nuevo curso
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return alert("Completa todos los campos");

    await addDoc(collection(db, "courses"), {
      ...formData,
      createdAt: serverTimestamp(),
    });
    setFormData({ title: "", description: "", level: "Básico", price: 0 });
    fetchCourses();
  };

  // 🔹 Eliminar curso
  const handleDelete = async (id?: string) => {
    if (!id) return;
    await deleteDoc(doc(db, "courses", id));
    fetchCourses();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Panel de Administración</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-xl shadow-md mb-6 space-y-3"
      >
        <input
          type="text"
          placeholder="Título del curso"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Descripción"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full border p-2 rounded"
        />
        <select
          value={formData.level}
          onChange={(e) => setFormData({ ...formData, level: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option>Básico</option>
          <option>Intermedio</option>
          <option>Avanzado</option>
        </select>
        <input
          type="number"
          placeholder="Precio (opcional)"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: Number(e.target.value) })
          }
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700"
        >
          Crear curso
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-3">Cursos existentes</h2>
      <ul className="space-y-3">
        {courses.map((c) => (
          <li
            key={c.id}
            className="p-3 bg-gray-50 border rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{c.title}</h3>
              <p className="text-sm text-gray-600">{c.level}</p>
            </div>
            <button
              onClick={() => handleDelete(c.id)}
              className="text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
