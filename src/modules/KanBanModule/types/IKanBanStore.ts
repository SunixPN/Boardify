import { ITask } from "@entities/Task/types/ITask";

export interface IKanBanStore {
    tasks: ITask[],
    handleChangeTask: (tasks: ITask[]) => void
}