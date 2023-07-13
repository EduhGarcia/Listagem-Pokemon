import { Header, ImgLogo, ButReturn } from "./style-details"
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button"
import { Link } from 'react-router-dom'
import logoPokemon from '../../imagens/logoPokemon.png'

export const header = () => {
    if (window.innerWidth <= 490) {
        return (
            <Header>
                <ImgLogo src={logoPokemon} />
                
                <div>
                    <Link to={'/'}>
                        <ButReturn><i className="fas fa-arrow-left"></i></ButReturn>
                    </Link>

                    <ThemeTogglerButton />
                </div>
            </Header>

        )
    } else {
        return (
            <Header>
                <Link to={'/'}>
                    <ButReturn><i className="fas fa-arrow-left"></i></ButReturn>
                </Link>

                <ImgLogo src={logoPokemon} />

                <ThemeTogglerButton />
            </Header>

        )
    }
}