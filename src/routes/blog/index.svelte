<script context="module">
    const posts = import.meta.glob('./posts/*.svx');
    let body = [];
    for (const path in posts) {
        body.push(posts[path]().then(({metadata}) => metadata));
    }
    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ page, fetch }) {
        const posts = await Promise.all(body);
        console.log(posts);        
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
    import EmailInput from '../../components/EmailInput.svelte';
    export let posts;

    let allTags = [];

    for (const post of posts) {
        if (post.editDate !== undefined) {
                post.dateObj = new Date(post.editDate);
        }
        else {
            post.dateObj = new Date(post.publishDate);
        }
        for (const postTag of post.tags) {
            if (!allTags.includes(postTag.name)) {
                allTags.push(postTag.name);
            }
        }
    }
    posts.sort((a, b) => b.dateObj - a.dateObj);
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
    <div class="post-container">
        {#each posts as post}
            <PostCard {post} />
        {/each}
    </div>
    <p>Want reminders when I post? Feel free to subscribe:</p>
    <EmailInput/>
</div>

<style>
    .post-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        padding: 3rem 0;
    }
    
</style>