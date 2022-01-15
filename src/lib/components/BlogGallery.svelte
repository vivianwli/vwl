<script>
	import '../../app.scss';
	export let columns;
</script>

<div class="gallery" style="--columns: {columns}">
	<slot />
</div>

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		@media screen and (max-width: 50rem) {
			display: block;
		}
	}
</style>
