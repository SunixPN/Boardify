import { createBrowserRouter } from "react-router-dom";
import { authRoutes } from "./constants/authRoutes";
import { unAuthRoutes } from "./constants/unAuthRoutes";

export const authRouter = createBrowserRouter(authRoutes)

export const unAuthRouter = createBrowserRouter(unAuthRoutes)