import { IHandle } from "@shared/types/IHandle";
import { RouteObject } from "react-router-dom";

export interface IRouteObject extends Omit<RouteObject, "handle" | "index"> {
    handle?: IHandle
    index?: false
}