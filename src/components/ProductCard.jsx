import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { toast } from 'react-hot-toast'; // ← ADD THIS

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`); // ← ADD THIS
  };

  return (
    <div className="bg-dark rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gold">{product.name}</h2>
        <p className="text-white text-sm mt-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gold font-bold">£{product.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-gold text-dark px-4 py-2 rounded-full hover:bg-white transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
