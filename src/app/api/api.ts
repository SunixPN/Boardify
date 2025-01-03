import { EnumTokens } from "@shared/enums/EnumTokens";
import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        Authorization: localStorage.getItem(EnumTokens.ACCESS_TOKEN) ?? undefined
    }
})