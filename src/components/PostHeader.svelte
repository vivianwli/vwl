<script>
    import Tag from "./Tag.svelte";
    export let title;
    export let publishDate;
    export let editDate;
    export let tags;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<!--Title-->
<div>
    <h1>{title}</h1>
    <p>
        Published {publishDate} • Last edited {editDate}
    </p>
    <div class="buttons">
        {#each tags as tag}
            <Tag>{tag}</Tag>
        {/each}
    </div>
</div>