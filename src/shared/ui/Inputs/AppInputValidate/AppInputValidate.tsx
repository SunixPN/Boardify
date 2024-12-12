import { TextField, TextFieldProps } from "@mui/material"
import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form"

type IAppInputPropsValidate<T extends FieldValues> = {
    name: Path<T>,
    control: Control<T, any>,
    rules?: Omit<RegisterOptions<T, Path<T> & (string | undefined)>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">
} & TextFieldProps

function AppInputValidate<T extends FieldValues>({ name, control, rules, ...props }: IAppInputPropsValidate<T>) {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={renderProps => (
                <TextField 
                    size="small" 
                    variant="outlined" 
                    {...props} 
                    {...renderProps.field} 
                    label={Boolean(rules?.required) ? `${props.label} *` : props.label}
                    onChange={(event) => renderProps.field.onChange(event.target.value)} 
                />
            )}
        />

    )
}

export default AppInputValidate