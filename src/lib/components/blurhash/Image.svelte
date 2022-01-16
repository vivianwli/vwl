<script>
	import { onMount, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let src;
	export let alt;
	export let width;
	export let height;
	export let fadeDuration = 500;
	let thisImage;
	onMount(() => {
		thisImage.onload = () => {
			thisImage.style.opacity = 1;
			dispatch('imageLoaded', { fadeDuration });
		};
	});
</script>

<img
	bind:this={thisImage}
	{src}
	{alt}
	{width}
	{height}
	style="position: absolute;top: 0;left: 0;opacity: 0;transition: opacity {fadeDuration}ms;"
	loading="lazy"
	decoding="async"
/>

<style>
	img {
		height: auto;
		object-fit: cover;
	}
</style>
