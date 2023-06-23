import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { getColorPokemon, getDescriptionEffect, getPokemonDetails } from '../../services/api-pokemons'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/theme-context'
import { ThemeTogglerButton } from '../theme-toggler-button/theme-toggler-button'
import logoPokemon from '../../imagens/logoPokemon.png'
import {
    ButReturn, Div, DivAbilities, DivContainer, DivCard, DivInfo, EffectP, H2, H3, Header, Img, Li,
    NameP, P, Span, Strong, Ul, ImgLogo
} from './style-details'

export const PokemonDetailed = () => {

    const [pokemon, setPokemon] = useState({
        pokemon: {},
        color: {}
    })

    const [abilities, setAbilities] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            let getColor = await getColorPokemon(id)
            const pokemon = await getPokemonDetails(id)

            setPokemon({
                pokemon: pokemon,
                color: getColor
            })

            const pokemonAbilities = await pokemon.abilities.map(async item => {
                return await getDescriptionEffect(item.ability.url)
            })

            const result = await Promise.all(pokemonAbilities)

            setAbilities(result)

        }

        fetchData()

    })

    const { theme } = useContext(ThemeContext)

    return (

        <Div style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>

            <Header>
                <Link to={'/'}>
                    <ButReturn><i className="fas fa-arrow-left"></i>&nbsp;&nbsp; Retornar ao menu</ButReturn>
                </Link>

                <ImgLogo src={logoPokemon} />

                <ThemeTogglerButton />
            </Header>

            <DivContainer>
                <DivCard>
                    <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemon.name} style={{ background: `linear-gradient(180deg, ${pokemon.color} 46%, rgba(139,163,166,1) 66%, rgba(187,188,189,1) 76%)` }} />

                    <DivInfo>
                        <NameP>Nome: <Span>{pokemon.pokemon.name}</Span></NameP>
                        <P>Tipos: {pokemon.pokemon.types?.map((item, index) => {

                            if (pokemon.pokemon.types.length <= 2 && index === 0) {
                                return <Span key={index}>{item.type.name}</Span>
                            } else if (index === pokemon.pokemon.types.length - 1) {
                                return <Span key={index}> e {item.type.name}</Span>
                            }

                            return <Span key={index}>{item.type.name}, </Span>

                        })}</P>
                    </DivInfo>
                </DivCard>

                <DivAbilities style={{ backgroundColor: pokemon.color }}>
                    <H3>Habilidades</H3>

                    {abilities?.map((item, index) => {
                        return (
                            <div key={index}>

                                <EffectP><Strong>{item.name}: </Strong>
                                    {item.effect_entries.map(element => {
                                        return element.effect
                                    })}</EffectP>
                            </div>
                        )
                    })
                    }
                </DivAbilities>
            </DivContainer>

            <H2>Movimentos</H2>

            <Ul>
                {pokemon.pokemon.moves?.map((item, index) => {
                    return <Li key={index}><span style={{ color: pokemon.color, fontWeight: 700, fontSize: 22 }}>{index + 1}</span> - {item.move.name}</Li>
                })}
            </Ul>
        </Div>
    )
}