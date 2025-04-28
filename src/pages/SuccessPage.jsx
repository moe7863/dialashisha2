import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-dark text-gold text-center p-8 relative overflow-hidden">
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={300}
        gravity={0.2}
        recycle={false}
      />
      <h1 className="text-5xl font-bold mb-6">Thank You!</h1>
      <p className="text-xl text-white mb-8">Your order has been placed successfully. We will deliver it shortly.</p>
      <Link to="/">
        <button className="bg-gold text-dark px-6 py-3 rounded-full hover:bg-white transition">
          Back to Home
        </button>
      </Link>
    </section>
  );
}
