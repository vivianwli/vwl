<script>
	import { fly } from 'svelte/transition';
	import { navigating } from '$app/stores';

	export let open;

	$: if ($navigating) open = false;
</script>

{#if open}
	<div>
		{#each ['home', 'portfolio', 'blog'] as link, i}
			<a
				sveltekit:prefetch
				sveltekit:noscroll
				href={'/' + link}
				transition:fly={{ y: -15, delay: 50 * i }}
				on:click={() =>
					setTimeout(() => {
						document.body.scrollTop = document.documentElement.scrollTop = 0;
					}, 600)}
			>
				{link}
			</a>
		{/each}
	</div>
{/if}

<style lang="scss">
	div {
		padding-left: 1rem;
		padding-bottom: 2rem;
	}
	a {
		display: block;
		text-decoration: none;
		color: var(--secondary-color);
		margin: 1.25rem;
		font-size: 1.25em;
		line-height: normal;
		@media (hover: hover) {
			&:hover {
				color: var(--primary-color);
				text-shadow: 0 0 0.2rem var(--primary-light-color);
			}
		}
	}
</style>
