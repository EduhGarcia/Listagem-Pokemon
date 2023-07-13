import { useContext, useEffect, useState } from "react"
import { getPokemons, getPokemonDetails, getPokemonType } from "../../services/api-pokemons"
import { Link } from 'react-router-dom'
import { Ul, Li, Button, Div, Header, Input, ButSearch, ImgLogo, P, DivSearch, ImgPokemon, ButReturn } from './styles/styled-list'
import './styles/style-index.css'
import logoPokemon from '../../imagens/logoPokemon.png'
import { ThemeContext } from "../contexts/theme-context"
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button"


export const PokemonsList = () => {

    const { theme } = useContext(ThemeContext)
    const [pokemons, setPokemons] = useState({
        pokemons: [],
        notFound: 'not'
    })

    const promisePokemons = async (offSet) => {
        const pokemonJson = await getPokemons(offSet)
        const promises = pokemonJson.results.map(async item => {
            const responsePokemon = await fetch(item.url)
            const pokemonData = await responsePokemon.json()
            return pokemonData
        })
        return promises
    }

    useEffect(() => {
        const fechData = async () => {

            const promises = await promisePokemons(0)

            const promisesData = await Promise.all(promises)
            setPokemons({
                pokemons: promisesData
            })

        }

        fechData()

    }, [])

    const addPokemons = async () => {
        document.querySelector(".load-more").classList.add('hide')

        const promises = await promisePokemons(10)

        const promisesData = await Promise.all(promises)

        setPokemons({
            pokemons: [...pokemons.pokemons, ...promisesData],

        })
    }

    const returnHome = async () => {
        document.querySelector('.butReturn').classList.add('hide')
        document.querySelector(".load-more").classList.remove('hide')
        const promises = await promisePokemons(0)

        const promisesData = await Promise.all(promises)
        setPokemons({
            pokemons: promisesData
        })
    }

    const searchPokemonType = async () => {
        let namePokemon = document.querySelector('.input-search')

        if (namePokemon.value === '') return;

        try {
            const pokemonSearch = await getPokemonType(namePokemon.value)
            const data = pokemonSearch.pokemon.map(async item => {
                const pokemonType = await getPokemonDetails(item.pokemon.name)
                return pokemonType
            })

            const promises = await Promise.all(data)

            setPokemons({
                pokemons: promises
            })

        } catch (err) {
            setPokemons({
                notFound: 'yes'
            })
        } finally {
            namePokemon.value = ''
            document.querySelector(".load-more").classList.add('hide')
            document.querySelector('.butReturn').classList.remove('hide')
        }
    }

    const handleEnter = () => {
        document.querySelector('.input-search').addEventListener('keyup', e => {
            const key = e.which || e.KeyCode
            const enterPressed = key === 13
            if (enterPressed) {
                searchPokemonType()
            }
        })
    }

    const listPokemon = () => {
    
        if (pokemons.notFound === 'yes') {
            return <P>Tipo de pokemon não encontrado</P>
        }

        return (
            pokemons.pokemons.map((item, index) => {
                return (
                    <div key={index}>
                        <Link className='link' to={`/pokemon/${item.id}`}>
                            <Li>
                                <ImgPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`} alt={item.name} />{item.name}
                            </Li>
                        </Link>
                    </div>
                )
            })
        )
    }

    return (
        <Div style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
            <Header>
                <ImgLogo src={logoPokemon} />

                <DivSearch>
                    <div>
                        <ButReturn onClick={returnHome} className="butReturn hide"><i className="fas fa-arrow-left"></i></ButReturn>
                        <Input className="input-search" placeholder="Digite o tipo do Pokemon" onChange={handleEnter}></Input>
                    </div>

                    <div>
                        <ButSearch onClick={searchPokemonType}><i className="fas fa-search"></i></ButSearch>
                        <ThemeTogglerButton />
                    </div>
                </DivSearch>
            </Header>

            <Ul>
                {listPokemon()}
            </Ul>

            <Button style={{ color: theme.backgroundColor, backgroundColor: theme.color }} className="load-more" onClick={addPokemons}>Carregar Mais</Button>

        </Div>
    )
}