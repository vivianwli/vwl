<script>
    import "../app.css";
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

    /* SWITCH ICON ON HOVER a.k.a. someday
    
    function hoverSwitch(event) {
        themeIconId = (themeIconId + 1) % 2;
    }*/
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
            <ion-icon bind:this={darkIcon} name={themeIcons[themeIconId]} on:click={switchTheme}></ion-icon>
        </div>
    </div>
</div>

<slot />

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
</style>