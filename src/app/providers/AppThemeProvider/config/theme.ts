import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        text: {
            primary: "#fff",
            secondary: "#ffffff8c"
        },

        primary: {
            main: "#4b71d6",
            contrastText: "#fff"
        },
    },
    typography: {
        fontFamily: "Yandex Sans",
    },

    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: "rgba(255, 255, 255, .488)",
                },
            }
        },
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: "contained"
                    },
                    style: {
                        textTransform: "none",
                        fontSize: 16
                    }
                }
            ]
        },
    }
})