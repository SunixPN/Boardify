import { Outlet } from "react-router-dom"
import styles from "./AuthorizationLayout.module.css"
import { LayoutDashboard } from "lucide-react"

const AuthorizationLayout = () => {
    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <div className={styles.headerBox}>
                    <LayoutDashboard className={styles.icon} />
                    <p className={styles.logoText}>Boardify</p>
                </div>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>

    )
}

export default AuthorizationLayout