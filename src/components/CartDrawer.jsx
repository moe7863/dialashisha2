import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function CartDrawer({ isOpen, onClose }) {
  const { cartItems } = useContext(CartContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-dark text-gold shadow-lg z-50 p-6 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button onClick={onClose} className="text-white text-2xl">&times;</button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-white text-center">Your cart is empty</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gold pb-2">
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm">£{item.price}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
  <Link to="/checkout">
    <button onClick={onClose} className="mt-6 bg-gold text-dark py-3 rounded-full w-full hover:bg-white transition">
      Proceed to Checkout
    </button>
  </Link>
)}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer; // <-- THIS FIXES YOUR ERROR
