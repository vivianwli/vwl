<script>
    import "../app.css";
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<div class="header-container">
    <div class="header">
        <nav>
            <a href=".">home</a>
            <a href="/portfolio">portfolio</a>
            <a href="/blog">blog</a>
        </nav>
        <div class="dark-switch">
            <ion-icon name="moon-outline"></ion-icon>
        </div>
    </div>
</div>

<slot />

<style>
    .header-container {
        position: fixed;
    }
    .header {
        display: grid;
        grid-template-columns: min-content 1fr min-content;
    }
    .header .dark-switch {
        grid-column-start: 3;
        color: var(--secondary-color);
        font-size: 2rem;
        padding: 1rem;
    }
    nav {
        padding: 1rem;
    }
    a {
        display: block;
        text-decoration: none;
        color: var(--secondary-color);
        margin: 1rem;
        font-size: 1.2rem;
    }
</style>