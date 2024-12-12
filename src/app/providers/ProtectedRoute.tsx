import { FC, PropsWithChildren } from "react"

interface ProtectedRouteProps {
    
}

const ProtectedRoute: FC<PropsWithChildren<ProtectedRouteProps>> = ({
    children,
}) => {
    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute