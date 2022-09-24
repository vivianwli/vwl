<script context="module">
	// this runs before the layout is rendered, setting key to the URL path
	export const load = async ({ url }) => ({
		props: {
			key: url.pathname
		}
	});
</script>

<script>
	// stylesheet import
	import '../app.scss';

	// Svelte imports
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { navigating } from '$app/stores';
	import { browser } from '$app/env';

	// page transition imports
	import { fly } from 'svelte/transition';
	import PageTransition from '$lib/components/PageTransition.svelte';

	// page transition variable keeping track of path
	export let key;

	// toast import
	import { toast } from '@zerodevx/svelte-toast';

	import Background from '$lib/components/Background.svelte';

	// hamburger menu imports
	import Hamburger from 'svelte-hamburgers';
	import Menu from '$lib/components/Menu.svelte';

	// binding variable for hamburger menu status
	let open;

	// icon imports
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiMoon from 'svelte-icons-pack/fi/FiMoon';

	// loading color theme
	let savedTheme;
	let darkTheme;
	if (browser) {
		savedTheme = browser && localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
		darkTheme = savedTheme ?? 'light';
		darkTheme === 'light'
			? document.documentElement.setAttribute('data-theme', 'light')
			: document.documentElement.setAttribute('data-theme', 'dark');
	}

	// switching color theme
	function switchTheme(event) {
		darkTheme === 'light' ? (darkTheme = 'dark') : (darkTheme = 'light');
		document.documentElement.setAttribute('data-theme', darkTheme);
		localStorage.setItem('theme', darkTheme);
		console.log(darkTheme);
	}

	// hamburger menu logic
	let opened = 'closed'; // menu is closed by default
	$: if ($navigating) opened = 'closed'; // when navigating, menu closes

	// hamburger menu toggle
	function openClose() {
		opened === 'closed' ? (opened = 'open') : (opened = 'closed');
		console.log(opened);
	}

	// redirect and reset URL if they've subscribed to the email newsletter - designed to make Buttondown's redirect feel seamless
	let emailSubmitted = $page.url.searchParams.get('emailSubmitted');
	if (emailSubmitted) {
		toast.push('email submitted!');
		toast.pop((i) => i.target !== 'new');
		browser && goto('/blog', { replaceState: true });
		emailSubmitted = false;
	}

	// determine if we're on the portfolio page - custom styles located in app.scss
	let portfolio = $page.url.pathname === '/portfolio' ? 'portfolio' : '';
</script>

<svelte:head>
	<!-- loading saved color theme in head to avoid a flash of light theme when page first loads -->
	<script>
		savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
		darkTheme = savedTheme ?? 'light';
		darkTheme === 'light'
			? document.documentElement.setAttribute('data-theme', 'light')
			: document.documentElement.setAttribute('data-theme', 'dark');
	</script>
</svelte:head>

<div class="scroll-bar-wrap">
	<div class="scroll-box">
		<div class="header">
			<!-- mobile nav bar -->
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

			<!-- nav bar -->
			<nav>
				<a
					sveltekit:prefetch
					sveltekit:noscroll
					href="/"
					on:click={() =>
						setTimeout(() => {
							document.body.scrollTop = document.documentElement.scrollTop = 0;
						}, 600)}>home</a
				>
				<a
					sveltekit:prefetch
					sveltekit:noscroll
					href="/portfolio"
					on:click={() =>
						setTimeout(() => {
							document.body.scrollTop = document.documentElement.scrollTop = 0;
						}, 600)}>portfolio</a
				>
				<a
					sveltekit:prefetch
					sveltekit:noscroll
					href="/blog"
					on:click={() =>
						setTimeout(() => {
							document.body.scrollTop = document.documentElement.scrollTop = 0;
						}, 600)}>blog</a
				>
			</nav>
		</div>

		<!-- dark mode toggle switch -->
		<div class="dark-switch">
			<div on:click={switchTheme}>
				<Icon src={FiMoon} className={'custom-icon ' + darkTheme} />
			</div>
		</div>

		<!-- page content -->
		<div class="page-content {portfolio}">
			<!-- when the path (key) changes, a page transition is triggered -->
			<PageTransition refresh={key}>
				<slot />
			</PageTransition>
		</div>
	</div>
	<Background />
</div>

<style lang="scss">
	/* navbar placement styles */
	.header {
		position: fixed;
		width: fit-content;
		z-index: 4;
	}

	/* frequently used icon styles */
	:global(.custom-icon) {
		color: var(--secondary-color);
		font-size: 2rem;
		opacity: 75%;
		&:hover {
			color: var(--secondary-selected-color);
			cursor: pointer;
		}
	}

	/* arrow icon style - primarily on index page but potentially on others as well */
	:global(.arrow) {
		opacity: 50%;
		width: 100%;
		margin: auto;
		margin-top: 15vh;
		margin-bottom: 10vh;
		&:hover {
			color: var(--secondary-color);
			cursor: default;
		}
	}

	/* dark mode toggle styles */
	:global(.dark) {
		fill: var(--secondary-color);
		&:hover {
			fill: var(--secondary-selected-color);
		}
	}
	.dark-switch {
		position: fixed;
		right: 0;
		top: 0;
		padding: 2rem;
	}

	/* hamburger menu placement styles */
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
