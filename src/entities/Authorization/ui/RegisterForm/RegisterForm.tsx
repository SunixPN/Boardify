import AppBox from "@shared/ui/AppBox/AppBox"
import styles from "./RegisterForm.module.css"
import AppTitle from "@shared/ui/AppTitle/AppTitle"
import { Button } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import AppInputValidate from "@shared/ui/Inputs/AppInputValidate/AppInputValidate"
import AppInputPasswordValidate from "@shared/ui/Inputs/AppInputPasswordValidate/AppInputPasswordValidate"
import { emailRegExp, phoneRegExp } from "@shared/constants/regulars"
import { useAuthStore } from "@entities/Authorization/store/authStore"

interface IFormRegister {
    fullName: string,
    email: string,
    phone: string,
    password: string,
    repeat: string,
    post: string
}

const RegisterForm = () => {
    const onChangeRegister = useAuthStore(state => state.onChangeRegister)
    const form = useForm<IFormRegister>({
        defaultValues: {
            email: "",
            fullName: "",
            password: "",
            phone: "",
            repeat: "",
            post: ""
        }
    })

    const onSubmitForm: SubmitHandler<IFormRegister> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmitForm)} className={styles.form}>
            <AppBox className={styles.box}>
                <AppTitle linable>Регистрация в Boardify</AppTitle>
                <AppInputValidate
                    control={form.control}
                    name="fullName"
                    error={Boolean(form.formState.errors.fullName)}
                    helperText={form.formState.errors.fullName?.message ?? ""}
                    label="ФИО"
                />
                <AppInputValidate
                    autoComplete="new-Email"
                    label="Email"
                    control={form.control}
                    name="email"
                    rules={{
                        required: "Email - обязательное поле",
                        pattern: {
                            value: emailRegExp,
                            message: "Невалидный формат Email"
                        }
                    }}
                    error={Boolean(form.formState.errors.email)}
                    helperText={form.formState.errors.email?.message ?? ""}
                />
                <AppInputValidate
                    label="Номер телефона"
                    control={form.control}
                    name="phone"
                    error={Boolean(form.formState.errors.phone)}
                    rules={{
                        pattern: {
                            value: phoneRegExp,
                            message: "Невалидный формат номера телефона"
                        }
                    }}
                    helperText={form.formState.errors.phone?.message ?? ""}
                />
                <AppInputValidate
                    label="Ваша должность"
                    control={form.control}
                    name="post"
                    error={Boolean(form.formState.errors.post)}
                    helperText={form.formState.errors.post?.message ?? ""}
                />
                <AppInputPasswordValidate
                    autoComplete="new-password"
                    label="Пароль"
                    error={Boolean(form.formState.errors.password)}
                    helperText={form.formState.errors.password?.message ?? ""}
                    control={form.control}
                    name="password"
                    rules={{
                        required: "Пароль - обязательное поле"
                    }}
                />
                <AppInputPasswordValidate
                    autoComplete="new-password"
                    label="Повторите пароль"
                    error={Boolean(form.formState.errors.repeat)}
                    helperText={form.formState.errors.repeat?.message ?? ""}
                    control={form.control}
                    rules={{
                        validate: (value, formValues) => value === formValues.password || "Пароли не совпадают"
                    }}
                    name="repeat"
                />
                <Button
                    type="submit"
                    className={styles.button}
                    variant="contained"
                >
                    Зарегистрироваться
                </Button>
                <div className={styles.down}>
                    <p className={styles.text}>Уже есть аккаунт ?</p>
                    <Button
                        onClick={event => {
                            event.preventDefault()
                            onChangeRegister(false)
                        }}
                        className={styles.buttonLogin}
                        variant="contained"
                    >
                        Войти
                    </Button>
                </div>
            </AppBox>
        </form>
    )
}

export default RegisterForm