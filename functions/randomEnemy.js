/**
 * Wählt zufällig einen Feind aus einer gegebenen Liste von Feinden aus.
 *
 * @param {Array} enemy - Eine Liste von Feinden.
 * @returns {Object} - Ein zufällig ausgewählter Feind aus der Liste.
 */
export const randomEnemy = (enemy) => {
  const numberOfEnemy = Math.floor(Math.random() * enemy.length);
  return enemy[numberOfEnemy];
};
