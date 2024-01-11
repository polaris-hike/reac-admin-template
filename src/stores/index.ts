import { create } from 'zustand';

export interface UserProfileState {
  username: string;
  setUserName: (username: string) => void;
}

export const useUserProfileStore = create<UserProfileState>((set) => ({
  username: '',
  setUserName: (username) => set({ username }),
}));
