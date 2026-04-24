// components/Navbar.jsx
import { Search, ShoppingBag, User, X } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export default function Navbar() {
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartItems = useCartStore((state) => state.items);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm font-sans">
      {/* Top Bar Cyber/Promo */}
      <div className="bg-black text-white text-xs py-2 px-4 flex justify-between items-center">
        <span className="font-bold tracking-wider">CYBER VULTUR 🔥 SOLO X HORAS VER PRODUCTOS →</span>
        <div className="flex gap-2">
          <span>01 Días : 01 Hrs : 59 Min</span>
          <button><X size={14} /></button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-black tracking-tighter">VULTUR PROJECT</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-sm font-bold uppercase tracking-wide">
          <li className="hover:text-thn-red cursor-pointer transition">Hombre</li>
          <li className="hover:text-thn-red cursor-pointer transition">Mujer</li>
          <li className="hover:text-thn-red cursor-pointer transition">Kids</li>
          <li className="hover:text-thn-red cursor-pointer transition">Marcas</li>
          <li className="hover:text-thn-red cursor-pointer transition">Accesorios</li>
          <li className="text-thn-red flex items-center gap-1 cursor-pointer">
            CYBER VULTUR <span className="text-lg">🔥</span>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 cursor-pointer hover:text-thn-red" />
          <User className="w-5 h-5 cursor-pointer hover:text-thn-red hidden md:block" />
          <div className="relative cursor-pointer" onClick={toggleCart}>
            <ShoppingBag className="w-5 h-5 hover:text-thn-red" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-thn-red text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}