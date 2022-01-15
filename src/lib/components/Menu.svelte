<script>
	import { fly } from 'svelte/transition';

	export let open;
</script>

{#if open}
	<div>
		{#each ['home', 'portfolio', 'blog'] as link, i}
			<a sveltekit:prefetch href={'/' + link} transition:fly={{ y: -15, delay: 50 * i }}>
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
		margin: 1rem;
		font-size: 1.2rem;
		line-height: normal;
		&:hover {
			color: var(--primary-color);
			text-shadow: 0 0 0.2rem var(--primary-light-color);
		}
	}
</style>
