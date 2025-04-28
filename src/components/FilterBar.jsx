export default function FilterBar({ selectedCategory, setSelectedCategory }) {
    const categories = ['All', 'Traditional', 'Premium', 'Ice'];
  
    return (
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-dark text-gold">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === category ? 'bg-gold text-dark' : 'border-gold hover:bg-white hover:text-dark'
            } transition`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
  