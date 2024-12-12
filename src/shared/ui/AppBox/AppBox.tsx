import { FC, PropsWithChildren } from "react"
import styles from "./AppBox.module.css"
import clsx from "clsx"

interface IAppBoxProps {
    className?: string
}

const AppBox: FC<PropsWithChildren<IAppBoxProps>> = ({ children, className }) => {
    return (
        <div className={clsx(styles.box, className)}>
            { children }
        </div>
    )
}

export default AppBox