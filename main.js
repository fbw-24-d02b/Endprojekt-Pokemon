import inquirer from "inquirer";
import chalk from "chalk"; // Chalk-Bibliothek importieren
import { starterPokemon } from "./data/starter.js";
import { pokemon } from "./data/enemys.js";
import { randomEnemy } from "./functions/randomEnemy.js";
import { logo } from "./ascii/logo.js";
import { gras } from "./ascii/gras.js";
import { gameover } from "./ascii/gameover.js";
import { trophy } from "./ascii/trophy.js";
import * as pokemonImages from "./ascii/pokemon-pictures.js";
import playerInit from "play-sound";

const player = playerInit({
  player: "mpg123",
});

console.log(chalk.hex("#ff0000").bold(logo));

const charmanderColor = chalk.hex("#ff0000").bold("Charmander");
const bulbasaurColor = chalk.hex("#00ff00").bold("Bulbasaur");
const squirtleColor = chalk.hex("#0000ff").bold("Squirtle");

inquirer
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
      inquirer
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
            const selectedPokemon = starterPokemon.find(
              (pokemon) => pokemon.name === selectPokemon
            );
            const selectedPokemonPicture =
              pokemonImages[selectedPokemon.name.toLowerCase()];

            console.log(`You choose ${selectedPokemon.name} . Let's Go!`);
            console.log(selectedPokemonPicture);

            const enemy = randomEnemy(pokemon);

            console.log(chalk.hex("#00ff00").bold(gras));
            player.play("./sounds/BattleSound.mp3");

            const enemyPicture = pokemonImages[enemy.name.toLowerCase()];
            console.log(enemyPicture);
            console.log(
              `A wild ${chalk.hex("#ff0000").bold(enemy.name)} appeared`
            );

            const choices = selectedPokemon.attacks.map(
              (attack) => `${attack.attack}: ${attack.damage} damage`
            );

            let playerHP = selectedPokemon.hp;
            let enemyHP = enemy.hp;

            const fightLoop = async () => {
              while (playerHP > 0 && enemyHP > 0) {
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

                setTimeout(() => {
                  player.play("./sounds/attackenemy.mp3");
                  console.log(`
${enemy.name} used ${
                    enemy.attacks[randomAttackNumber].attack
                  } and dealt ${enemyDamage} damage. ${
                    selectedPokemon.name
                  } is now at ${playerHP < 0 ? 0 : playerHP} HP`);
                }, 1000);

                if (enemyHP <= 0) {
                  console.log(chalk.hex("#ffff00").bold(trophy));
                  console.log(`You defeated ${enemy.name}`);
                  player.play("./sounds/win.mp3");
                }

                if (playerHP <= 0) {
                  console.log(
                    `You were defeated by ${enemy.name}. You have to go to the healing center to heal your pokemon!`
                  );
                  player.play("./sounds/healingcenter.mp3");
                  console.log(chalk.hex("#ff0000").bold(gameover));
                }
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
