<script>
    import "../app.scss";
    export let post;
    import Tag from "./Tag.svelte";
</script>

<div class="card-container">
    <a href="/blog/{post.slug}">
        <img src={post.thumbnail} alt={post.title} />
        <div class="post-description">
            <h2>{post.title}</h2>
            <p class="date">
                {#if post.editDate !== undefined}
                    EDITED {post.editDate}
                {:else if post.publishDate !== undefined}
                    {post.publishDate}
                {/if}
            </p>
            {#each post.tags as tag}
                <Tag className="inactive">{tag.name}</Tag>
            {/each}
            <p>{post.summary}</p>
        </div>
    </a>
</div>

<style lang="scss">
    .card-container {
        background-color: var(--postcard-color);
        box-shadow: 0 0 1rem var(--secondary-subtle-color);
        img {
            width: 100%;
        }
        .date {
            line-height: 0.25;
            color: var(--secondary-color);
            font-weight: 600;
            font-style: italic; 
            font-size: 0.8rem;
        }
        .post-description {
            padding: 0 1rem 0.5rem 1rem;
        }
        h2 {
        font-size: 1.2rem;
        }
        a {
            text-decoration: none;
            color: var(--text-color);
        }
        p {
            font-size: 0.9rem;
        }
    }
</style>