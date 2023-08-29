import type { PageServerLoad } from './$types';
import { PokemonClient } from 'pokenode-ts';

export const load = (async ( { params }) => {
	const client = new PokemonClient;

	const pokemon = await client.getPokemonById(Number.parseInt(params.id, 10));  

	return { pokemon };
}) satisfies PageServerLoad;