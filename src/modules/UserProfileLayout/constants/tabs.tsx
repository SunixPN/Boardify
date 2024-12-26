import { ITab } from "@shared/types/ITab";
import { EnumProfile } from "../enums/EnumProfile";

export const tabs: ITab<EnumProfile>[] = [
    {
        id: EnumProfile.ACCOUNT,
        title: "Аккаунт"
    },
    {
        id: EnumProfile.ACHIEVEMENT,
        title: "Достижения"
    },
    {
        id: EnumProfile.SETTINGS,
        title: "Настройки"
    },
    {
        id: EnumProfile.STATISTIC,
        title: "Статистика"
    },
] 