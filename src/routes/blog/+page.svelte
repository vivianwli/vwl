<script>
	export let data;

	// component imports
	import PostCard from '$lib/components/PostCard.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import EmailInput from '$lib/components/EmailInput.svelte';

	// toast import
	import { SvelteToast } from '@zerodevx/svelte-toast';

	// no selected tags by default
	let selectedTags = {};

	// clear all selected tags
	function clear() {
		for (const key in selectedTags) {
			selectedTags[key] = false;
		}
	}

	for (const post of data.posts) {
		// create a date object for each post
		if (post !== undefined) {
			if (post.editDate !== undefined) {
				post.dateObj = new Date(post.editDate);
			} else {
				post.dateObj = new Date(post.publishDate);
			}

			// add tags from all posts
			for (const postTag of post.tags) {
				selectedTags[postTag.name] = false;
			}
		}
	}
	// sort posts by date
	data.posts.sort((a, b) => b.dateObj - a.dateObj);
</script>

<svelte:head>
	<title>blog</title>
	<meta property="og:title" content="vivian li's blog" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/thumbnails/vwl-site.png" />
	<meta property="og:url" content="https://www.vivianwli.com/blog" />
</svelte:head>

<div class="content">
	<!-- toast that only shows after user subscribes to the newsletter -->
	<SvelteToast />
	<h1>musings</h1>
	<p>A humble abode for my ideas, experiments, and reflections. Welcome!</p>

	<!-- tag filters -->
	<div class="buttons">
		<!-- display selected tags first -->
		{#each Object.keys(selectedTags).filter((k) => selectedTags[k]) as tag}
			<div
				on:click={() => {
					selectedTags[tag] = !selectedTags[tag];
				}}
			>
				<Tag className={selectedTags[tag] ? 'selected' : ''}>{tag}</Tag>
			</div>
		{/each}
		<!-- display inactive tags -->
		{#each Object.keys(selectedTags).filter((k) => !selectedTags[k]) as tag}
			<div
				on:click={() => {
					selectedTags[tag] = !selectedTags[tag];
				}}
			>
				<Tag className={selectedTags[tag] ? 'selected' : ''}>{tag}</Tag>
			</div>
		{/each}
		<!-- clear all button -->
		<div on:click={() => clear()}>
			<Tag className="clear">clear all</Tag>
		</div>

		<!-- posts! -->
	</div>
	<div class="post-container">
		<!-- if no tags have been selected, display all posts -->
		{#if Object.keys(selectedTags).filter((k) => selectedTags[k]).length === 0}
			{#each data.posts as post}
				{#if post !== undefined && post.hidden !== true}
					<PostCard {post} />
				{/if}
			{/each}
			<!-- if at least one tag has been selected, only display posts with matching tags -->
		{:else}
			{#each data.posts as post}
				{#each post.tags as tag}
					{#if selectedTags[tag.name]}
						{#if post !== undefined && post.hidden !== true}
							<PostCard {post} />
						{/if}
					{/if}
				{/each}
			{/each}
		{/if}
	</div>

	<!-- subscribe :) -->
	<p>Want reminders when I post? Feel free to subscribe:</p>
	<EmailInput />
</div>

<style>
	/* responsive grid layout for posts */
	.post-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		grid-gap: 2rem;
		padding: 3rem 0;
	}
</style>
