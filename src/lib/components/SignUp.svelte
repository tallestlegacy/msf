<script>
	import { profile, loggedIn } from '$lib/stores';
	let user = {
		fname: '',
		lname: '',
		password: '',
		_id: ''
	};

	const signUp = async () => {
		const jsonRes = await fetch('/login', {
			method: 'POST',
			body: JSON.stringify(user)
		});

		const res = await jsonRes.json();
		if (res.user._id) {
			profile.set(res);
			loggedIn.set(true);
		}
	};
</script>

<h1>Sign Up</h1>
<form on:submit|preventDefault={signUp}>
	<div class="inputs">
		<label for="fname">First Name</label>
		<input type="text" placeholder="John" bind:value={user.fname} required />
		<label for="lname">Last Name</label>
		<input type="text" placeholder="Doe" bind:value={user.lname} required />
		<label for="email">Email</label>
		<input type="email" placeholder="john@doe" bind:value={user._id} required />
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
