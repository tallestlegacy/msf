<script>
	import { profile, loggedIn } from '$lib/stores';
	let user = {
		_id: '',
		password: ''
	};

	const signIn = async () => {
		const res = await fetch('/login/signin', {
			method: 'POST',
			body: JSON.stringify(user)
		});

		const response = await res.json();

		console.log(response);

		if (response.status === 200) {
			profile.set(response.user);
			loggedIn.set(true);
		} else {
			alert('Invalid Email or Password');
		}
	};
</script>

<h1>Sign In</h1>
<form on:submit|preventDefault={signIn}>
	<div class="inputs">
		<label for="email">Email</label>
		<input type="email" placeholder="john@doe.com" bind:value={user._id} required />
		<label for="">Password</label>
		<input
			type="password"
			placeholder="Super Secret Password"
			bind:value={user.password}
			required
		/>
	</div>
	<button type="submit"> Submit </button>
</form>

<style lang="scss">
	h1 {
		color: $primary;
	}
</style>
