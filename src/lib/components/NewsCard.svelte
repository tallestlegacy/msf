<script>
	export let newsData = {};
</script>

<figure class="news-card">
	{#if newsData.content.thumbnail}
		<img src={newsData.content.thumbnail.resolutions[0].url} alt="" />
	{/if}
	<figcaption>
		<span class="title">{newsData.content.title}</span>
		<span>
			{newsData.content.provider.displayName},
			{#if newsData.content.clickThroughUrl}
				<a href={newsData.content.clickThroughUrl.url}>Read More</a>
			{/if}
		</span>
		<span class="date">
			{new Date(newsData.content.pubDate).toLocaleString()}
		</span>
	</figcaption>
</figure>

<style lang="scss">
	.news-card {
		background-color: $white;
		color: $base1;
	}

	figure {
		margin: 0;
	}

	figcaption {
		padding: 0.5rem;
		display: grid;
		gap: 0.5rem;
	}
	.title {
		font-weight: 600;
	}

	a {
		color: $base1;
		text-decoration: underline;
	}
</style>
