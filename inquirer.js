import inquirer from "inquirer";
import { starterPokemon } from "./data/starter.js";
import { randomEnemie } from "./randomfunction.js";
import { pokemon } from "./data/enemys.js";

export const userChoice = (selectPokemon) => {
  if (selectPokemon === "Charmander") {
    //display pokemon info for one
    let pokemonOne = starterPokemon[0].name;
    console.log(`You choose ${pokemonOne}.Lets Go!`);
    console.log(`Your Enemie is: ${randomEnemie(pokemon)}`);
  } else if (selectPokemon === "Bulbasaur") {
    //display pokemon info for two
    let pokemonTwo = starterPokemon[1].name;
    console.log(`You choose ${pokemonTwo}.Lets Go!`);
    console.log(`Your Enemie is: ${randomEnemie(pokemon)}`);
  } else if (selectPokemon === "Squirtle") {
    //display pokemon info for three
    let pokemonThree = starterPokemon[2].name;
    console.log(`You choose ${pokemonThree}.Lets Go!`);
    console.log(`Your Enemie is: ${randomEnemie(pokemon)}`);
  } else {
    return;
  }
};
inquirer.prompt([
  {
    type: "list",
    message: "Which attack do you choose?",
    name: "attackOption",
    choices: [],
  },
]);
