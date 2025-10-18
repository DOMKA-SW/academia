import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password, name);
      navigate("/dashboard");
    } catch (err) {
      setError("Error al registrarse");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold text-center mb-4">Crear cuenta</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Registrarse
        </button>
      </form>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <p className="text-center text-sm mt-4">
        ¿Ya tienes cuenta? <Link to="/login" className="text-blue-600">Inicia sesión</Link>
      </p>
    </div>
  );
}
