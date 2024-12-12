import { ThemeProvider } from "@emotion/react"
import { FC, PropsWithChildren } from "react"
import { theme } from "./config/theme"

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>
    )
}

export default AppThemeProvider