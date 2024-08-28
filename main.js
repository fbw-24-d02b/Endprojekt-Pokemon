import inquirer from "inquirer";
import chalk from "chalk";
import { starterPokemon } from "./data/starter.js";
import { pokemon } from "./data/enemys.js";
import { randomEnemy } from "./functions/randomEnemy.js";
import { logo } from "./ascii/logo.js";
import { gras } from "./ascii/gras.js";
import { gameover } from "./ascii/gameover.js";
import { trophy } from "./ascii/trophy.js";
import * as pokemonImages from "./ascii/pokemon-pictures.js";
import playerInit from "play-sound";

/**
 * Initializes the sound player with the specified player executable.
 * @type {Object}
 */
const player = playerInit({
  player: "mpg123",
});

/**
 * Displays the game logo in red color using chalk.
 */
console.log(chalk.hex("#ff0000").bold(logo));

/**
 * Creates colored and bold text for the starter Pokémon names.
 * @type {string}
 */
const charmanderColor = chalk.hex("#ff0000").bold("Charmander");
const bulbasaurColor = chalk.hex("#00ff00").bold("Bulbasaur");
const squirtleColor = chalk.hex("#0000ff").bold("Squirtle");

/**
 * Prompts the user with a "Do you want to play?" option.
 * If the user selects "Yes", the game proceeds to Pokémon selection.
 * If the user selects "No", the game ends with a game over message.
 */
inquirer
//@ts-ignore
  .prompt([
    {
      type: "list",
      message: "Do you want to play?",
      name: "playOption",
      choices: ["Yes", "No"],
    },
  ])
  .then(({ playOption }) => {
    if (playOption === "Yes") {
      /**
       * Prompts the user to select a starter Pokémon.
       * If a Pokémon is selected, the game proceeds with the battle.
       * If the user selects "<<< Quit", the game ends.
       */
      inquirer
      //@ts-ignore
        .prompt([
          {
            type: "list",
            message: "Select a pokemon",
            name: "selectPokemon",
            choices: [
              { name: charmanderColor, value: "Charmander" },
              { name: bulbasaurColor, value: "Bulbasaur" },
              { name: squirtleColor, value: "Squirtle" },
              "<<< Quit",
            ],
          },
        ])
        .then(({ selectPokemon }) => {
          if (selectPokemon) {
            /**
             * Finds the selected Pokémon from the starter list.
             * Displays the selected Pokémon and its ASCII art.
             * Initiates the battle sequence against a random enemy Pokémon.
             * @type {Object}
             */
            const selectedPokemon = starterPokemon.find(
              (pokemon) => pokemon.name === selectPokemon
            );
            const selectedPokemonPicture =
              pokemonImages[selectedPokemon.name.toLowerCase()];

            console.log(`You choose ${selectedPokemon.name}. Let's Go!`);
            console.log(selectedPokemonPicture);

            /**
             * Selects a random enemy Pokémon.
             * Displays the grass ASCII art and plays the battle sound.
             * @type {Object}
             */
            const enemy = randomEnemy(pokemon);

            console.log(chalk.hex("#00ff00").bold(gras));
            player.play("./sounds/BattleSound.mp3");

            const enemyPicture = pokemonImages[enemy.name.toLowerCase()];
            console.log(enemyPicture);
            console.log(
              `A wild ${chalk.hex("#ff0000").bold(enemy.name)} appeared`
            );

            /**
             * Maps the player's Pokémon attacks to a list of choices.
             * @type {Array<string>}
             */
            const choices = selectedPokemon.attacks.map(
              (attack) => `${attack.attack}: ${attack.damage} damage`
            );

            /**
             * Stores the HP of the player and the enemy Pokémon.
             * @type {number}
             */
            let playerHP = selectedPokemon.hp;
            let enemyHP = enemy.hp;

            /**
             * Executes the fight loop between the player's Pokémon and the enemy Pokémon.
             * Prompts the player to select an attack and calculates the damage dealt.
             * Plays attack sounds and updates HP values after each attack.
             * Ends the battle when either the player or enemy HP reaches 0.
             */
            const fightLoop = async () => {
              while (playerHP > 0 && enemyHP > 0) {
                //@ts-ignore
                const { attackChoose } = await inquirer.prompt([
                  {
                    type: "list",
                    message: "Which attack do you choose?",
                    name: "attackChoose",
                    choices: choices,
                  },
                ]);

                let playerDamage = parseInt(attackChoose.split(":")[1]);
                enemyHP -= playerDamage;

                player.play("./sounds/attackuser.mp3");

                console.log(
                  `${enemy.name} got ${playerDamage} damage and is now at ${
                    enemyHP < 0 ? 0 : enemyHP
                  } HP`
                );

                const randomAttackNumber = Math.floor(
                  Math.random() * enemy.attacks.length
                );

                let enemyDamage = enemy.attacks[randomAttackNumber].damage;
                playerHP -= enemyDamage;

                if (enemyHP > 0) {
                  setTimeout(() => {
                    player.play("./sounds/attackenemy.mp3");
                    console.log(`
${enemy.name} used ${
                      enemy.attacks[randomAttackNumber].attack
                    } and dealt ${enemyDamage} damage. ${
                      selectedPokemon.name
                    } is now at ${playerHP < 0 ? 0 : playerHP} HP`);
                  }, 1000);
                }

                // Victory condition
                if (enemyHP <= 0) {
                  console.log(chalk.hex("#ffff00").bold(trophy));
                  console.log(`You defeated ${enemy.name}`);
                  player.play("./sounds/win.mp3");
                }

                // Defeat condition
                setTimeout(() => {
                  if (playerHP <= 0) {
                    console.log(
                      `You were defeated by ${enemy.name}. You have to go to the healing center to heal your pokemon!`
                    );
                    player.play("./sounds/healingcenter.mp3");
                    console.log(chalk.hex("#ff0000").bold(gameover));
                  }
                }, 1200);
              }
            };

            fightLoop();
          }
        });
    } else {
      console.log(chalk.hex("#ff0000").bold(gameover));
      process.exit();
    }
  });
