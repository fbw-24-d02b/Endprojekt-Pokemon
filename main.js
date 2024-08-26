import inquirer from "inquirer";
import { starterPokemon } from "./data/starter.js";
import { randomEnemy } from "./functions/randomEnemy.js";
import { pokemon } from "./data/enemys.js";
import { logo } from "./ascii/logo.js";
import { gras } from "./ascii/gras.js";
import { gameover } from "./ascii/gameover.js";
import { trophy } from "./ascii/trophy.js";
import { colorize } from "./functions/colorize.js";

console.log(logo);

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
            choices: ["Charmander", "Bulbasaur", "Squirtle", "<<< Quit"],
          },
        ])
        .then(({ selectPokemon }) => {
          if (selectPokemon) {
            const selectedPokemon = starterPokemon.find(
              (pokemon) => pokemon.name === selectPokemon
            );
            console.log(`You choose ${selectedPokemon.name}. Let's Go!`);

            const enemy = randomEnemy(pokemon);

            console.log(gras);

            console.log(`A wild ${enemy.name} appeared`);

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
                console.log(
                  `${enemy.name} got ${playerDamage} damage and is now at ${
                    enemyHP < 0 ? 0 : enemyHP
                  } HP`
                );

                if (enemyHP <= 0) {
                  console.log(trophy);
                  console.log(`You defeated ${enemy.name}`);
                  break;
                }

                const randomAttackNumber = Math.floor(
                  Math.random() * enemy.attacks.length
                );
                let enemyDamage = enemy.attacks[randomAttackNumber].damage;
                playerHP -= enemyDamage;
                console.log(
                  `${enemy.name} used ${
                    enemy.attacks[randomAttackNumber].attack
                  } and dealt ${enemyDamage} damage. ${
                    selectedPokemon.name
                  } is now at ${playerHP < 0 ? 0 : playerHP} HP`
                );

                if (playerHP <= 0) {
                  console.log(`You were defeated by ${enemy.name}`);
                  console.log(gameover);
                  break;
                }
              }
            };

            fightLoop();
          }
        });
    } else {
      console.log(gameover);
      process.exit();
    }
  });
