import { Menu, User } from "lucide-react"
import styles from "./TaskField.module.css"
import { ITask } from "@entities/Task/types/ITask"
import ButtonWrapper from "@shared/ui/ButtonWrapper/ButtonWrapper"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from '@dnd-kit/utilities';

interface ITaskFieldProps {
    task: ITask
}

const TaskField = ({ task }: ITaskFieldProps) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({
        id: task.id,
        data: {
            type: task.status
        }
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <>
            <div
                ref={setNodeRef}
                style={{...style, opacity: isDragging ? 0.5 : 1}}
                className={styles.task}
                {...attributes}
                {...listeners}
            >
                {
                    !isDragging
                    &&
                    <>
                        <div className={styles.taskHead}>
                            <div className={styles.userBox}>
                                <User className={styles.icon} />
                                <span className={styles.text}>Username</span>
                            </div>
                            <ButtonWrapper>
                                <Menu className={styles.icon} />
                            </ButtonWrapper>
                        </div>
                        <p className={styles.taskText}>{task.title}</p>
                    </>
                }

            </div>
        </>

    )
}

export default TaskField