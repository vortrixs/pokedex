import type { Pokemon, PokemonType } from "pokenode-ts";

const getPokemonImage = (pokemon: Pokemon, form: 'normal'|'shiny' = 'normal'): string => `/images/pokemon/${form}/${pokemon.name}.gif`;

const getTypeImage = (type: PokemonType['type']) => `/images/types/${type.name}.svg`;

export { getPokemonImage, getTypeImage };
