// store/useCartStore.js
import { create } from 'zustand';

export const useCartStore = create((set) => ({
  isOpen: false,
  items: [],
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  addToCart: (item) => set((state) => ({ items: [...state.items, item], isOpen: true })),
  removeFromCart: (id) => set((state) => ({ items: state.items.filter(i => i.id !== id) }))
}));