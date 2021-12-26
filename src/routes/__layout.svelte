<script>
    import "../app.css";
    import { onMount } from 'svelte';

    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FiMoon from "svelte-icons-pack/fi/FiMoon";
    let themes = ["moon", "filled-moon"];
    let darkTheme = 1;
    let darkIcon;

    onMount (() => {
        if (darkTheme === 0) {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    });

    function switchTheme(event) {
        darkTheme = (darkTheme + 1) % 2;
        if (darkTheme === 0) {
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
                    <div on:click={switchTheme}>
                        <Icon bind:this={darkIcon} src={FiMoon} className={"custom-icon " + themes[darkTheme]}/>
                    </div>
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
    .dark-switch {
        grid-column-start: 3;
        padding: 1rem;
        padding-right: 2rem;
    }
    :global(.custom-icon) {
        color: var(--secondary-color);
        font-size: 2rem;
        opacity: 75%;
    }
    :global(.filled-moon) {
        fill: var(--secondary-color);
    }
    :global(.filled-moon):hover {
        fill: var(--secondary-selected-color);
    }
    :global(.custom-icon):hover {
        color: var(--secondary-selected-color);
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