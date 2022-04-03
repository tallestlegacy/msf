<script>
	export let href;
	export let pathname = 'Root';
	import { page } from '$app/stores';

	$: selected = $page.url.pathname === href;
</script>

<a {href} class={selected ? 'selected' : ''}>
	<slot />{pathname}
</a>

<style lang="scss">
	a {
		background-color: $base1;
		padding: 0.5rem 1rem;
		border-radius: 0.3rem;
		color: #fff7;
		display: grid;
		grid-template-columns: 1.2rem 1fr;
		gap: 0.5rem;
		align-items: center;
	}

	.selected {
		background-color: $primary;
		color: $base1;
	}
</style>
