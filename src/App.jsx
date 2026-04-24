import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import HomeCarousel from './components/HomeCarousel'; 
import ProductCard from './components/ProductCard';

function App() {
  const mockProducts = [
    {
      id: 1,
      brand: 'Nike',
      title: "Air Force 1 Low '07",
      price: 199.90,
      image: 'https://images.stockx.com/images/Nike-Air-Force-1-Low-White-07_V2-Product.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358'
    },
    {
      id: 2,
      brand: 'adidas',
      title: "Adidas Samba OG",
      price: 199.90,
      image: 'https://images.stockx.com/images/adidas-Samba-OG-Cloud-White-Core-Black-Product.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358'
    },
    {
      id: 3,
      brand: 'puma',
      title: 'Puma Suede XL',
      price: 199.90,
      image: 'https://images.stockx.com/images/Puma-Suede-XL-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358'
    },
    {
      id: 4,
      brand: 'New Balance',
      title: 'New Balance 530',
      price: 199.90,
      image: 'https://images.stockx.com/images/New-Balance-530-White-Silver-Navy-Product.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358'
    },
    {
      id: 5,
      brand: 'nike',
      title: 'Nike Dunk Low Grey Fog',
      price: 199.90,
      image: 'https://images.stockx.com/images/Nike-Dunk-Low-Grey-Fog-Product.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358'
    },
    {
      id: 6,
      brand: 'Vans',
      title: "Vans Knu Skool",
      price: 199.90,
      image: 'https://images.stockx.com/images/Vans-Knu-Skool-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358'
    },
    {
      id: 7,
      brand: 'Jordan',
      title: 'Jordan 4 Retro Military Black',
      price: 199.90,
      image: 'https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358'
    },
    {
      id: 8,
      brand: 'Nike',
      title: 'Nike Dunk Low Retro White Black',
      price: 199.90,
      image: 'https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans relative">
      <Navbar />
      <CartDrawer />

      <HomeCarousel />

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-thn-black">LO MÁS TOP EN OFERTA</h2>
            <p className="text-thn-dark-gray text-sm mt-1">Actualiza tu estilo con lo último en sneakers.</p>
          </div>
          <button className="hidden md:block text-sm font-bold uppercase border-b-2 border-black pb-1 hover:text-thn-red hover:border-thn-red transition">
            Ver todo
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* =========================================
          BOTÓN FLOTANTE DE WHATSAPP GENERAL
      ========================================= */}
      <a
        href="https://wa.me/51921124129?text=Hola%20Vultur%20Project!%20Quisiera%20hacer%20una%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;