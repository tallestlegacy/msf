<script>
	import '../app.scss';
	import SideNav from '$lib/components/SideNav.svelte';
</script>

<div class="wrapper">
	<SideNav />
	<div class="slot-wrapper">
		<slot />
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: grid;
		grid-template-columns: auto 1fr;
		max-height: 100vh;
	}
	.slot-wrapper {
		height: 100vh;
		overflow: auto;
	}
</style>
