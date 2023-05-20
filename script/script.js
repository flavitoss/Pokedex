const pokemonName = document.querySelector('.pokemon__name')



const fetchPokemon = async (pokemon) => {
    const fetchAPIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}
    `)

    const data = await APIResponse.json()

    return data
}  
const renderPokemon = async (pokemon) =>{
    const data = await fetchPokemon(pokemon)

    pokemonName.innerHTML = data.name

    console.log
}
renderPokemon(`12`)