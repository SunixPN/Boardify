import Authorization from "@pages/Authorization/Authorization";
import { EnumRoutes } from "@shared/enums/EnumRoutes";
import AuthorizationLayout from "@shared/layouts/AuthorizationLayout/AuthorizationLayout";
import { Navigate } from "react-router-dom";
import { IRouteObject } from "../types/IRouteObject";

export const unAuthRoutes: IRouteObject[] = [
    {
        id: '1',
        element: <AuthorizationLayout />,
        children: [
            {
                id: 'redirect',
                path: "*",
                element: <Navigate to={EnumRoutes.AUTHORIZATION_PATH} />
            },
            {
                id: '1-1',
                path: EnumRoutes.AUTHORIZATION_PATH,
                element: <Authorization />
            },
        ]
    },
]