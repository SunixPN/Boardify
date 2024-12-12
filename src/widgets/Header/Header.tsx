import { ArrowLeftToLine, LayoutDashboard } from "lucide-react"
import styles from "./Header.module.css"
import { Link, useMatches } from "react-router-dom"
import { EnumRoutes } from "@shared/enums/EnumRoutes"
import { useToolBarStore } from "@shared/stores/toolBarStore"
import ButtonWrapper from "@shared/ui/ButtonWrapper/ButtonWrapper"

const Header = () => {
    const matches = useMatches()
    const toggleExpanded = useToolBarStore(state => state.toggleExpanded)
    const isExpanded = useToolBarStore(state => state.isExpanded)

    const currentRoute = matches.find(elem => Boolean(elem.handle))
    const currentHandle = currentRoute?.handle as object
    const currentTitle = currentHandle ? "title" in currentHandle ? (currentHandle?.title as string) : "" : ""

    return (
        <header className={styles.header}>
            <div className={styles.headerBox}>
                <div className={styles.leftBox}>
                    <ButtonWrapper onClick={() => toggleExpanded()}>
                        <ArrowLeftToLine style={{ transform: isExpanded ? "rotate(0)" : "rotate(180deg)" }} className={styles.elem} />
                    </ButtonWrapper>
                    <div className={styles.logoBox}>
                        <Link className={styles.link} to={EnumRoutes.BASE_PATH}></Link>

                        <LayoutDashboard className={styles.icon} />
                        <p className={styles.logoText}>Boardify</p>
                    </div>
                </div>

                <h2 className={styles.title}>{currentTitle}</h2>
                <div>X</div>
            </div>
        </header>
    )
}

export default Header