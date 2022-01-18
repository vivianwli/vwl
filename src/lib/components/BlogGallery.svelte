<script>
	import '../../app.scss';
	export let columns;
	export let className;
</script>

<div class={'gallery ' + className} style="--columns: {columns}">
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
	.half-width {
		margin: auto;
		width: 50%;
		@media screen and (max-width: 50rem) {
			width: 90%;
		}
	}
</style>
