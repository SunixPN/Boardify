import { router } from "@app/router/routes"
import { unAuthRouter } from "@app/router/unAuthRoutes"
import { RouterProvider } from "react-router-dom"

const AppRouterProvider = () => {
    const isAuth = false
    const currentRouter = isAuth ? router : unAuthRouter

    return (
        <RouterProvider router={currentRouter} />
    )
}

export default AppRouterProvider