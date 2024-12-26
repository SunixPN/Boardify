import RootLayout from "@app/layouts/RootLayout/RootLayout";
import Home from "@pages/Home/ui/Home";
import { EnumRoutes } from "@shared/enums/EnumRoutes";
import NotFound from "@shared/ui/NotFound/NotFound";
import { Navigate } from "react-router-dom";
import { IRouteObject } from "../types/IRouteObject";
import ProfileLayout from "@modules/UserProfileLayout/ui/ProfileLayout";
import { EnumProfile } from "@modules/UserProfileLayout/enums/EnumProfile";

export const authRoutes: IRouteObject[] = [
    {
        id: '1',
        element: <RootLayout />, 
        children: [
            {
                id: 'not-found',
                path: EnumRoutes.NOT_FOUND_PATH,
                element: <NotFound />,
                handle: {
                    title: "404 - не найдено"
                }
            },
            {
                id: 'redirect',
                path: '*',
                element: <Navigate to={EnumRoutes.NOT_FOUND_PATH} />,
            },
            {
                id: '1-1',
                path: EnumRoutes.BASE_PATH,
                element: <Home />,
                handle: {
                    title: "Главная"
                }
            },
            {
                id: '1-2',
                element: <ProfileLayout />,
                children: [
                    {
                        id: '1-2-1',
                        path: `${EnumRoutes.USER_PROFILE_PATH}/${EnumProfile.ACCOUNT}`,
                        element: <div>Аккаунт</div>,
                        handle: {
                            title: "Профиль (аккаунт)"
                        }
                    },
                    {
                        id: '1-2-2',
                        path: `${EnumRoutes.USER_PROFILE_PATH}/${EnumProfile.ACHIEVEMENT}`,
                        element: <div>Достижения</div>,
                        handle: {
                            title: "Профиль (достижения)"
                        }
                    },
                    {
                        id: '1-2-3',
                        path: `${EnumRoutes.USER_PROFILE_PATH}/${EnumProfile.SETTINGS}`,
                        element: <div>Настройки</div>,
                        handle: {
                            title: "Профиль (настройки)"
                        }
                    },
                    {
                        id: '1-2-4',
                        path: `${EnumRoutes.USER_PROFILE_PATH}/${EnumProfile.STATISTIC}`,
                        element: <div>Статистика</div>,
                        handle: {
                            title: "Профиль (статистика)"
                        }
                    }
                ]
            },
            {
                id: '1-3',
                path: EnumRoutes.NOTIFY_PATH,
                element: <div>NOTIFY</div>,
                handle: {
                    title: "Уведомления"
                }
            },
            {
                id: '1-4',
                path: EnumRoutes.SEARCH_PATH,
                element: <div>Search</div>,
                handle: {
                    title: "Поиск"
                }
            },
            {
                id: '1-5',
                path: EnumRoutes.ORGANISATIONS_PATH,
                element: <div>Organizations</div>,
                handle: {
                    title: "Мои организации"
                }
            }
        ]
    },
]