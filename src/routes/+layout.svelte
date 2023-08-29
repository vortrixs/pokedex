<script>
	import '../app.postcss';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		padding: 1rem;
		max-width: 64rem;
		box-sizing: border-box;
	}
</style>
