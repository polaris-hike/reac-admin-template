import { create } from 'zustand';

export interface PostModalState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const usePostModalStore = create<PostModalState>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));
