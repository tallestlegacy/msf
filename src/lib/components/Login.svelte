<script>
	import SignIn from '$lib/components/SignIn.svelte';
	import SignUp from '$lib/components/SignUp.svelte';
	import { ArrowRightIcon } from 'svelte-feather-icons';

	let hasAccount = false;
	$: msg = hasAccount ? 'Not Signed up yet?' : 'Already have an account';
</script>

<main>
	<div class="login">
		{#if hasAccount}
			<SignIn />
		{:else}
			<SignUp />
		{/if}

		<button
			on:click={() => {
				hasAccount = !hasAccount;
			}}
		>
			{msg}
			<ArrowRightIcon />
		</button>
	</div>
</main>

<style lang="scss">
	button {
		display: grid;
		grid-template-columns: auto 20px;
		align-items: center;
		gap: 1rem;

		background-color: $base2;
		border: none;
		outline: solid 1px #fff3;
		color: #fff3;
		cursor: pointer;

		padding: 0.5rem;
		border-radius: 4px;
		width: fit-content;
	}
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login {
		width: fit-content;
		max-width: 800px;
		background-color: $base2;
		border-radius: 8px;
		padding: 1rem;
		transition: 0.2s ease;
	}
</style>
