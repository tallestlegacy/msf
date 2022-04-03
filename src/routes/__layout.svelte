<script>
	import '../app.scss';
	import { loggedIn } from '$lib/stores';
	import Login from '$lib/components/Login.svelte';
	import SideNav from '$lib/components/SideNav.svelte';
</script>

<div class="wrapper">
	{#if $loggedIn}
		<SideNav />
		<div class="slot-wrapper">
			<slot />
		</div>
	{:else}
		<Login />
	{/if}
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
