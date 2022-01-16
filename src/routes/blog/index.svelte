<script context="module">
	const posts = import.meta.glob('./*.svx');
	let body = [];
	for (const path in posts) {
		body.push(posts[path]().then(({ metadata }) => metadata));
	}
	/** @type {import('@sveltejs/kit').Load} */
	export async function load() {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import PostCard from '$lib/components/PostCard.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import EmailInput from '$lib/components/EmailInput.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import { flip } from 'svelte/animate';
	export let posts;

	const options = {
		duration: 10
	};

	let selectedTags = {};

	function clear() {
		for (const key in selectedTags) {
			selectedTags[key] = false;
		}
	}

	for (const post of posts) {
		if (post.editDate !== undefined) {
			post.dateObj = new Date(post.editDate);
		} else {
			post.dateObj = new Date(post.publishDate);
		}
		for (const postTag of post.tags) {
			selectedTags[postTag.name] = false;
		}
	}
	posts.sort((a, b) => b.dateObj - a.dateObj);
</script>

<svelte:head>
	<title>blog</title>
</svelte:head>

<div class="content">
	<SvelteToast />
	<h1>musings</h1>
	<p>A humble abode for my ideas, experiments, and reflections. Welcome!</p>
	<div class="buttons">
		{#each Object.keys(selectedTags).filter((k) => selectedTags[k]) as tag}
			<div
				class:selectedTag={selectedTags[tag]}
				on:click={() => {
					selectedTags[tag] = !selectedTags[tag];
				}}
			>
				<Tag className="filter">{tag}</Tag>
			</div>
		{/each}
		{#each Object.keys(selectedTags).filter((k) => !selectedTags[k]) as tag}
			<div
				class:selectedTag={selectedTags[tag]}
				on:click={() => {
					selectedTags[tag] = !selectedTags[tag];
				}}
			>
				<Tag className="filter">{tag}</Tag>
			</div>
		{/each}
		<div on:click={() => clear()}>
			<Tag className="clear">clear all</Tag>
		</div>
	</div>
	<div class="post-container">
		{#if Object.keys(selectedTags).filter((k) => selectedTags[k]).length === 0}
			{#each posts as post}
				<PostCard {post} />
			{/each}
		{:else}
			{#each posts as post}
				{#each post.tags as tag}
					{#if selectedTags[tag.name]}
						<PostCard {post} />
					{/if}
				{/each}
			{/each}
		{/if}
	</div>
	<p>Want reminders when I post? Feel free to subscribe:</p>
	<EmailInput />
</div>

<style>
	.post-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		grid-gap: 2rem;
		padding: 3rem 0;
	}

	.selectedTag :global(.filter) {
		background-color: var(--highlight-color);
		box-shadow: 0 0 0.2rem var(--primary-light-color);
		color: var(--primary-color);
		border: 2.5px solid var(--primary-color);
	}
</style>
