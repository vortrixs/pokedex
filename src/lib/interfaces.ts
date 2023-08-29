import type { Pokemon } from "pokenode-ts"

export interface PokemonListResponse {
    pokemonList: Pokemon[]
    next: {
        offset: number | null
        limit: number
    }
}