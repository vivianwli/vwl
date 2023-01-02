<script>
	import '../../app.scss';
	export let columns;
	export let className;
	export let caption = null;
</script>

<div class={'gallery ' + className} style="--columns: {columns}">
	<slot />
</div>
{#if caption}
	<div class="caption">{@html caption}</div>
{/if}

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		@media screen and (max-width: 50rem) {
			display: block;
		}
	}
	.half-width {
		margin: auto;
		width: 50%;
		@media screen and (max-width: 50rem) {
			width: 90%;
		}
	}

	.caption {
		text-align: center;
		display: block;
		width: 50%;
		font-size: 0.9rem;
		margin: 1rem auto 2rem auto;
		color: var(--secondary-selected-color);
		font-style: italic;
		@media screen and (max-width: 50rem) {
			width: 90%;
		}
	}
</style>
