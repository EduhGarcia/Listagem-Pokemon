import React, { useContext } from "react"
import { ThemeContext, themes } from "../contexts/theme-context"
import { Button } from "../button/button"

export const ThemeTogglerButton = () => {
    
    const { theme, setTheme } = useContext(ThemeContext)

    const trocaTema = () => {
        const botaoMoon = document.querySelector(".fa-moon")

        if (botaoMoon !== null) {
            botaoMoon.classList.remove('fa-moon')
            botaoMoon.classList.add('fa-sun')
        } else {
            const botaoSun = document.querySelector(".fa-sun")
            botaoSun.classList.remove('fa-sun')
            botaoSun.classList.add('fa-moon')
        }

        setTheme(theme === themes.ligth ? themes.dark : themes.ligth)
    }
    
    return (
        <>
            <Button onClick={trocaTema}>Modo escuro <i className="fas fa-moon"></i></Button>
        </>
    )
}