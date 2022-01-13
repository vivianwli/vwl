<script>
	import Tag from './Tag.svelte';
	export let title;
	export let publishDate;
	export let editDate;
	export let tags;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<!--Title-->
<div class="container">
	<h1>{title}</h1>
	<p class="date">
		PUBLISHED {publishDate}
		{#if editDate}
			• LAST EDITED {editDate}
		{/if}
	</p>
	<div class="buttons">
		{#each tags as tag}
			<Tag className="inactive">{tag.name}</Tag>
		{/each}
	</div>
</div>

<style>
	.container {
		margin-bottom: 3rem;
	}
</style>
