import { ReactNode } from "react";

export interface ITab<T = any> {
    id: T,
    title: string | ReactNode
}