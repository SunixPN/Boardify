import { Box, Tab, Tabs } from "@mui/material"
import { ITab } from "@shared/types/ITab"
import { SyntheticEvent } from "react"

interface ITabsProps<T = any> {
    value: T,
    handleChange: (event: SyntheticEvent, value: T) => void,
    tabs: ITab[]
}

function AppTabs<T = any> ({
    handleChange,
    tabs,
    value
}: ITabsProps<T>) {

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                orientation="horizontal"
            >
                {
                    tabs.map(tab =>
                        <Tab
                            value={tab.id}
                            key={tab.id}
                            label={tab.title}
                            id={`tab-${tab.id}`}
                        />
                    )
                }
            </Tabs>
        </Box>
    )
}

export default AppTabs