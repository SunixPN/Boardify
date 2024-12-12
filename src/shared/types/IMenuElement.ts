import { EnumRoutes } from "@shared/enums/EnumRoutes";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

type IMenuElementAction = {
    path?: undefined,
    action: Function
}

type IMenuElementPath = {
    path: EnumRoutes,
    action?: undefined
}

export type IMenuElement = {
    id: number,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    title: string,
} & (IMenuElementAction | IMenuElementPath)