import { PokemonClient, type Pokemon } from 'pokenode-ts';
import type { PageServerLoad } from './$types';
import getOffset from '$lib/helpers/getOffset';
import type { PokemonListResponse } from '$lib/interfaces';

const limit = 48;

export const load = (async (): Promise<PokemonListResponse> => {
	const client = new PokemonClient;

	const response = await client.listPokemons(0, limit);

	const offset = typeof response.next === 'string'
		? getOffset(response.next)
		: null;

	const pokemonList: Pokemon[] = await Promise.all(response.results.map(({ name }) => client.getPokemonByName(name)));

	return { pokemonList, next: { offset, limit } };
}) satisfies PageServerLoad;