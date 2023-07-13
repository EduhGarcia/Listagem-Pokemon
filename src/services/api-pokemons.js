export async function getPokemons(offSet) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=10`)
    return await response.json()
}

export async function getPokemonDetails(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await response.json()
}

export async function getPokemonType(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${name}`)
    return await response.json()
}

export async function getDescriptionEffect(apiEffect) {
    const response = await fetch(apiEffect)
    return await response.json()
}

export async function getColorPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    const json = await response.json()
    let nameColor = json.color.name
    
    if (nameColor === 'red') {
        return nameColor = 'darkred'
    } else if (nameColor === 'white') {
        return nameColor = 'gray'
    } else if (nameColor === 'yellow') {
        return nameColor = '#DAA520'
    } 
    
    return nameColor
}