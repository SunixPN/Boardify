import { Outlet } from "react-router-dom"
import styles from "./RootLayout.module.css"
import Header from "@widgets/Header/Header"
import ToolBar from "@widgets/ToolBar/ui/ToolBar"

const RootLayout = () => {
    return (
        <div className={styles.root}>
            <ToolBar />
            <div className={styles.rootSection}>
                <Header />
                <main className={styles.main}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default RootLayout