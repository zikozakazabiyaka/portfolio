import defense from '../images/pokemonStats/defense.svg';
import attack from '../images/pokemonStats/attack.svg';
import hp from '../images/pokemonStats/hp.svg';
import speed from '../images/pokemonStats/speed.svg';
import specialAttack from '../images/pokemonStats/special-attack.svg';
import specialDefense from '../images/pokemonStats/special-defense.svg';

export const POKEMON_STATS: { [key: string]: string} = {
  defense,
  attack,
  hp,
  speed,
  'special-attack': specialAttack,
  'special-defense': specialDefense,
};
