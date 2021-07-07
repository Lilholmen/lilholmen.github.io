import { mergedHeroes } from './app.js';

export function card() {
  const currentHero = mergedHeroes.find((item) => item.id === this.id);
  console.table(currentHero);
}
