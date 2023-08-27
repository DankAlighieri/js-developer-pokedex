function getPokeInfo(element) {
    const pokemon = element;
    const pokeTypes = document.getElementById(`types-${pokemon.id}`);
    const pokeAbilities = document.getElementById(`detail-${pokemon.id}`)

    if (pokeTypes.style.display == "none") {
        pokeTypes.style.display = "block"
        pokeAbilities.style.display = "none"
    } else {
        pokeTypes.style.display = "none"
        pokeAbilities.style.display = "block"
    }
}