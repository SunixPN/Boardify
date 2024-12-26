import { authRouter, unAuthRouter } from "@app/router/router"
import { RouterProvider } from "react-router-dom"

const AppRouterProvider = () => {
    const isAuth = true
    const currentRouter = isAuth ? authRouter : unAuthRouter

    return (
        <RouterProvider router={currentRouter} />
    )
}

export default AppRouterProvider