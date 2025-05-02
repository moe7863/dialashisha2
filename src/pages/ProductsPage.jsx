import ProductList from '../components/ProductList';

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-dark text-gold">
      <h1 className="text-4xl text-center font-bold pt-10">Our Shisha Menu</h1>
      <ProductList />
    </section>
  );
}