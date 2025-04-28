export default function HeroSection() {
    return (
      <section className="h-[90vh] flex flex-col justify-center items-center text-center bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gold drop-shadow-lg">
          Experience Luxury Shisha
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-white max-w-2xl">
          Premium flavors. Exceptional service. Delivered to your door.
        </p>
        <a href="/products" className="mt-8 bg-gold text-black py-3 px-6 rounded-full text-lg hover:bg-white hover:text-dark transition">
          Order Now
        </a>
      </section>
    );
  }
  