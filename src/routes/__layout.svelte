<script>
    import "../app.scss";
    import { onMount } from 'svelte';

    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FiMoon from "svelte-icons-pack/fi/FiMoon";
    let themes = ["moon", "filled-moon"];
    let darkTheme = 0;
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
    <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>

<style lang="scss">
    $animationDuration: 60s;
    $amount: 20;

    .scroll-bar-wrap {
        position: relative;
        width: 100%;
    }
    .scroll-box {
        position: relative;
    }
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }

    .background span {
        backface-visibility: hidden;
        position: absolute;
        animation-name: move;
        animation-duration: $animationDuration;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        $colors: (
            var(--blob-1),
            var(--blob-2)
        );
        $sizes: (
            10rem,
            13rem,
            16rem,
        );
        @for $i from 1 through $amount {
            &:nth-child(#{$i}) {
            color: nth($colors, random(length($colors)));
            top: random(100) * 1%;
            left: random(100) * 1%;
            animation-duration: calc(random($animationDuration * 10) / 10) * 1s + 10s;
            animation-delay: calc(random(($animationDuration + 10s) * 10) / 10) * -1s;
            transform-origin: (random(50) - 25) * 1vw (random(50) - 25) * 1vh;
            $particleSize: nth($sizes, random(length($sizes)));
            width: $particleSize;
            height: $particleSize;
            border-radius: $particleSize;
            $blurRadius: (random() + 0.5) * $particleSize * 0.5;
            $x: if(random() > 0.5, -1, 1);
            box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor;
            }
        }
    }

    @keyframes move {
        100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
        }
    }   
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
        padding: 2rem;
    }
    :global(.custom-icon) {
        color: var(--secondary-color);
        font-size: 2rem;
        opacity: 75%;
        cursor: pointer;
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