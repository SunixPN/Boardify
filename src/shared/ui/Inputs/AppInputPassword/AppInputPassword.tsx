import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, OutlinedInputProps } from "@mui/material"
import { Eye, EyeClosed } from "lucide-react"
import { FC, useState } from "react"
import styles from "./AppInputPassword.module.css"

type AppInputPasswordProps = OutlinedInputProps

const AppInputPassword: FC<AppInputPasswordProps> = ({ ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <FormControl>
            <InputLabel size="small" htmlFor={props.id}>{ props.label }</InputLabel>
            <OutlinedInput
                size="small"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => setShowPassword(prev => !prev)}
                            edge="end"
                        >
                            {!showPassword ? <EyeClosed className={styles.icon} /> : <Eye className={styles.icon} /> }
                        </IconButton>
                    </InputAdornment>
                }
                {...props}
            />
        </FormControl>

    )
}

export default AppInputPassword