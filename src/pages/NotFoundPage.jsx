import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-dark text-gold p-8 text-center">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <p className="text-2xl text-white mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">
        <button className="bg-gold text-dark px-6 py-3 rounded-full hover:bg-white transition">
          Back to Home
        </button>
      </Link>
    </section>
  );
}
