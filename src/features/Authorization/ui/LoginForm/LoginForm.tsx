import AppBox from "@shared/ui/AppBox/AppBox"
import styles from "./LoginForm.module.css"
import AppTitle from "@shared/ui/AppTitle/AppTitle"
import { Button } from "@mui/material"
import AppInput from "@shared/ui/Inputs/AppInput/AppInput"
import AppInputPassword from "@shared/ui/Inputs/AppInputPassword/AppInputPassword"
import { useAuthStore } from "@features/Authorization/store/authStore"

const LoginForm = () => {
    const onChangeRegister = useAuthStore(state => state.onChangeRegister)

    return (
        <form className={styles.form}>
            <AppBox className={styles.box}>
                <AppTitle linable>Войти в Boardify</AppTitle>
                <AppInput
                    label="Email"
                />
                <AppInputPassword
                    label="Пароль"
                />
                <Button
                    className={styles.buttonLogin}
                    variant="contained"
                >
                    Войти
                </Button>
                <div className={styles.down}>
                    <p className={styles.text}>Ещё нету аккаунта ?</p>
                    <Button
                        onClick={event => {
                            event.preventDefault()
                            onChangeRegister(true)
                        }}
                        className={styles.button}
                        variant="contained"
                    >
                        Зарегистрироваться
                    </Button>

                </div>
            </AppBox>
        </form>
    )
}

export default LoginForm