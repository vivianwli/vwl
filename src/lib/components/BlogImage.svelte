<script>
	import '../../app.scss';
	export let src;
	export let caption = null;
	export let className;
</script>

<div class={className}>
	<img {src} alt={caption} />
	<div class="caption">{@html caption}</div>
</div>

<style lang="scss">
	img {
		width: 50%;
		display: block;
		margin: 2rem auto 1rem auto;
		box-shadow: 0 0 1.2rem 0.1rem var(--secondary-subtle-color);
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
	.gallery-img {
		img {
			width: 90%;
		}
		.caption {
			width: 90%;
		}
	}
	.half-img {
		img {
			width: 20rem;
			max-width: 90%;
		}
		.caption {
			width: 20rem;
			max-width: 90%;
		}
	}
</style>
