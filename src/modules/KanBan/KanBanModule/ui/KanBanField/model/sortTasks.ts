import { ITask } from "@entities/Task/types/ITask";

export const sortTasks = (tasks: ITask[]) => {
    const sortableTasks = [...tasks]

    return sortableTasks.sort((a, b) => {
        return a.order - b.order
    })
}