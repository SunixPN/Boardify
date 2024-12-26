import { create } from "zustand";
import { EnumProfile } from "../enums/EnumProfile";

interface IProfileStore {
    currentTab: EnumProfile,
    changeCurrentTab: (value: EnumProfile) => void
}

export const useProfileStore = create<IProfileStore>(set => {
    return {
        currentTab: window.location.pathname.split("/")[2] as EnumProfile,
        changeCurrentTab: (value) => {
            set({ currentTab: value })
        }
    }
})