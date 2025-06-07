// src/stores/userStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UserInfo {
  name: string;
  birth: string;
  gender: string;
  mbti: string;
  image: File | null;
}

export interface UserStore {
  user: UserInfo;
  setUser: (user: UserInfo) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: {
        name: "",
        birth: "",
        gender: "남성",
        mbti: "",
        image: null,
      },
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage", // localStorage 키 이름
      partialize: (state) => ({ user: state.user }), // 저장 대상 지정
      // ⚠️ image가 File 타입이라면 localStorage에 저장 불가능
      // 필요한 경우 base64 등으로 인코딩해야 함
    }
  )
);