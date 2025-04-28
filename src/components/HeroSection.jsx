export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/luxury-smoke.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-gold p-4">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold drop-shadow-lg">
      Experience Luxury Shisha
      </h1>
        <p className="mt-6 text-xl md:text-2xl text-white max-w-2xl mx-auto">
          Premium flavors. Exceptional service. Delivered to your door.
        </p>
        <a href="/products" className="mt-8 inline-block bg-gold text-dark py-3 px-6 rounded-full text-lg hover:bg-white hover:text-dark transition">
          Order Now
        </a>
      </div>
      
    </section>
  );
}
