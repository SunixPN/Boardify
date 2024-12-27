import { EnumKanbanStatus } from "@entities/Task/enums/EnumKanbanStatus"
import { useDroppable } from "@dnd-kit/core"
import { ReactNode } from "react"
import styles from "./DropFiled.module.css"

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
        <div className={styles.drop} ref={setNodeRef}>
            { children }
        </div>
    )
}

export default DropField