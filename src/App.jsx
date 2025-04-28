import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion'; // Make sure this is imported

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App bg-dark text-gold min-h-screen">
          <Navbar />
          <Routes>

            {/* Home Page */}
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HeroSection />
                <ProductList />
              </motion.div>
            } />

            {/* Checkout Page */}
            <Route path="/checkout" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CheckoutPage />
              </motion.div>
            } />

            {/* Success Page */}
            <Route path="/success" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SuccessPage />
              </motion.div>
            } />

          </Routes>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
