import { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartDrawer from './CartDrawer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center p-6 bg-dark text-gold shadow-md sticky top-0 z-50">
        <div className="text-2xl font-bold">
          <Link to="/">DialaShisha</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/products" className="hover:text-white transition">Products</Link>
          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={() => setIsCartOpen(true)}
            className="relative"
          >
            🛒
            {cartItems.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-gold text-dark rounded-full px-2 text-xs"
              >
                {cartItems.length}
              </motion.span>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={() => setIsCartOpen(true)}
            className="relative"
          >
            🛒
            {cartItems.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-gold text-dark rounded-full px-2 text-xs"
              >
                {cartItems.length}
              </motion.span>
            )}
          </motion.button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 bg-dark text-gold py-4 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Products</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
