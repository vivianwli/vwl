<script>
	// component imports
	import Link from '$lib/components/Link.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	// icon imports
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiMail from 'svelte-icons-pack/fi/FiMail';
	import FiGithub from 'svelte-icons-pack/fi/FiGithub';
	import FiLinkedin from 'svelte-icons-pack/fi/FiLinkedin';
	import FiInstagram from 'svelte-icons-pack/fi/FiInstagram';

	//image imports
	import vivian from '$lib/assets/vivian-aug2025.png';
	import design1 from '$lib/assets/market-fermentation-2.png?w=400&webp';
	import design2 from '$lib/assets/trader-joes-big.png?w=600&webp';
	import code1 from '$lib/assets/research-2.png?w=400&webp';
	import code2 from '$lib/assets/intro-code.svg?w=400&webp';
	import code3 from '$lib/assets/research-1.png?w=400&webp';
	import write1 from '$lib/assets/greenwashing-1.png?w=500&webp';
	import write2 from '$lib/assets/viv-nytimes.png?w=400&webp';
	import write3 from '$lib/assets/greenwashing-2.png?w=500&webp';
</script>

<svelte:head>
	<title>home</title>
	<meta property="og:title" content="vivian li's website" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/thumbnails/vwl-site.png" />
	<meta property="og:url" content="https://www.vivianwli.com" />
</svelte:head>

<div class="content">
	<!-- toast that only shows after user subscribes to the newsletter -->
	<SvelteToast />
	<!-- introduction! -->
	<div class="section">
		<div class="mini-section intro">
			<img class="avatar" src={vivian} alt="viv" />
			<div class="text-right">
				<h1>hello! i'm vivian li.</h1>
				<p>
					I’m a product designer and UX engineer based in New York City. <b
						>I love to use design and data to tell stories in beautiful ways</b
					>, especially about human computer interaction, social connection, and urban
					sustainability. Welcome to my playground!
				</p>
				<Link
					link="https://drive.google.com/file/d/1aSM2-1e58h34HcEf8wKtLJuGWerz8NhD/view?usp=sharing"
					>resume</Link
				>
			</div>
		</div>
		<Arrow />
	</div>
	<!-- the things that i do -->
	<div class="section things">
		<!-- design -->
		<div class="mini-section">
			<div class="text-left">
				<h1>i design...</h1>
				<p>
					I craft visually impactful and delightful experiences, from user interfaces to illustrated
					cards to low-poly 3D worlds. I'm always looking for the small beauties of daily life.
				</p>
				<Link link="/portfolio">my design portfolio</Link>
			</div>
			<div class="image-stack image-right">
				<div class="image-stack-item design-top">
					<img src={design1} alt="market fermentation poster design" />
				</div>
				<div class="image-stack-item design-bottom">
					<img src={design2} alt="low poly trader joes" />
				</div>
			</div>
		</div>
		<!-- code -->
		<div class="mini-section">
			<div class="image-stack image-left">
				<div class="image-stack-item code-top">
					<img src={code1} alt="my senior research project" />
				</div>
				<div class="image-stack-item code-middle">
					<img src={code2} alt="code-ception of this homepage" />
				</div>
				<div class="image-stack-item code-bottom">
					<img src={code3} alt="my senior research project" />
				</div>
			</div>
			<div class="text-right">
				<h1>i code...</h1>
				<p>
					I bring my visual ideas to life, using web and app development to propel data stories and
					other digital experiences. I'm also a Svelte lover (here's <a
						href="/blog/made-with-svelte-kit">how I coded this site</a
					>)!
				</p>
				<div class="buttons">
					<Link link="https://github.com/teacupkittie">my github</Link>
					<Link link="/blog">my blog</Link>
				</div>
			</div>
		</div>
		<!-- write -->
		<div class="mini-section">
			<div class="text-left">
				<h1>i write...</h1>
				<p>
					A picture may be worth a thousand words, but I have a longstanding respect for distilling
					concepts to their core components and sharing them effectively. Reading and writing lives
					at the forefront of how I communicate ideas.
				</p>
				<div class="buttons">
					<Link link="/portfolio?tab=projects">my writing portfolio</Link>
					<Link link="/blog">my blog</Link>
				</div>
			</div>
			<div class="image-stack image-right">
				<div class="image-stack-item write-top">
					<img src={write1} alt="an article i wrote on greenwashing" />
				</div>
				<div class="image-stack-item write-middle">
					<img src={write2} alt="an article i wrote on marine plastic pollution" />
				</div>
				<div class="image-stack-item write-bottom">
					<img src={write3} alt="an article i wrote on greenwashing" />
				</div>
			</div>
		</div>
		<Arrow />
	</div>
	<!-- outro! -->
	<div class="section outro">
		<h1>i create.</h1>
		<!-- contact -->
		<div class="media-icon-container">
			<a sveltekit:prefetch href="mailto:vivianwli.design@gmail.com" target="_blank">
				<Icon src={FiMail} className="custom-icon media-icon" />
			</a>
			<a sveltekit:prefetch href="https://github.com/vivianwli" target="_blank">
				<Icon src={FiGithub} className="custom-icon media-icon" />
			</a>
			<a sveltekit:prefetch href="https://www.linkedin.com/in/vivianwli/" target="_blank">
				<Icon src={FiLinkedin} className="custom-icon media-icon" />
			</a>
			<a sveltekit:prefetch href="https://instagram.com/mclovivian" target="_blank">
				<Icon src={FiInstagram} className="custom-icon media-icon" />
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	.section {
		scroll-snap-align: start;
	}

	/* title page style */
	.logo {
		width: 40vw;
		margin: auto;
		padding-top: 10vh;
		margin-bottom: 10vh;
		@media screen and (max-width: 50rem) {
			width: 50vw;
		}
	}
	.logo img {
		width: 100%;
		margin: auto;
	}

	/* style for each little image + text section! */
	.mini-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-top: 10vh;

		/* split into two rows for small screen sizes */
		@media screen and (max-width: 50rem) {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}

		/* glow + resizing for every image in these mini sections */
		img {
			box-shadow: 0 0 1.2rem 0.1rem var(--secondary-subtle-color);
			max-width: 100%;
		}
	}

	/* more space in between each thing in the things section (thing: design, code, write) */
	.things .mini-section {
		margin: 20vh 0vw 10vh 0vw;
	}

	/* unique style for my profile picture */
	.mini-section .avatar {
		width: 75%;
		max-width: 20rem;
		margin: auto;
		border-radius: 100%;
		@media screen and (max-width: 50rem) {
			width: 100%;
		}
	}

	/* padding + centering for my left- and right-justified variants */
	.text-right {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-left: 10%;
		@media screen and (max-width: 50rem) {
			margin: auto;
		}
	}
	.text-left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		text-align: right;
		margin-right: 10%;
		@media screen and (max-width: 50rem) {
			margin: auto;
		}
	}
	.image-right {
		margin-left: 10%;

		@media screen and (max-width: 50rem) {
			order: -1;
			margin: auto;
		}
	}
	.image-left {
		margin-right: 10%;
		@media screen and (max-width: 50rem) {
			margin: auto;
		}
	}

	/* intro custom styles */
	.intro {
		/* giving enough standalone slide space (so it looks good with scroll-snapping!) */
		padding-top: 5vh;

		.text-right {
			margin-left: 0;
		}

		h1 {
			margin-top: 0;
			line-height: 3rem;
		}
	}

	/*image stack style */
	.image-stack {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		align-content: center;
		position: relative;
		padding-top: 2em;
		max-width: 25rem;
	}

	/* positioning for each individual picture */
	/* "design" section */
	.design-top {
		grid-column: 8 / -1;
		grid-row: 1;
		z-index: 1;
		transform: rotate(12deg);
	}
	.design-bottom {
		grid-column: 1 / span 8;
		grid-row: 1;
		padding-top: 20%;
		transform: rotate(-10deg);
	}

	/* "code" section */
	.code-top {
		grid-column: 7 / -1;
		grid-row: 1;
		z-index: 2;
		padding-top: 20%;
		transform: rotate(10deg);
	}
	.code-middle {
		grid-column: 1 / span 7;
		grid-row: 1;
		z-index: 1;
		padding-top: 75%;
	}
	.code-bottom {
		grid-column: 3 / span 6;
		grid-row: 1;
		transform: rotate(-5deg);
	}

	/* "write" section */
	.write-top {
		grid-column: 4 / -1;
		grid-row: 1;
		z-index: 2;
		padding-top: 40%;
		transform: rotate(-15deg);
	}
	.write-middle {
		grid-column: 1 / span 6;
		grid-row: 1;
		z-index: 1;
		transform: rotate(-5deg);
	}
	.write-bottom {
		grid-column: 4 / -1;
		grid-row: 1;
		padding-top: 7.5%;
		transform: rotate(8deg);
	}

	/* outro style */
	.outro {
		height: 70svh;
		padding-top: 10svh;
		display: flex;
		gap: 12px;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		/* custom headings */
		h2 {
			background-color: var(--primary-color);
			background-image: none;
			font-size: 1.5rem;
		}

		.outro-content {
			display: grid;
			grid-template-columns: 1fr 7rem 1.3fr;

			/* split into two roles for smaller screen sizes */
			@media screen and (max-width: 50rem) {
				display: flex;
				flex-direction: column;
			}
		}

		/* divider styles */
		span {
			height: 80%;
			width: 4px;
			background-color: var(--secondary-color);
			border-radius: 99px;
			opacity: 50%;
			margin: auto;
		}

		.about {
			/* we want this section to show up first on smaller screens */
			@media screen and (max-width: 50rem) {
				order: -1;
			}
		}

		/* media icon styles */
		.media-icon-container {
			display: flex;
			gap: 6px;
			justify-content: center;
		}

		:global(.media-icon) {
			font-size: 1.5rem !important;
		}

		// hiding two placeholder icons that allow the grid to be right-justified
		:global(.hidden) {
			visibility: hidden;
		}
	}
</style>
