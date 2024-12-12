import { FC, PropsWithChildren } from "react"
import styles from "./AppTitle.module.css"
import clsx from "clsx"

interface ITitleProps {
    className?: string,
    linable?: boolean
}

const AppTitle: FC<PropsWithChildren<ITitleProps>>= ({ children, linable, className }) => {
    return (
        <>
        {
            linable
            ?
            <div className={styles.box}>
                <h2 className={clsx(styles.title, className)}>{ children }</h2>
            </div>
            :
            <h2 className={clsx(styles.title, className)}>{ children }</h2>
        }
        </>
    )
}

export default AppTitle