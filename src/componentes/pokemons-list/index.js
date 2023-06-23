import { useEffect, useState } from "react"
import { getPokemons, getPokemonDetails, getPokemonType } from "../../services/api-pokemons"
import { Link } from 'react-router-dom'
import { Ul, Li, Button, Div, Header, Input, ButSearch, ImgLogo, P, DivSearch, ImgPokemon, ButReturn } from './styles/styled-list'
import './styles/style-index.css'
import logoPokemon from '../../imagens/logoPokemon.png'

export const PokemonsList = () => {

    const [pokemons, setPokemons] = useState({
        pokemons: [],
        offSet: 10,
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
                pokemons: promisesData,
                offSet: 10
            })

        }

        fechData()

    }, [])

    const addPokemons = async () => {
        document.querySelector(".carregar-mais").classList.add('esconder')
        
        const promises = await promisePokemons(pokemons.offSet)

        const promisesData = await Promise.all(promises)
       
        setPokemons({
            pokemons: [...pokemons.pokemons, ...promisesData],

        })
    }

    const returnHome = async () => {
        document.querySelector('.butReturn').classList.add('esconder')
        document.querySelector(".carregar-mais").classList.remove('esconder')
        const promises = await promisePokemons(0)

        const promisesData = await Promise.all(promises)
        setPokemons({
            pokemons: promisesData,
            offSet: 10
        })
    }

    const searchPokemon = async () => {
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
                pokemons: ['']
            })
        } finally {
            namePokemon.value = ''
            document.querySelector(".carregar-mais").classList.add('esconder')
            document.querySelector('.butReturn').classList.remove('esconder')

        }
    }

    const handleEnter = () => {
        document.querySelector('.input-search').addEventListener('keyup', e => {
            const key = e.which || e.KeyCode
            const enterPressed = key === 13
            if (enterPressed) {
                searchPokemon()
            }
        })
    }

    return (
        <Div>
            <Header>
                <ImgLogo src={logoPokemon} />

                <DivSearch>
                    
                    <div>
                        <ButReturn onClick={returnHome} className="butReturn esconder"><i className="fas fa-arrow-left"></i></ButReturn>
                        <Input className="input-search" placeholder="Digite o nome do Pokemon" onChange={handleEnter}></Input>
                    </div>
                    
                    <ButSearch onClick={searchPokemon}><i className="fas fa-search"></i> Search</ButSearch>
                </DivSearch>
            </Header>

            <Ul>
                {
                    pokemons.pokemons.map((item, index) => {

                        if (item === '') {
                            return (
                                <P key={index}>Pokemon não encontrado</P>
                            )
                        } else {
                            return (
                                <div key={index}>
                                    <Link className='link' to={`/pokemon/${item.id}`}>
                                        <Li>
                                            <ImgPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`} alt={item.name} />{item.name}
                                        </Li>
                                    </Link>
                                </div>
                            )
                        }

                    })}
            </Ul>

            <Button className="carregar-mais" onClick={addPokemons}>Carregar Mais</Button>

        </Div>
    )
}