import { EnumKanbanStatus } from "../enums/EnumKanbanStatus";
import { ITask } from "./ITask";

export type KanbanStatusObjectType = {
    [key in EnumKanbanStatus]: ITask[]
}