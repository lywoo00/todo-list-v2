import {
  create
} from 'zustand';

export const usePopupStore = create((set) => ({
  isOpen: false,
  openPopup: () => set({
    isOpen: true
  }),
  closePopup: () => set({
    isOpen: false
  })
}))