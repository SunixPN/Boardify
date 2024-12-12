import { create } from "zustand";

interface IAuthStore {
    isRegister: boolean,
    onChangeRegister: (toggle: boolean) => void
}

export const useAuthStore = create<IAuthStore>(set => ({
    isRegister: false,
    onChangeRegister: toggle => {
        set({ isRegister: toggle })
    }
}))