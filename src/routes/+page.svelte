<script lang="ts">
	import PokemonListItem from '$lib/components/PokemonListItem.svelte';
	import type { PokemonListResponse } from '$lib/interfaces';
	import pokemonList from '$lib/stores/listData';
	import { inview } from 'svelte-inview';
	import { Pulse } from 'svelte-loading-spinners';
	import type { PageData } from './$types';

	export let data: PageData;

	let isLoading = false;
	let nextQuery = data.next;
	$pokemonList = data.pokemonList;

	const loadMore = async () => {
		isLoading = true;

		const response = await fetch('/api/pokemon', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json', Accept: 'application/json' }),
			body: JSON.stringify(nextQuery)
		});

		isLoading = false;

		if (!response.ok) throw new Error(await response.text());

		const json: PokemonListResponse = (await response.json()) as PokemonListResponse;

		nextQuery = json.next;
		$pokemonList = [...$pokemonList, ...json.pokemonList];
	};
</script>

<div class="pokemon-list-wrapper">
	<div class="pokemon-list">
		{#each $pokemonList as pokemon}
			<PokemonListItem {pokemon} />
		{/each}
	</div>

	<span use:inview on:inview_enter={loadMore} />
	{#if isLoading}
		<Pulse size="60" color="#FF3E00" unit="px" duration="1s" />
	{/if}
</div>

<style lang="scss">
@use '~styles/colors';
@use '~styles/sizes';

.pokemon-list-wrapper {
	display: flex;
	flex-flow: column;
	align-items: center;
	padding: 0 10px;

	.pokemon-list {
		display: grid;
		max-width: calc(375px*3);
		grid-template-columns: repeat(var(--max-cols, 1), minmax(335px, 1fr));

		@include sizes.tablet { --max-cols: 2; };
		@include sizes.desktop { --max-cols: 3; };
	}
}
</style>
