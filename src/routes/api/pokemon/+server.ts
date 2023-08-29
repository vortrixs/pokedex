import getOffset from '$lib/helpers/getOffset';
import type { PokemonListResponse } from '$lib/interfaces.js';
import { json } from '@sveltejs/kit';
import { PokemonClient } from 'pokenode-ts';


export const POST = async ({ request }) => {
    const { offset, limit } = await request.json() as { offset: number | null, limit: number };

    if (offset === null) {
        return new Response(null, { status: 404 });
    }

	const client = new PokemonClient;

	const response = await client.listPokemons(offset, limit);

    const newOffset = typeof response.next === 'string'
		? getOffset(response.next)
		: null;

	const pokemonList = await Promise.all(response.results.map(({ name }) => client.getPokemonByName(name)));

    const data: PokemonListResponse = { pokemonList, next: { offset: newOffset, limit } };

	return json(data);
}
