import { EnumKanbanStatus } from "../enums/EnumKanbanStatus";

export interface ITask {
    status: EnumKanbanStatus,
    title: string,
    order: number,
    id: number
}