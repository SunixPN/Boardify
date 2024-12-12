import { useAuthStore } from "@features/Authorization/store/authStore"
import LoginForm from "@features/Authorization/ui/LoginForm/LoginForm"
import RegisterForm from "@features/Authorization/ui/RegisterForm/RegisterForm"

const Authorization = () => {   
    const isRegister = useAuthStore(state => state.isRegister)

    return (
        <>
            {
                isRegister ?
                    <RegisterForm />
                    : <LoginForm />
            }
        </>
    )
}

export default Authorization