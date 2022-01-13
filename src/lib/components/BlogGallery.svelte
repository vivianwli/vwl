<script>
	import '../../app.scss';
	export let columns;
</script>

<div class="gallery" style="--columns: {columns}">
	<slot />
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
	}
</style>
