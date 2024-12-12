import { TextField, TextFieldProps } from "@mui/material"
import { FC } from "react"

type IAppInputProps = TextFieldProps

const AppInput: FC<IAppInputProps> = ({ ...props }) => {
    return (
        <TextField size="small" variant="outlined" {...props} />
    )
}

export default AppInput