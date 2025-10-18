import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow mt-8">
      <h2 className="text-2xl font-semibold mb-2">Hola, {user?.name}</h2>
      <p className="text-gray-600 mb-4">Tu progreso en los cursos aparecerá aquí.</p>
      <div className="bg-blue-50 p-4 rounded">
        <p className="text-sm text-blue-600">
          Próximamente: seguimiento de lecciones, certificados y más.
        </p>
      </div>
    </div>
  );
}
