import { EnumProfile } from "@modules/UserProfileLayout/enums/EnumProfile";
import { ReactNode } from "react";

export const componentByTab: { [key in EnumProfile]: ReactNode } = {
    account: <div>ACC</div>,
    achievement: <div>ACHIV</div>,
    settings: <div>SETTINGS</div>,
    statistic: <div>STATISTIC</div>
}