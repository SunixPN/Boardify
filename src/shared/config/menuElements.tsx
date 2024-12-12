import { EnumRoutes } from "@shared/enums/EnumRoutes";
import { IMenuElement } from "@shared/types/IMenuElement";
import { Bell, House, Search, User, Users } from "lucide-react";

export const menuElements: IMenuElement[] = [
    {
        id: 1,
        icon: House,
        path: EnumRoutes.BASE_PATH,
        title: "Главная"
    },
    {
        id: 2,
        icon: User,
        path: EnumRoutes.BASE_PATH,
        title: "Профиль"
    },
    {
        id: 3,
        icon: Bell,
        path: EnumRoutes.BASE_PATH,
        title: "Уведомления"
    },
    {
        id: 4,
        icon: Search,
        path: EnumRoutes.BASE_PATH,
        title: "Поиск"
    },
    {
        id: 5,
        icon: Users,
        path: EnumRoutes.BASE_PATH,
        title: "Мои организации"
    }
]