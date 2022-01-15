<script>
	import '../../app.scss';
	import BlogImage from './BlogImage.svelte';
	export let image;
	export let caption;
</script>

<div class="wrapper">
	<div class="text">
		<slot />
	</div>
	<BlogImage src={image} {caption} className="half-img" />
</div>

<style lang="scss">
	.wrapper {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 1fr;
		background-color: var(--highlight-color);
		align-items: center;
		box-shadow: 0 0 1.2rem 0.1rem var(--secondary-subtle-color);
		margin: 4rem -2rem;
		padding: 2rem;
		@media screen and (max-width: 50rem) {
			display: block;
		}
	}
</style>
