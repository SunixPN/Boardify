import { IMenuElement } from "@shared/types/IMenuElement"
import { FC } from "react"
import styles from "./ToolBarElement.module.css"
import { Link } from "react-router-dom"
import clsx from "clsx"
import { useToolBarStore } from "@modules/RootModule/store/toolBarStore"
import { Tooltip } from "@mui/material"

interface IToolBarElementProps {
    currentElement: number | null,
    element: IMenuElement
}

const ToolBarElement: FC<IToolBarElementProps> = ({
    currentElement,
    element,
}) => {
    const isExpanded = useToolBarStore(state => state.isExpanded)
    const onChangeCurrentElem = useToolBarStore(state => state.onChangeCurrentElem)

    const onClickAction = () => {
        if (element.action) {
            element.action()
        }

        onChangeCurrentElem(element.id)
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
                        onClick={onClickAction}
                        to={element?.path ?? ""}
                        className={clsx(styles.item, currentElement === element.id && styles['item--active'], !isExpanded && styles.center)}
                    >
                        <element.icon className={styles.elem} />
                        <p className={clsx(styles.text, !isExpanded && styles.hidden)}>{element.title}</p>
                    </Link>
                </Tooltip>

            }
        </>

    )
}

export default ToolBarElement