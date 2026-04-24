export default function ProductCard({ product }) {
  const formatPrice = (price) => {
    return price.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });
  };

  // 1. Armamos el mensaje dinámico codificando los espacios para la URL
  const whatsappMessage = encodeURIComponent(`hola quiero unas ${product.title}`);
  
  // 2. Creamos el link final a tu número
  const whatsappUrl = `https://wa.me/51921124129?text=${whatsappMessage}`;

  return (
    // 3. Transformamos el div contenedor en un enlace (a) apuntando al WhatsApp
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="group cursor-pointer flex flex-col gap-2 font-sans relative border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition"
    >
      
      {/* Imagen */}
      <div className="bg-[#f5f5f5] w-full aspect-square overflow-hidden flex items-center justify-center relative border-b border-gray-100">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Info del Producto */}
      <div className="flex flex-col items-start p-3 gap-1">
        <span className="text-gray-500 text-xs font-semibold uppercase">{product.brand}</span>
        <h3 className="text-sm font-medium text-thn-black leading-tight line-clamp-2">
          {product.title}
        </h3>
        
        <div className="flex items-center gap-2 mt-1">
          <span className="text-base font-bold text-thn-black">{formatPrice(product.price)}</span>
        </div>
      </div>
    </a>
  );
}