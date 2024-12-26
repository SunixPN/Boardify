import { EnumKanbanStatus } from "@entities/Task/enums/EnumKanbanStatus";
import { IKanBanStore } from "@modules/KanBanModule/types/IKanBanStore";
import { create } from "zustand";

export const useKanBanStore = create<IKanBanStore>(set => ({
    handleChangeTask: (tasks) => set({ tasks: tasks }),
    tasks: [
        {
            id: 1,
            order: 2,
            status: EnumKanbanStatus.IN_PROGRESS,
            title: "Задача 1"
        },
        {
            id: 2,
            order: 1,
            status: EnumKanbanStatus.IN_PROGRESS,
            title: "Задача 2"
        },
        {
            id: 3,
            order: 3,
            status: EnumKanbanStatus.IN_PROGRESS,
            title: "Задача 4"
        },
        {
            id: 4,
            order: 1,
            status: EnumKanbanStatus.PENDING,
            title: "Задача 3"
        }
    ]
}))