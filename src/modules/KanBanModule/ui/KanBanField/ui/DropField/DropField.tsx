import { EnumKanbanStatus } from "@entities/Task/enums/EnumKanbanStatus"
import { useDroppable } from "@dnd-kit/core"
import { ReactNode } from "react"

interface IDropFieldProps {
    status: EnumKanbanStatus,
    children: ReactNode
}

const DropField = ({ status, children }: IDropFieldProps) => {
    const {
        setNodeRef
    } = useDroppable({
        id: status
    })
    return (
        <div style={{ height: "100%" }} ref={setNodeRef}>
            { children }
        </div>
    )
}

export default DropField