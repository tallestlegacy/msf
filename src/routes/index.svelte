<script>
	import YoutubeVideo from '$lib/components/YoutubeVideo.svelte';

	const urls = [
		'https://www.youtube.com/watch?v=WLCUxpv-TmA',
		'https://www.youtube.com/watch?v=lGhFX4Pwj6Y',
		'https://www.youtube.com/watch?v=W7IGTX_Peso',
		'https://www.youtube.com/watch?v=hEUALimWs7E'
	];
</script>

<main>
	<h1>Market Structure Trading</h1>

	<h2>Youtube Resources</h2>

	<div class="youtube" />
	{#each urls as src}
		<YoutubeVideo {src} />
	{/each}
</main>

<style lang="scss">
	main {
		padding: 2rem;
	}
</style>
