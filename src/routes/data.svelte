<script>
	import { tickerUrl, headers } from '$lib/stores';

	async function getTrendingTickers() {
		const res = await fetch(tickerUrl, {
			method: 'GET',
			headers
		});

		const { finance } = await res.json();

		return finance.result[0].quotes;
	}
</script>

<main>
	<h1>Trending Tickers</h1>
	{#await getTrendingTickers()}
		<p>Getting Trending Quotes</p>
	{:then quotes}
		<table class="ticker">
			<thead>
				<th>Symbol</th>
				<th>Stock</th>
				<th>Quote Type</th>
				<th>Price</th>
				<th>Previous Close</th>
				<th>Change</th>
			</thead>
			<tbody>
				{#each quotes as quote}
					<tr>
						<td>{quote.symbol}</td>
						<td>{quote.shortName}</td>
						<td>{quote.quoteType}</td>
						<td>{quote.regularMarketPrice}</td>
						<td>{quote.regularMarketPreviousClose}</td>
						<td>{quote.regularMarketChange}%</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/await}
</main>

<style lang="scss">
	main {
		padding: 1rem;
	}
	table {
		outline: 2px solid $white;
		width: 100%;
	}

	thead {
		border-bottom: 2px solid $white;
		background-color: $base2;
	}

	tr:nth-of-type(even) {
		background-color: $base2;
	}
	th,
	tr {
		padding: 0.5rem;
		text-align: left;
	}
</style>
