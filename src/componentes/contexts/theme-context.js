import { createContext, useState } from "react";

export const themes = {
    ligth: {
        color: '#4F4F4F',
        backgroundColor: '#C0C0C0',
    },
    dark: {
        color: '#C0C0C0',
        backgroundColor: '#4F4F4F',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.ligth)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
} 