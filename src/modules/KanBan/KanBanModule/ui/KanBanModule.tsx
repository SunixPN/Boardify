import { useMemo, useState } from "react"
import { IKanBanStore } from "../types/IKanBanStore"
import { KanbanStatusObjectType } from "@entities/Task/types/IKanbanStatusObject"
import { EnumKanbanStatus } from "@entities/Task/enums/EnumKanbanStatus"
import KanBanField from "./KanBanField/ui/KanBanField"
import styles from "./KanBanModule.module.css"
import { DndContext, DragOverlay, KeyboardSensor, MouseSensor, TouchSensor, UniqueIdentifier, closestCorners, useSensor, useSensors } from "@dnd-kit/core"
import { handleDragEnd } from "../model/handleDragEnd"
import { handleDragOver } from "../model/handleDragOver"
import DropField from "./DropField/DropField"
import TaskField from "./KanBanField/ui/TaskField/TaskField"

interface IKanBanModuleProps {
    kanbanStore: IKanBanStore
}

function KanBanModule({
    kanbanStore
}: IKanBanModuleProps) {
    const [activeId, setActiveId] = useState<null | UniqueIdentifier>(null)

    const kanBanStatusObject: KanbanStatusObjectType = useMemo(() => {
        let kanBanObject: KanbanStatusObjectType = {} as KanbanStatusObjectType

        Object.values(EnumKanbanStatus).forEach(status => {
            kanBanObject[status] = kanbanStore.tasks.filter(task => task.status === status)
        })

        return kanBanObject
    }, [kanbanStore.tasks])

    const mouseSensor = useSensor(MouseSensor);
    const touchSensor = useSensor(TouchSensor);
    const keyboardSensor = useSensor(KeyboardSensor);

    const sensors = useSensors(
        mouseSensor,
        touchSensor,
        keyboardSensor,
    );

    const activeTask = kanbanStore.tasks.find(task => task.id === activeId)

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd({ kanbanStore })}
            onDragOver={handleDragOver({ kanbanStore })}
            onDragStart={(event) => {
                setActiveId(event.active.id)
            }}
        >
            <div className={styles.kanBanBoard}>
                {
                    Object.keys(kanBanStatusObject).map(kanBanKey => (
                        <DropField key={kanBanKey} status={kanBanKey as EnumKanbanStatus}>
                            <KanBanField
                                status={kanBanKey as EnumKanbanStatus}
                                tasks={kanBanStatusObject[kanBanKey as EnumKanbanStatus]}
                            />
                        </DropField>
                    ))
                }
                <DragOverlay>
                    {activeTask && <TaskField task={activeTask} />}
                </DragOverlay>
            </div>

        </DndContext>

    )
}

export default KanBanModule