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
            <p class="date">{post.publishDate}</p>
            {#each post.tags as tag}
                <Tag className="inactive">{tag.name}</Tag>
            {/each}
            <!-- {#each post.tags as tag}
                {tag}
                <Tag>{tag.name}</Tag>
            {/each} --> 
            <p>{post.summary}</p>
        </div>
    </a>
</div>

<style lang="scss">
    h2 {
        font-size: 1.25rem;
    }
    a {
        text-decoration: none;
        color: var(--text-color);
    }
    .card-container {
        background-color: var(--postcard-color);
        box-shadow: 0 0 1rem var(--secondary-color);
        img {
            width: 100%;
        }
        .date {
            line-height: 0.25;
            color: var(--secondary-color);
            font-weight: 600;
            font-style: italic; 
        }
        .post-description {
            padding: 0 1rem 0.5rem 1rem;
        }
    }
</style>