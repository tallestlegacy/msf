<script>
	let user = {
		email: '',
		password: ''
	};

	const signIn = async () => {
		const res = await fetch('/login', {
			method: 'GET',
			body: JSON.stringify(user)
		});

		console.log(await res.json());
	};
</script>

<h1>Sign Up</h1>
<form>
	<div class="inputs">
		<label for="email">Email</label>
		<input type="email" placeholder="john@doe.com" bind:value={user.email} required />
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
