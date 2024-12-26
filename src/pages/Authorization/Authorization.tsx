import { useAuthStore } from "@entities/Authorization/store/authStore"
import LoginForm from "@entities/Authorization/ui/LoginForm/LoginForm"
import RegisterForm from "@entities/Authorization/ui/RegisterForm/RegisterForm"

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