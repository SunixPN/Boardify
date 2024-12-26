import { DragOverEvent } from "@dnd-kit/core"
import { IKanBanStore } from "../types/IKanBanStore"
import { EnumKanbanStatus } from "@entities/Task/enums/EnumKanbanStatus"

interface IHandleDragOver {
    kanbanStore: IKanBanStore
}

export const handleDragOver = ({ kanbanStore }: IHandleDragOver) => {
    return (event: DragOverEvent) => {
        const { over, active } = event
        const activeType = active.data?.current?.type as EnumKanbanStatus
        const overType = over?.data?.current?.type as EnumKanbanStatus

        console.log(over, active)

        if (typeof over?.id === "string") {
            kanbanStore.handleChangeTask([...kanbanStore.tasks.map(task => {
                if (task.id === active.id) {
                    return {
                        ...task,
                        status: over.id as EnumKanbanStatus
                    }
                }

                return task
            })])
        }

        if ((activeType && overType) && (activeType !== overType)) {
            kanbanStore.handleChangeTask([...kanbanStore.tasks.map(task => {
                if (task.id === active.id) {
                    return {
                        ...task,
                        status: overType
                    }
                }

                return task
            })])
        }
    }
}