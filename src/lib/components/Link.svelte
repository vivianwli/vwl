<script>
	import '../../app.scss';
	export let link = '/';
</script>

<a
	sveltekit:prefetch
	sveltekit:noscroll
	href={link}
	on:click={() =>
		setTimeout(() => {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}, 600)}
>
	<slot />
</a>

<style>
	a {
		width: fit-content;
		border: 2.5px solid var(--primary-color);
		background-color: var(--transparent);
		border-radius: 30px;
		color: var(--primary-color);
		font-family: 'Epilogue';
		font-weight: 600;
		font-size: 0.8rem;
		text-decoration: none;
		padding: 0.4rem 0.7rem;
		cursor: pointer;
		white-space: nowrap;
	}
	a:hover {
		background-color: var(--highlight-color);
		box-shadow: 0 0 0.2rem var(--primary-light-color);
	}
</style>
