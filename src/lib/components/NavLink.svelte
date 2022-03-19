<script>
	export let href;
	export let pathname = 'Root';
	import { page } from '$app/stores';

	$: selected = $page.url.pathname === href;
</script>

<a {href} class={selected ? 'selected' : ''}>
	{pathname}
</a>

<style lang="scss">
	a {
		background-color: $base2;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
	}

	.selected {
		background-color: $primary;
		color: $base1;
	}
</style>
