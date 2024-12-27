import { DragEndEvent } from "@dnd-kit/core"
import { IKanBanStore } from "../types/IKanBanStore"
import { arrayMove } from "@dnd-kit/sortable"
import { sortTasks } from "../ui/KanBanField/model/sortTasks"

interface IHandleDragEnd {
    kanbanStore: IKanBanStore,
}

export const handleDragEnd = ({ kanbanStore }: IHandleDragEnd) => {
    return (event: DragEndEvent) => {
        const { active, over } = event
        
        const filterArray = kanbanStore.tasks.filter(task => task.status !== active?.data?.current?.type)
        const filterArrayByType = sortTasks(kanbanStore.tasks.filter(task => task.status === active?.data?.current?.type))

        const oldIndex = filterArrayByType.findIndex(task => task.id === active.id)
        const newIndex = filterArrayByType.findIndex(task => task.id === over?.id)

        const sortedArrayTasks = arrayMove(filterArrayByType, oldIndex, newIndex).map((task, index) => ({
            ...task,
            order: index + 1
        }))

        kanbanStore.handleChangeTask([...filterArray, ...sortedArrayTasks])
    }
}