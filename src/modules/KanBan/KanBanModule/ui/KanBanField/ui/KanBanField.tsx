import { EnumKanbanStatus } from "@entities/Task/enums/EnumKanbanStatus"
import { ITask } from "@entities/Task/types/ITask"
import styles from "./KanBanField.module.css"
import ButtonWrapper from "@shared/ui/ButtonWrapper/ButtonWrapper"
import { Plus } from "lucide-react"
import TaskField from "./TaskField/TaskField"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { sortTasks } from "../model/sortTasks"
// import DropField from "./DropField/DropField"

interface IKanBanFieldProps {
    status: EnumKanbanStatus,
    tasks: ITask[]
}

const KanBanField = ({
    status,
    tasks
}: IKanBanFieldProps) => {
    const sortableTasks = sortTasks(tasks)
    const sortableTasksId = sortableTasks.map(task => task.id)

    const calculateHeight = () => {
        const length = sortableTasks.length
        return `${(length * 105) + ((length - 1) * 10) + 24 + 44.6 + 20}px`
    }

    return (
        <SortableContext
            items={sortableTasksId}
            strategy={verticalListSortingStrategy}
        >
            <article style={{ height: calculateHeight() }} className={styles.field} >
                <div className={styles.head}>
                    <h3 className={styles.title}>{status} <span>{tasks.length}</span></h3>
                    <ButtonWrapper>
                        <Plus className={styles.icon} />
                    </ButtonWrapper>
                </div>
                <div className={styles.tasksBox}>
                    {
                        sortableTasks.map(task => (
                            <TaskField key={task.id} task={task} />
                        ))
                    }
                </div>
            </article>
        </SortableContext>
    )
}

export default KanBanField