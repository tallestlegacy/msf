<script>
	let user = {
		fname: '',
		lname: '',
		username: '',
		password: '',
		email: ''
	};

	const signUp = async () => {
		const res = await fetch('/login', {
			method: 'POST',
			body: JSON.stringify(user)
		});

		console.log(await res.json());
	};
</script>

<h1>Sign Up</h1>
<form on:submit|preventDefault={signUp}>
	<div class="inputs">
		<label for="fname">First Name</label>
		<input type="text" placeholder="John" bind:value={user.fname} required />
		<label for="lname">Last Name</label>
		<input type="text" placeholder="Doe" bind:value={user.lname} required />
		<label for="username">Username</label>
		<input type="text" placeholder="john_doe" bind:value={user.username} required />
		<label for="email">Email</label>
		<input type="email" placeholder="john@doe" bind:value={user.email} required />
		<label for="">Password</label>
		<input type="password" placeholder="Super Secret Password" bind:value={user.fname} required />
	</div>
	<button type="submit"> Submit </button>
</form>

<style lang="scss">
	h1 {
		color: $primary;
	}
</style>
