<script>
    import "../../app.scss";
    export let article;
    import Tag from '$lib/components/Tag.svelte';
</script>

<a sveltekit:prefetch href={article.link}>
    <div class="card-container">
        <img src={"/thumbnails/" + article.thumbnail} alt={article.title} />
        <div class="post-description">
            <h2>{article.title}</h2>
            <p class="date">{article.info}</p>
            <div class="buttons">
                {#each article.tags as tag}
                    <Tag className="inactive">{tag}</Tag>
                {/each}
            </div>
            <p>{@html article.summary}</p>
        </div>
    </div>
</a>

<style lang="scss">
    .card-container {
        background-color: var(--postcard-color);
        box-shadow: 0 0 1rem var(--secondary-subtle-color);
        display: flex;
        margin: 1.5rem 0;
        img {
            width: 30%;
            object-fit: cover;
        }
        .date {
            font-size: 0.8rem;
        }
        .post-description {
            padding: 1.5rem;
            align-self: center;
        }
        h2 {
            font-size: 1.2rem;
            margin-top: 0;
        }
        p {
            font-size: 0.9rem;
            margin-bottom: 0;
        }
    }
    a {
        text-decoration: none;
        color: var(--text-color);
    }
    .buttons {
        padding-top: 1rem;
    }
</style>