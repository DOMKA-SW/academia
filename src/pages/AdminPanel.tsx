import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function AdminPanel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [lessons, setLessons] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "courses"), {
        title,
        description,
        image,
        lessons: lessons.split(",").map((l) => l.trim()),
      });
      setMessage("✅ Curso creado correctamente");
      setTitle("");
      setDescription("");
      setImage("");
      setLessons("");
    } catch (err) {
      setMessage("❌ Error al crear curso");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Panel de administración</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Título del curso"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="URL de imagen o portada"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Lecciones separadas por comas"
          value={lessons}
          onChange={(e) => setLessons(e.target.value)}
          className="border p-2 rounded"
        />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Crear curso
        </button>
      </form>
      {message && <p className="text-center mt-3">{message}</p>}
    </div>
  );
}
