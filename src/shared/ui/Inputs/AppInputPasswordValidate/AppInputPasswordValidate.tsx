import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, OutlinedInputProps } from "@mui/material"
import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"
import styles from "./AppInputPasswordValidate.module.css"
import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form"

type AppInputPasswordValidateProps<T extends FieldValues> = {
    helperText: string,
    name: Path<T>,
    control: Control<T, any>,
    rules?: Omit<RegisterOptions<T, Path<T> & (string | undefined)>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">
} & OutlinedInputProps

function AppInputPasswordValidate<T extends FieldValues>({
    helperText,
    control,
    name,
    rules,
    ...props
}: AppInputPasswordValidateProps<T>) {
    const [showPassword, setShowPassword] = useState(false)
    
    return (
        <FormControl>
            <InputLabel required={Boolean(rules?.required)} style={props.error ? { color: "#d32f2f" } : {}} size="small" htmlFor={props.id}>{props.label}</InputLabel>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={renderProps => (
                    <OutlinedInput
                        size="small"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(prev => !prev)}
                                    edge="end"
                                >
                                    {!showPassword ? <EyeClosed className={styles.icon} /> : <Eye className={styles.icon} />}
                                </IconButton>
                            </InputAdornment>
                        }
                        {...props}
                        {...renderProps.field}
                        onChange={event => renderProps.field.onChange(event.target.value)}
                    />
                )}
            />
            {props.error && (
                <FormHelperText error>
                    {helperText}
                </FormHelperText>
            )}
        </FormControl>

    )
}

export default AppInputPasswordValidate