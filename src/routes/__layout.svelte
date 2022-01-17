<script>
	import '../app.scss';
	import { onMount } from 'svelte';

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { navigating } from '$app/stores';
	import { browser } from '$app/env';
	import { toast } from '@zerodevx/svelte-toast';
	import { fly } from 'svelte/transition';

	import Hamburger from 'svelte-hamburgers';
	import Menu from '$lib/components/Menu.svelte';
	let open;

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiMoon from 'svelte-icons-pack/fi/FiMoon';
	let themes = ['moon', 'filled-moon'];
	let darkTheme;
	let opened = 'closed';
	$: if ($navigating) opened = 'closed';

	onMount(() => {
		const savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
		darkTheme = savedTheme ?? 'light';
		darkTheme === 'light'
			? document.documentElement.setAttribute('data-theme', 'light')
			: document.documentElement.setAttribute('data-theme', 'dark');
	});

	function switchTheme(event) {
		darkTheme === 'light' ? (darkTheme = 'dark') : (darkTheme = 'light');
		document.documentElement.setAttribute('data-theme', darkTheme);
		localStorage.setItem('theme', darkTheme);
	}
	function openClose() {
		opened === 'closed' ? (opened = 'open') : (opened = 'closed');
		console.log(opened);
	}

	let emailSubmitted = $page.url.searchParams.get('emailSubmitted');
	if (emailSubmitted) {
		toast.push('email submitted!');
		toast.pop((i) => i.target !== 'new');
		browser && goto($page.url.pathName, { replaceState: true });
		emailSubmitted = false;
	}
	let portfolio = $page.url.pathName === '/portfolio' ? 'portfolio' : '';
</script>

<div class="scroll-bar-wrap">
	<div class="scroll-box">
		<div class="header">
			<div class="mobile-nav">
				<Hamburger
					bind:open
					on:click={openClose}
					type="squeeze"
					--color="var(--secondary-color)"
					--padding="2rem"
				/>
				<Menu bind:open />
				{#if opened === 'open'}
					<div transition:fly={{ x: -200, duration: 500 }} class="open" />
				{/if}
			</div>
			<nav>
				<a sveltekit:prefetch href="/">home</a>
				<a sveltekit:prefetch href="/portfolio">portfolio</a>
				<a sveltekit:prefetch href="/blog">blog</a>
			</nav>
		</div>
		<div class="dark-switch">
			<div on:click={switchTheme}>
				<Icon src={FiMoon} className={'custom-icon ' + themes[darkTheme]} />
			</div>
		</div>
		<div class="page-content {portfolio}">
			<slot />
		</div>
	</div>
	<div class="background">
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
		<span />
	</div>
</div>

<style lang="scss">
	$animationDuration: 60s;
	$amount: 20;

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
			$colors: (var(--blob-1), var(--blob-2));
			$sizes: (10rem, 13rem, 16rem);
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
		z-index: 4;
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
	.open {
		position: absolute;
		top: 0;
		background-color: var(--bg-color);
		box-shadow: 0 0 12rem var(--secondary-color);
		height: 100vh;
		width: 15rem;
		z-index: -1;
	}
</style>
