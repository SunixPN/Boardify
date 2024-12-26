import AppBox from "@shared/ui/AppBox/AppBox"
import styles from "./LoginForm.module.css"
import AppTitle from "@shared/ui/AppTitle/AppTitle"
import { Button } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import AppInputValidate from "@shared/ui/Inputs/AppInputValidate/AppInputValidate"
import AppInputPasswordValidate from "@shared/ui/Inputs/AppInputPasswordValidate/AppInputPasswordValidate"
import { emailRegExp } from "@shared/constants/regulars"
import { useAuthStore } from "@entities/Authorization/store/authStore"

interface IFormLogin {
    email: string,
    password: string
}

const LoginForm = () => {
    const form = useForm<IFormLogin>({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onChangeRegister = useAuthStore(state => state.onChangeRegister)

    const onSubmit: SubmitHandler<IFormLogin> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
            <AppBox className={styles.box}>
                <AppTitle linable>Войти в Boardify</AppTitle>
                <AppInputValidate
                    autoComplete="new-email"
                    control={form.control}
                    name={"email"}
                    rules={{
                        required: "Email - обязательное поле",
                        pattern: {
                            value: emailRegExp,
                            message: "Невалидный формат Email"
                        }
                    }}
                    helperText={form.formState.errors.email?.message ?? ""}
                    error={Boolean(form.formState.errors.email)}
                    label="Email"
                />
                <AppInputPasswordValidate
                    autoComplete="new-password"
                    control={form.control}
                    name={"password"}
                    rules={{
                        required: "Пароль - обязательное поле"
                    }}
                    helperText={form.formState.errors.password?.message ?? ""}
                    error={Boolean(form.formState.errors.password)}
                    label="Пароль"
                />
                <Button
                    type="submit"
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