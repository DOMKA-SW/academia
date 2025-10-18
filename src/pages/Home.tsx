import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-center py-20 bg-gradient-to-br from-blue-100 to-white">
      <h1 className="text-4xl font-extrabold mb-4 text-blue-700">
        Bienvenido a Marketing Intelligent Academy
      </h1>
      <p className="text-gray-700 mb-8">
        Aprende marketing digital, SEO, Google Ads y más con expertos.
      </p>
      <Link
        to="/courses"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Ver cursos disponibles
      </Link>
    </section>
  );
}
