<script context="module">
    const posts = import.meta.glob('./posts/*.svx')
    let body = []
    for (const path in posts) {
        body.push(posts[path]().then(({metadata}) => metadata))
    }
    /**
       * @type {import('@sveltejs/kit').Load}
       */
    export async function load({ page, fetch }) {
        const posts = await Promise.all(body)
        return {
            props: {
                posts
            }
        };
    }
</script>

<script>
    import PostCard from '../../components/PostCard.svelte';
    import Tag from '../../components/Tag.svelte';
    export let posts;
    let allTags = ['tag-1', 'tag-2']
</script>

<svelte:head>
  <title>blog</title>
</svelte:head>

<div class="content">
    <h1>musings</h1>
    <p>A humble abode for my ideas, experiments, and reflections. Welcome!</p>
    <div class="buttons">
        {#each allTags as tag}
            <Tag className="filter">{tag}</Tag>
        {/each}
        <Tag className="clear">
            clear all
        </Tag>
    </div>
</div>

<style>
</style>