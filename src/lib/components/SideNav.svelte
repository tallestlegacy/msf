<script>
	import NavLink from '$lib/components/NavLink.svelte';
</script>

<div class="wrapper">
	<nav>
		<NavLink href="/" pathname="Learn" />
		<NavLink href="/data" pathname="Data" />
		<NavLink href="/news" pathname="News" />
	</nav>
</div>

<style>
	.wrapper {
		outline: solid 2px #fff9;
	}
	nav {
		display: grid;
		gap: 1rem;
		padding: 0.5rem;
		height: fit-content;
	}
</style>
