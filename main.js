
// let userInput = document.getElementById("user-input").value;
// let pokemonToSearch= null;



// function handleUserinput(){
// pokemonToSearch = document.querySelector("#user-choice").value



async function getPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");
    const data = await response.json();
    console.log(data);
    let pokemonName = data.name;
    addPokemonToTheList(pokemonName);
}
getPokemon();
// console.log(userInput)

const pokemonCollection = document.getElementById("pokemon-collection");

function addPokemonToTheList(string) {
    let li = document.createElement("li");
    let listItem = document.createTextNode(string);
    let pikachuImage = document.createElement("img");
    li.appendChild(listItem);
    pokemonCollection.appendChild(li);

}



// const addPokemon = document.getElementById("add-pokemon");

// addPokemon.addEventListener("click", getPokemon);
    
// function handleClick(userInput) {
//     getPokemon(userInput);
// }