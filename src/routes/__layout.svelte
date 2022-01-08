<script>
    import "../app.scss";
    import { onMount } from 'svelte';

    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { browser } from '$app/env';
    import { toast } from '@zerodevx/svelte-toast';

    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FiMoon from "svelte-icons-pack/fi/FiMoon";
    let themes = ["moon", "filled-moon"];
    let darkTheme;

    onMount (() => {
        const savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
        darkTheme = savedTheme ?? 'dark'
        darkTheme === 'light' ? document.documentElement.setAttribute('data-theme', 'light') : document.documentElement.setAttribute('data-theme', 'dark');
    });

    function switchTheme(event) {
        darkTheme === 'light' ? darkTheme = 'dark' : darkTheme = 'light';
        document.documentElement.setAttribute('data-theme', darkTheme);
        localStorage.setItem('theme', darkTheme);
    }

    let emailSubmitted = $page.query.get('emailSubmitted');
    if (emailSubmitted) {
        toast.push('email submitted!');
        toast.pop((i) => i.target !== 'new');
        browser && goto($page.path, { replaceState: true });
        emailSubmitted = false;
    }
</script>

<div class="scroll-bar-wrap">
    <div class="scroll-box">
        <div class="header">
            <nav>
                <a sveltekit:prefetch href="/">home</a>
                <a sveltekit:prefetch href="/portfolio">portfolio</a>
                <a sveltekit:prefetch href="/blog">blog</a>
            </nav>
        </div>
        <div class="dark-switch">
            <div on:click={switchTheme}>
                <Icon src={FiMoon} className={"custom-icon " + themes[darkTheme]}/>
            </div>
        </div>
        <div class="page-content">
            <slot />
        </div>
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
        .scroll-box {
            position: relative;

            .page-content {
                padding: 15vh 15vw;
            }
        }
    }
    
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;

        span {
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
    }

    @keyframes move {
        100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
        }
    }   

    .header {
        position: fixed;
        width: fit-content;
    }
    
    .dark-switch {
        position: fixed;
        right: 0;
        top: 0;
        padding: 2rem;
    }
    :global(.custom-icon) {
        color: var(--secondary-color);
        font-size: 2rem;
        opacity: 75%;
        &:hover {
            color: var(--secondary-selected-color);
            cursor: pointer;
        }
    }
    :global(.filled-moon) {
        fill: var(--secondary-color);
        &:hover {
            fill: var(--secondary-selected-color);
        }
    }

    nav {
        padding: 1rem;

        a {
            display: block;
            text-decoration: none;
            color: var(--secondary-color);
            margin: 1rem;
            font-size: 1.2rem;
            line-height: normal;
            &:hover {
                color: var(--primary-color);
                text-shadow: 0 0 0.2rem var(--primary-light-color);
            }
        }
    }
</style>