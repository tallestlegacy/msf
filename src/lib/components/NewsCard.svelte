<script>
	export let newsData = {};

	$: image = newsData.content.thumbnail.resolutions.slice(-1)[0];
</script>

<figure class="news-card">
	<img src={image.url} alt="" />
	<figcaption>
		<span class="title">{newsData.content.title}</span>
		<span>
			{newsData.content.provider.displayName},
			<a href={newsData.content.clickThroughUrl}>Read More</a>
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
