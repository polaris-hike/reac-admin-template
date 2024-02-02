import { create } from 'zustand';

export interface PostStationModalState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const usePostStationModalStore = create<PostStationModalState>(
  (set) => ({
    open: false,
    setOpen: (open: boolean) => set({ open }),
  })
);
