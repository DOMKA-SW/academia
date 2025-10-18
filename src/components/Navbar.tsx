import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">Marketing Academy</Link>
      <div className="flex gap-4">
        <Link to="/courses">Cursos</Link>
        {user ? (
          <>
            <Link to="/dashboard">Mi progreso</Link>
            {user.role === "admin" && <Link to="/admin">Admin</Link>}
            <button onClick={logout} className="text-red-500">Salir</button>
          </>
        ) : (
          <>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/register">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}
