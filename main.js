import Pokemon from "./pokemon.js";

const pokemon = new Pokemon("Ditto", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png", $(".pokemonok"));
const pokemon1 = new Pokemon("Detto","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png", $(".pokemonok"));
pokemon.beszel();

console.log(pokemon)
console.log(pokemon.nev)
console.log(pokemon.mondat)
pokemon.harciero=2
delete pokemon.nev
console.log(pokemon.harciero)
console.log(pokemon.nev)
// privát adattagok elérése getterrel
//ehhez csak getter van, nem tudom átírni
pokemon.mondat ="Szép napunk van!"
pokemon.beszel()
