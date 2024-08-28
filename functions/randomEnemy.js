/**
 * Selects a random enemy from a given list of enemies.
 *
 * @param {Array} enemy - A list of enemies.
 * @returns {Object} - A randomly selected enemy from the list.
 */
export const randomEnemy = (enemy) => {
  const numberOfEnemy = Math.floor(Math.random() * enemy.length);
  return enemy[numberOfEnemy];
};
