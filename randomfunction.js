export const randomEnemie = (enemie) => {
  const numberOfEnemie = Math.floor(Math.random() * enemie.length);
  return enemie[numberOfEnemie].name;
};
