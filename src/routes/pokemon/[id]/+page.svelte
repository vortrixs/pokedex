<script lang="ts">
	import PokemonType from '$lib/components/PokemonType.svelte';
	import { getPokemonImage } from '$lib/helpers/Images';
	import ucfirst from '$lib/helpers/ucfirst';
	import type { PageData } from './$types';
    import { Progressbar } from 'flowbite-svelte'

	export let data: PageData;
</script>

<header>
	<h1>{ucfirst(data.pokemon.name)}</h1>
	<span>#{data.pokemon.id.toString(10).padStart(3, '0')}</span>
</header>

<ul>
	{#each data.pokemon.types as { type }}
		<li><PokemonType {type} /></li>
	{/each}
</ul>

<img width="85" height="85" src={getPokemonImage(data.pokemon)} alt={data.pokemon.name} />

{#each data.pokemon.stats as stat}
    <div class="stat-row">
        <span>{stat.stat.name.toUpperCase()}</span>
        <span>{stat.base_stat}</span>
        <Progressbar progress={stat.base_stat.toString()} />
    </div>
{/each}

<style lang="scss">
	header,
	ul {
		display: flex;
	}

	header {
		align-items: baseline;
		justify-content: space-between;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;

		li {
			margin-block: 1rem;
		}
	}

    .stat-row {
        display: grid;
        grid-template-columns: 25% 10% 1fr;
        align-items: center;
    }
</style>
