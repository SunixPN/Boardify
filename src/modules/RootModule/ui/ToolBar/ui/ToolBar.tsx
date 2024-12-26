import AppTitle from "@shared/ui/AppTitle/AppTitle";
import styles from "./ToolBar.module.css"
import { ArrowLeftToLine, LayoutDashboard } from 'lucide-react';
import { menuElements } from "@modules/RootModule/constants/menuElements";
import ToolBarElement from "./ToolBarElement/ToolBarElement";
import { useEffect } from "react";
import { useToolBarStore } from "@modules/RootModule/store/toolBarStore";
import clsx from "clsx";
import { Tooltip } from "@mui/material";
import ButtonWrapper from "@shared/ui/ButtonWrapper/ButtonWrapper";
import { useLocation } from "react-router-dom";

const ToolBar = () => {
    const isExpanded = useToolBarStore(state => state.isExpanded)
    const toggleExpanded = useToolBarStore(state => state.toggleExpanded)
    const currentElem = useToolBarStore(state => state.currentElem)
    const onChangeCurrentElem = useToolBarStore(state => state.onChangeCurrentElem)

    const { pathname } = useLocation()

    useEffect(() => {
        const splitPath = pathname.split("/")[1]
        const findElement = menuElements.find(elem => splitPath === elem.path?.split("/")?.[1])?.id ?? null
        onChangeCurrentElem(findElement)
    }, [pathname])

    return (
        <aside className={clsx(styles.aside, !isExpanded && styles.asideClose)}>
            <div className={clsx(styles.headerBox, !isExpanded && styles.closeBox)}>
                <LayoutDashboard className={styles.icon} />
                <AppTitle className={clsx(styles.title, !isExpanded && styles.hidden)}>Boardify</AppTitle>
                <ButtonWrapper className={styles.wrapp} onClick={() => toggleExpanded()}>
                    <ArrowLeftToLine style={{ transform: isExpanded ? "rotate(0)" : "rotate(180deg)" }} className={styles.exit} />
                </ButtonWrapper>
            </div>
            <ul className={styles.items}>
                {
                    menuElements.map(elem => (
                        <ToolBarElement
                            key={elem.id}
                            currentElement={currentElem}
                            element={elem}
                        />
                    ))
                }
            </ul>
            <Tooltip
                disableHoverListener={isExpanded}
                disableFocusListener={isExpanded}
                disableTouchListener={isExpanded}
                arrow
                title={"Белов Александр"}
                placement="right"
            >
                <div className={clsx(styles.boxUser, !isExpanded && styles.closeBoxUser)}>
                    <div className={styles.colorBox}>Б</div>
                    <p className={clsx(styles.text, !isExpanded && styles.hidden)}>Белов Александр</p>
                </div>
            </Tooltip>

        </aside>
    )
}

export default ToolBar