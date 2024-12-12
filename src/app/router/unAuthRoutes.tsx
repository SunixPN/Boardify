import Authorization from "@pages/Authorization/Authorization";
import { EnumRoutes } from "@shared/enums/EnumRoutes";
import AuthorizationLayout from "@shared/layouts/AuthorizationLayout/AuthorizationLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const unAuthRouter = createBrowserRouter([
    {
        id: '1',
        element: <AuthorizationLayout />,
        children: [
            {
                id: '1-1',
                path: EnumRoutes.AUTHORIZATION_PATH,
                element: <Authorization />
            },
            {
                id: '1-2',
                path: "*",
                element: <Navigate to={EnumRoutes.AUTHORIZATION_PATH} />
            }
        ]
    },
])