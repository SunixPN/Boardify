import { EnumRoutes } from "@shared/enums/EnumRoutes";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        id: '1',
        path: EnumRoutes.BASE_PATH,
        element: <>AAA</>
    },
    {
        id: '2',
        path: '*',
        element: <div>404</div>
    }
])