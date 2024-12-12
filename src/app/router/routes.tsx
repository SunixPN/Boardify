import RootLayout from "@app/layouts/RootLayout/RootLayout";
import Home from "@pages/Home/Home";
import { EnumRoutes } from "@shared/enums/EnumRoutes";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        id: '1',
        element: <RootLayout />,
        children: [
            {
                id: '1-1',
                path: EnumRoutes.BASE_PATH,
                element: <Home />,
                handle: {
                    title: "Главная страница"
                }
            },
            {
                id: '1-2',
                path: '*',
                element: <div>404</div>,
                handle: {
                    title: "404"
                }
            }
        ]
    },
])