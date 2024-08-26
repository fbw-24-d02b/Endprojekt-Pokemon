export const randomEnemy = (enemie) => {
  const numberOfEnemie = Math.floor(Math.random() * enemie.length);
  return enemie[numberOfEnemie];
};
