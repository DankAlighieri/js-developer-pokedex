const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const title = document.getElementById('title')
const maxRecords = 151;
const limit = 10;
let offset = 0;

// Pokemon card rendering
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" id="${pokemon.name}" onclick="getPokeInfo(this)" data-pokemon="${pokemon.name}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types" id="types-${pokemon.name}">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`)
                        .join('')}
                </ol>

                <ol class = "abilities" id="detail-${pokemon.name}">
                    <p id="pHabilidade">Habilidades</p>
                    ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`)
                        .join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>


        </li>
        
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

// pagination Control
loadPokemonItens(offset, limit)
loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})