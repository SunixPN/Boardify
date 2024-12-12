import { IMenuElement } from "@shared/types/IMenuElement"
import { FC } from "react"
import styles from "./ToolBarElement.module.css"
import { Link } from "react-router-dom"
import clsx from "clsx"
import { useToolBarStore } from "@shared/stores/toolBarStore"
import { Tooltip } from "@mui/material"

interface IToolBarElementProps {
    onChangeCurrentElement: (current: number) => void,
    currentElement: number | null,
    element: IMenuElement
}

const ToolBarElement: FC<IToolBarElementProps> = ({
    currentElement,
    element,
    onChangeCurrentElement
}) => {
    const isExpanded = useToolBarStore(state => state.isExpanded)

    const onClickAction = () => {
        if (element.action) {
            element.action()
        }

        onChangeCurrentElement(element.id)
    }

    return (
        <>
            {
                <Tooltip 
                    disableHoverListener={isExpanded} 
                    disableFocusListener={isExpanded}
                    disableTouchListener={isExpanded}
                    arrow 
                    title={element.title} 
                    placement="right"
                >
                    <Link
                        style={{ justifyContent: isExpanded ? "flex-start" : "center" }}
                        onClick={onClickAction}
                        to={element?.path ?? ""}
                        className={clsx(styles.item, currentElement === element.id && styles['item--active'])}
                    >
                        <element.icon className={styles.elem} />
                        {
                            isExpanded
                            &&
                            <p className={styles.text}>{element.title}</p>
                        }
                    </Link>
                </Tooltip>

            }
        </>

    )
}

export default ToolBarElement