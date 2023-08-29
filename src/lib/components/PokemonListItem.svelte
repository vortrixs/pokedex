<script lang="ts">
	import type { Pokemon } from 'pokenode-ts';
	import PokemonType from './PokemonType.svelte';
	import { getPokemonImage } from '$lib/helpers/Images';
	import ucfirst from '$lib/helpers/ucfirst';

	export let pokemon: Pokemon;

	let typesClassUnion = pokemon.types[0].type.name.toLowerCase();

	if (pokemon.types.length > 1) {
		typesClassUnion = typesClassUnion.concat(`-${pokemon.types[1].type.name.toLowerCase()}`);
	}
</script>

<div class={`pokemon pokemon--${typesClassUnion} pokemon-list__item`}>
	<div class="pokemon__details">
		<p class="pokemon__identifier">
			<a href={`/pokemon/${pokemon.id}`}>
				<span>#{pokemon.id.toString().padStart(3, '0')}</span>&nbsp;{ucfirst(pokemon.name)}
			</a>
		</p>
		<div class="pokemon__types">
			{#each pokemon.types as { type }}
				<PokemonType {type} />
			{/each}
		</div>
	</div>

	<figure class="pokemon__image">
		<img src={getPokemonImage(pokemon)} alt={pokemon.name} loading="lazy" />
	</figure>
</div>

<style lang="scss">
	@use '~styles/colors';
	@use '~styles/sizes';

	.pokemon {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));

		border-radius: 20px;
		margin: 10px;
		padding: 15px;

		@include colors.type-border-color-modifiers($width: 5px);
		@include colors.type-border-gradient-modifiers($width: 5px);

		&__image {
			display: flex;
			justify-content: center;
			margin: 0;

			> img {
				align-self: center;
				max-width: 100%;
				max-height: 100%;
			}
		}

		&__details {
			display: flex;
			flex-flow: column;

			@include sizes.mobile-only {
				justify-content: space-evenly;
			}
		}

		&__identifier {
			font-size: 1.3em;
			white-space: nowrap;
			margin: 10px 0;

			@include sizes.tablet {
				margin: 20px 0;
			}

			a {
				text-decoration: none;
				color: white;
			}

			span {
				font-weight: 600;
			}
		}

		&__types {
			display: flex;
			margin: 0 0 10px 0;

			@include sizes.tablet {
				flex-flow: column;
				padding: 10px 0;
				margin: 0;
			}
		}
	}
</style>
