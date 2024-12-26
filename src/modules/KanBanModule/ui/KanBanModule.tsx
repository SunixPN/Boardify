import { useMemo } from "react"
import { IKanBanStore } from "../types/IKanBanStore"
import { KanbanStatusObjectType } from "@entities/Task/types/IKanbanStatusObject"
import { EnumKanbanStatus } from "@entities/Task/enums/EnumKanbanStatus"
import KanBanField from "./KanBanField/ui/KanBanField"
import styles from "./KanBanModule.module.css"
import { DndContext, rectIntersection } from "@dnd-kit/core"
import { handleDragEnd } from "../model/handleDragEnd"
import { handleDragOver } from "../model/handleDragOver"

interface IKanBanModuleProps {
    kanbanStore: IKanBanStore
}

function KanBanModule({
    kanbanStore
}: IKanBanModuleProps) {
    const kanBanStatusObject: KanbanStatusObjectType = useMemo(() => {
        let kanBanObject: KanbanStatusObjectType = {} as KanbanStatusObjectType

        Object.values(EnumKanbanStatus).forEach(status => {
            kanBanObject[status] = kanbanStore.tasks.filter(task => task.status === status)
        })

        return kanBanObject
    }, [kanbanStore.tasks])

    return (
        <DndContext
            collisionDetection={rectIntersection}
            onDragEnd={handleDragEnd({ kanbanStore })}
            onDragOver={handleDragOver({ kanbanStore })}
        >
            <div className={styles.kanBanBoard}>
                {
                    Object.keys(kanBanStatusObject).map(kanBanKey => (
                        <KanBanField
                            key={kanBanKey}
                            status={kanBanKey as EnumKanbanStatus}
                            tasks={kanBanStatusObject[kanBanKey as EnumKanbanStatus]}
                        />
                    ))
                }
            </div>

        </DndContext>

    )
}

export default KanBanModule