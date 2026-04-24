// components/CartDrawer.jsx
import { X, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export default function CartDrawer() {
  const { isOpen, toggleCart, items, removeFromCart } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {/* Overlay oscuro */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header del Carrito */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-bold uppercase tracking-wide">Tu carrito</h2>
          <button onClick={toggleCart} className="p-1 hover:bg-gray-100 rounded-full transition">
            <X size={20} />
          </button>
        </div>

        {/* Contenido del Carrito */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-thn-dark-gray gap-4">
              <span className="text-sm">Tu carrito está vacío</span>
              <button onClick={toggleCart} className="bg-black text-white px-6 py-3 text-sm font-bold uppercase hover:bg-thn-red transition w-full">
                Seguir comprando
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium line-clamp-2">{item.title}</h4>
                    <span className="text-sm font-bold text-thn-red block mt-1">S/. {item.price.toFixed(2)}</span>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer del Carrito (Checkout) */}
        {items.length > 0 && (
          <div className="border-t p-5 flex flex-col gap-4 bg-gray-50">
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Subtotal</span>
              <span>S/. {subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-thn-dark-gray text-center">Impuesto incluido. Envío calculado al pagar.</p>
            <button className="w-full bg-black text-white py-4 font-bold uppercase hover:bg-thn-red transition">
              Pagar Pedido
            </button>
          </div>
        )}
      </div>
    </>
  );
}