import AppTitle from "@shared/ui/AppTitle/AppTitle";
import styles from "./ToolBar.module.css"
import { LayoutDashboard } from 'lucide-react';
import { menuElements } from "@shared/config/menuElements";
import ToolBarElement from "./ToolBarElement/ToolBarElement";
import { useState } from "react";
import { useToolBarStore } from "@shared/stores/toolBarStore";
import clsx from "clsx";
import { Tooltip } from "@mui/material";

const ToolBar = () => {
    const [currentElem, setCurrentElem] = useState(menuElements.find(elem => elem.path === window.location.pathname)?.id ?? null)
    const isExpanded = useToolBarStore(state => state.isExpanded)

    return (
        <aside style={{ width: isExpanded ? 320 : 80 }} className={styles.aside}>
            <div className={clsx(styles.headerBox, !isExpanded && styles.closeBox)}>
                <LayoutDashboard className={styles.icon} />
                {
                    isExpanded
                    &&
                    <AppTitle className={styles.title}>Boardify</AppTitle>
                }

            </div>
            <ul className={styles.items}>
                {
                    menuElements.map(elem => (
                        <ToolBarElement
                            key={elem.id}
                            currentElement={currentElem}
                            element={elem}
                            onChangeCurrentElement={(current) => setCurrentElem(current)}
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
                    {
                        isExpanded
                        &&
                        <p className={styles.text}>Белов Александр</p>
                    }

                </div>
            </Tooltip>

        </aside>
    )
}

export default ToolBar