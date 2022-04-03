<script>
	import NavLink from '$lib/components/NavLink.svelte';
	import { AwardIcon, BarChart2Icon, AtSignIcon } from 'svelte-feather-icons';
</script>

<div class="wrapper">
	<nav>
		<NavLink href="/" pathname="Learn">
			<AwardIcon />
		</NavLink>
		<NavLink href="/data" pathname="Data">
			<BarChart2Icon />
		</NavLink>
		<NavLink href="/news" pathname="News">
			<AtSignIcon />
		</NavLink>
	</nav>
</div>

<style lang="scss">
	.wrapper {
		outline: solid 2px #fff3;
		background-color: $base2;
		height: 100%;
	}
	nav {
		display: grid;
		gap: 1rem;
		padding: 0.5rem;
		height: fit-content;
	}
</style>
