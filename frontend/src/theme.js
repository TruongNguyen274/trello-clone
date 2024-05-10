import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#00000",
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: "#ffffff",
                },
            },
        },
    },
});
export default theme;
