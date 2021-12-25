<script>
    import "../css/app.css";

    let themeIcons = ["moon-outline", "moon"];
    let themeIconId = 0;
    let darkIcon;

    function switchTheme(event) {
        themeIconId = (themeIconId + 1) % 2;
        if (themeIconId === 0) {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<div class="scroll-bar-wrap">
    <div class="scroll-box">
        <div class="header-container">
            <div class="header">
                <nav>
                    <a href=".">home</a>
                    <a href="/portfolio">portfolio</a>
                    <a href="/blog">blog</a>
                </nav>
                <div class="dark-switch">
                    <ion-icon bind:this={darkIcon} name={themeIcons[themeIconId]} on:click={switchTheme}></ion-icon>
                </div>
            </div>
        </div>

        <slot />
    </div>
    <div class="cover-bar"></div>
</div>

<style>
    .header-container {
        position: fixed;
        width: 100%;
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
        padding-right: 2rem;
    }
    .header .dark-switch ion-icon:hover {
        color: var(--primary-light-color);
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
        line-height: normal;
    }
    a:hover {
        color: var(--primary-color);
        text-shadow: 0 0 0.2rem var(--primary-light-color);
    }
</style>