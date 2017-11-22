function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function choose2Between(min, max) {
  const n = randomBetween(min, max - 1);
  let m;
  do {
    m = randomBetween(min, max - 1);
  } while (n === m);

  return [m, n];
}

export function choose2(array) {
  const [m, n] = choose2Between(0, array.length);
  return [array[m], array[n]];
}
