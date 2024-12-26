import { Outlet } from "react-router-dom"
import styles from "./RootLayout.module.css"
import Header from "@modules/RootModule/ui/Header/Header"
import ToolBar from "@modules/RootModule/ui/ToolBar/ui/ToolBar"

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