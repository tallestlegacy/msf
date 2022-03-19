<script>
	import NewsCard from '$lib/components/NewsCard.svelte';
	import { headers, newsUrl, news } from '$lib/stores';

	let mounted = false;
	async function getStream() {
		if (mounted) {
			return $news;
		}
		const res = await fetch(newsUrl, {
			method: 'POST',
			headers
		});

		const { data } = await res.json();
		mounted = true;
		return data.main.stream;
	}
</script>

<main>
	{#await getStream()}
		<h1>Loading News</h1>
	{:then stream}
		{#each stream as article}
			<NewsCard newsData={article} />
		{/each}
	{/await}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		padding: 2rem;
		gap: 2rem;
	}
</style>
