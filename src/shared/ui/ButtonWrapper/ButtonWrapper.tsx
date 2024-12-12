import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"
import styles from "./ButtonWrapper.module.css"
import clsx from "clsx"

interface IButtonWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonWrapper: FC<PropsWithChildren<IButtonWrapperProps>> = ({ children, ...props }) => {
    return (
        <button {...props} className={clsx(styles.button, props.className)}>
            { children }
        </button>
    )
}

export default ButtonWrapper