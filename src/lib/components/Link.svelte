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
		transition: 0.3s ease;
		width: fit-content;
		border: 1px solid var(--transparent);
		background-color: var(--highlight-color);
		box-shadow: 0 0 0.4rem var(--transparent);
		border-radius: 30px;
		color: var(--primary-selected-color);
		font-family: 'Space Mono';
		font-weight: 600;
		font-size: 0.8rem;
		padding: 0.4rem 0.7rem;
		cursor: pointer;
		white-space: nowrap;
		text-decoration: none;
	}
	@media (hover: hover) {
		a:hover {
			border: 1px solid var(--primary-button-border-color);
			background-color: var(--primary-button-hover-color);
		}
	}
</style>
