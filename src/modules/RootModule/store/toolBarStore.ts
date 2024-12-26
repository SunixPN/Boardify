import { create } from "zustand";

interface IToolBarStore {
    isExpanded: boolean,
    currentElem: number | null,
    onChangeCurrentElem: (current: number | null) => void
    onChangeExpanded: (toggle: boolean) => void,
    toggleExpanded: () => void
}

export const useToolBarStore = create<IToolBarStore>((set, get) => ({
    isExpanded: false,
    currentElem: null,
    onChangeCurrentElem: (current) => set({ currentElem: current }),
    onChangeExpanded: (toggle) => set({ isExpanded: toggle }),
    toggleExpanded: () => set({ isExpanded: !get().isExpanded })
}))