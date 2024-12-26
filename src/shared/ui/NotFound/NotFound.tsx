import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"
import { EnumRoutes } from "@shared/enums/EnumRoutes"

const NotFound = () => {
    return (
        <div className={styles["not-found"]}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.textSub}>Не найдено</p>
            <p className={styles.text}>
                Данной страницы не существует ... <Link className={styles.link} to={EnumRoutes.BASE_PATH}>На главную</Link>
            </p>
        </div>
    )
}

export default NotFound