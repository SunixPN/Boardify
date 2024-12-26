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
        divider: "rgba(255, 255, 255, 0.098)"
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
        MuiIconButton: {
            styleOverrides: {
                colorPrimary: "#fff",
                colorSecondary: "#fff",
                colorInherit: "#fff",
                edgeEnd: {
                    ":active": {
                        backgroundColor: "rgba(255, 255, 255, 0.078)"
                    },
                    ":hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.078)"
                    },
                }
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

        MuiTab: {
            styleOverrides: {
                root: {
                    color: "#fff"
                }
            }
        }
    }
})