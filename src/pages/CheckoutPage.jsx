import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function CheckoutPage() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const deliveryFee = 5;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    clearCart();
    toast.success('Order placed successfully!');
    navigate('/success');
  };

  return (
    <section className="min-h-screen p-8 bg-dark text-gold">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add some products first!</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gold pb-4">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-sm text-white">£{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="mt-10 p-6 bg-dark border border-gold rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Fee</span>
              <span>£{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-xl mt-4">
              <span>Total</span>
              <span>£{total.toFixed(2)}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="mt-8 bg-gold text-dark py-3 px-6 w-full rounded-full hover:bg-white transition"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </section>
  );
}
