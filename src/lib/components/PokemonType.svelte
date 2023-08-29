<script lang="ts">
	import { getTypeImage } from '$lib/helpers/Images';
	import ucfirst from '$lib/helpers/ucfirst';
	import type { PokemonType } from 'pokenode-ts';

	export let type: PokemonType['type'];
</script>

<figure class="type">
	<picture class={`type__icon icon icon--${type.name.toLowerCase()}`}>
		<img class="type__image" src={getTypeImage(type)} alt={type.name} loading='lazy' />
	</picture>
	<figcaption class="type__name">{ucfirst(type.name)}</figcaption>
</figure>

<style lang="scss">
	@use '~styles/sizes';
	@use '~styles/colors';

	.type {
		display: flex;
		margin: 0 20px 0 0;

		@include sizes.tablet {
			margin: 10px 0;
			padding-left: 10px;
		}

		&__icon {
			border-radius: 100%;
			height: 48px;
			width: 48px;
		}

		&__image {
			height: 60%;
			width: 60%;
			margin: 20%;
		}

		&__name {
			display: none;
			align-self: center;
			margin-left: 15px;
			font-weight: 600;
			font-size: 14px;

			@include sizes.tablet {
				display: block;
			}
		}
	}

	.icon {
		border-radius: 100%;
		margin: 0;

		@include colors.type-background-color-modifiers;
		@include colors.type-box-shadow-color-modifiers;
	}
</style>
