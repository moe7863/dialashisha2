import { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartDrawer from './CartDrawer';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center p-6 bg-dark text-gold shadow-md sticky top-0 z-50">
        <div className="text-2xl font-bold">DialaShisha</div>
        <div className="flex gap-6 items-center">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/products" className="hover:text-white transition">Products</a>
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
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
