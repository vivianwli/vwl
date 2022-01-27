<script>
	import Tag from './Tag.svelte';
	export let title;
	export let publishDate;
	export let editDate;
	export let tags;
	export let thumbnail;
	export let slug;
	export let summary;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:image" content={'/thumbnails/' + thumbnail} />
	<meta property="og:url" content={'https://www.vivianwli.com/blog/' + slug} />
	<meta property="og:description" content={summary} />
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

<style lang="scss">
	.container {
		margin-bottom: 3rem;
	}
	h1 {
		line-height: 3rem;
		@media screen and (max-width: 32rem) {
			font-size: 2.5rem;
		}
	}
</style>
