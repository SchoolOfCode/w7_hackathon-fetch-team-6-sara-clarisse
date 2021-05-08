async function getPokemon(string) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${string}/`);
    const data = await response.json();
    console.log(data);
    let pokemonName = data.name;
    addPokemonToTheList(pokemonName);
}

const pokemonCollection = document.getElementById("pokemon-collection");

function addPokemonToTheList(string) {
    let li = document.createElement("li");
    let listItem = document.createTextNode(string);
    li.appendChild(listItem);
    pokemonCollection.appendChild(li);
}

let userInput = document.getElementById("user-input").nodeValue;

const addPokemon = document.getElementById("add-pokemon");

addPokemon.addEventListener("click", handleClick);
    
function handleClick() {
    getPokemon(userInput);
}