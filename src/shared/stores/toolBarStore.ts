import { create } from "zustand";

interface IToolBarStore {
    isExpanded: boolean,
    onChangeExpanded: (toggle: boolean) => void,
    toggleExpanded: () => void
}

export const useToolBarStore = create<IToolBarStore>((set, get) => ({
    isExpanded: true,
    onChangeExpanded: (toggle) => set({ isExpanded: toggle }),
    toggleExpanded: () => set({ isExpanded: !get().isExpanded })
}))