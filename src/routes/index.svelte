<script>
	import YoutubeVideo from '$lib/components/YoutubeVideo.svelte';

	const urls = [
		'https://www.youtube.com/embed/WLCUxpv-TmA',
		'https://www.youtube.com/embed/lGhFX4Pwj6Y',
		'https://www.youtube.com/embed/W7IGTX_Peso',
		'https://www.youtube.com/embed/hEUALimWs7E'
	];
</script>

<main>
	<h1>Market Structure Trading</h1>

	<h2>Youtube Resources</h2>

	<div class="youtube">
		{#each urls as src}
			<YoutubeVideo {src} />
		{/each}
	</div>
</main>

<style lang="scss">
	main {
		padding: 2rem;
	}

	.youtube {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
	}
</style>
