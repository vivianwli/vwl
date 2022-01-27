<script>
	import Tag from '$lib/components/Tag.svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiMail from 'svelte-icons-pack/fi/FiMail';
	import FiLinkedin from 'svelte-icons-pack/fi/FiLinkedin';

	import traderJoes from '$lib/assets/trader-joes-big.png?webp';
	import oatte from '$lib/assets/oatte.png?webp';
	import hackscIG from '$lib/assets/hacksc-ig.png?h=600&webp';
	import climateduIG from '$lib/assets/climatedu-ig.png?h=600&webp';
	import marketFermentation from '$lib/assets/market-fermentation-2.png?webp';
	import blobs from '$lib/assets/blobs-portfolio.png?webp';
	import iy8 from '$lib/assets/iy8.png?webp';
	import oracle from '$lib/assets/blair-oracle.png?h=600&webp';
	import climateduSite from '$lib/assets/climatedu-website.png?h=600&webp';

	import { page } from '$app/stores';

	function clear() {
		for (const key in journalismTags) {
			journalismTags[key] = false;
		}
		for (const key in designTags) {
			designTags[key] = false;
		}
	}
	function noneSelected() {
		return Object.keys(designTags).filter((k) => designTags[k]).length === 0;
	}

	let designPos;
	let journalismPos;

	let tab = $page.url.searchParams.get('tab');
	if (tab === 'journalism') {
		designPos = 'bottom';
		journalismPos = 'top';
	} else {
		designPos = 'top';
		journalismPos = 'bottom';
	}

	let designTags = { '3D': false, 'social-media': false, illustration: false, 'ui-ux': false };
	let journalismTags = { print: false, video: false };

	let journalismItems = [
		{
			link: 'blog/sustainable-textiles',
			title: 'An antidote to greenwashing',
			thumbnail: 'haute-greenwashing.png',
			info: 'DEC 3 2021 • HAUTE MAGAZINE',
			summary:
				"An in-depth feature on textiles and their impact in the context of sustainable fashion. Written for Haute Magazine's Fall 2021 issue, On the Edge.",
			tags: ['print']
		},
		{
			link: 'https://www.nytimes.com/2020/05/07/learning/an-unexpected-dinner-guest-marine-plastic-pollution-hides-a-neurological-toxin-in-our-food.html',
			title:
				'An unexpected dinner guest: marine plastic pollution hides a neurological toxin in our food',
			thumbnail: 'nyt-stem-writing.jpg',
			info: 'MAY 7 2020 • THE NEW YORK TIMES',
			summary:
				'One of eight winning essays (among 1,618 entries) from the New York Times Learning Network\'s STEM Writing Contest. Also published on <a href="https://phys.org/news/2019-09-marine-plastic-pollution-neurological-toxin.html">Phys.org</a>.',
			tags: ['print']
		},
		{
			link: 'https://msmagazine.com/2019/12/16/inside-the-feminist-tech-jamboree-helping-girls-break-barriers-in-stem/',
			title: 'Inside the feminist tech jamboree helping girls break barriers in STEM',
			thumbnail: 'technica.jpg',
			info: 'DEC 16 2019 • MS. MAGAZINE',
			summary:
				'Behind-the-scenes of Technica, an all-women and non-binary hackathon hosted annually at the University of Maryland, College Park. Published as a part of "The Future is Ms."',
			tags: ['print']
		},
		{
			link: 'http://climatetracker.org/youths-reporting-on-youths/',
			title: "Tracking the UN's youth climate delegates",
			thumbnail: 'climate-tracker.jpg',
			info: 'OCT 2 2019 • CLIMATE TRACKER',
			summary:
				'Profiles of international leaders at the UN Youth Action Summit alongside the global climate strikes on September 20, 2019. Written with Yamila Frej and Amogh Dimri during a three-day mentorship with Climate Tracker.',
			tags: ['print']
		},
		{
			link: 'https://silverchips.mbhs.edu/content/raising-the-standard-for-mcps-in-ongoing-contract-negotiations-32318/',
			title: 'Raising the standard for MCPS in ongoing contract negotiations',
			thumbnail: 'teachers.jfif',
			info: 'NOV 13 2019 • SILVER CHIPS ONLINE',
			summary:
				"Coverage of teachers' responses to the teacher strikes in Chicago, especially in light of recent contract re-negotiations for Mongomery County Public Schools.",
			tags: ['print']
		},
		{
			link: 'https://youtu.be/UmOasRlMuXs',
			title: 'The hidden link between bats, COVID-19, and climate change',
			thumbnail: 'breakthrough.png',
			info: 'JUN 25 2020 • BREAKTHROUGH JUNIOR CHALLENGE',
			summary:
				'A synthesized explanation of yet another reason climate change should matter to us—the potential normalcy of pandemics via zoonotic diseases.',
			tags: ['video']
		}
	];
</script>

<svelte:head>
	<title>portfolio</title>
	<meta property="og:title" content="vivian li's portfolio" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/thumbnails/vwl-site.png" />
	<meta property="og:url" content="https://www.vivianwli.com/portfolio" />
</svelte:head>

<div class="content">
	<h1>portfolio</h1>
	<div class="tabs">
		<div class="tab-selector">
			<div
				class="design-selector"
				on:click={() => {
					journalismPos = 'bottom';
					designPos = 'top';
					console.log('design');
				}}
			/>
			<div
				class="journalism-selector"
				on:click={() => {
					journalismPos = 'top';
					designPos = 'bottom';
					console.log('journo');
				}}
			/>
		</div>
		<div class="design-tab tab {designPos}">
			<h2 class="tab-label">design</h2>
			<svg viewBox="0 0 263 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"
				/>
			</svg>
			<div class="tab-page">
				<div class="tab-page-content">
					<div class="buttons">
						{#each Object.keys(designTags).filter((k) => designTags[k]) as tag}
							<div
								class:selectedTag={designTags[tag]}
								on:click={() => {
									designTags[tag] = !designTags[tag];
								}}
							>
								<Tag className="filter">{tag}</Tag>
							</div>
						{/each}
						{#each Object.keys(designTags).filter((k) => !designTags[k]) as tag}
							<div
								class:selectedTag={designTags[tag]}
								on:click={() => {
									designTags[tag] = !designTags[tag];
								}}
							>
								<Tag className="filter">{tag}</Tag>
							</div>
						{/each}
						<div on:click={() => clear()}>
							<Tag className="clear">clear all</Tag>
						</div>
					</div>
					<div class="content-container">
						{#if noneSelected() || designTags['3D']}
							<div class="threed content-row">
								<div class="img-container">
									<div class="description">
										<h2>low poly Trader Joe's</h2>
										<p>
											This low-poly scene was my very first project in Blender. I love grocery
											stores and the holidays (especially Christmas), so it's a perfect combination!
										</p>
									</div>
									<img src={traderJoes} alt="low poly Trader Joe's" />
								</div>
								<div class="img-container">
									<div class="description">
										<h2>oatte oat milk lattes</h2>
										<p>
											I used Adobe Illustrator and Dimension to create this imaginary product.
											Featuring almond black tea, red bean, matcha, and cinnamon cold brew flavors.
										</p>
									</div>
									<img src={oatte} alt="oat milk latte product mock-up" />
								</div>
							</div>
						{/if}
						{#if noneSelected() || designTags['social-media']}
							<div class="social-media content-row">
								<div class="img-container">
									<div class="description">
										<h2>HackSC instagram</h2>
										<p>
											Brand identity and Instagram assets for HackSC 2022. Neon gradients, glow
											effects, and blobs. More <a href="https://instagram.com/hackscofficial"
												>here</a
											>. Made in Figma!
										</p>
									</div>
									<img src={hackscIG} alt="HackSC Instagram posts" />
								</div>
								<div class="img-container">
									<div class="description">
										<h2>climatedu instagram</h2>
										<p>
											Themed doodles for climatedu's weekly Infographic posts. Illustrations in
											Adobe Fresco on iPad, assembled in Figma. More <a
												href="https://instagram.com/climateduteam">here</a
											>.
										</p>
									</div>
									<img src={climateduIG} alt="climatedu Instagram posts" />
								</div>
							</div>
						{/if}
						{#if noneSelected() || designTags['illustration']}
							<div class="illustration content-row">
								<div class="img-container">
									<div class="description">
										<h2>market ferment-<br />ation</h2>
										<p>Movie poster! Adobe Illustrator and InDesign.</p>
									</div>
									<img src={marketFermentation} alt="market fermentation mock movie poster" />
								</div>
								<div class="img-container">
									<div class="description">
										<h2>fruit blob emojis</h2>
										<p>
											Custom emojis made for Discord, illustrated in Adobe Fresco! See more of them <a
												href="blog/fruit-blobs">here</a
											>.
										</p>
									</div>
									<img src={blobs} alt="Fruit blobs for Discord" />
								</div>
								<div class="img-container">
									<div class="description">
										<h2>iy8 logo</h2>
										<p>
											Sample logo (very not official) for Cohort 8 of IYA (note the 8!). Illustrated
											in Adobe Fresco.
										</p>
									</div>
									<img src={iy8} alt="Iovine and Young Academy Cohort 8 sample logo art" />
								</div>
							</div>
						{/if}
						{#if noneSelected() || designTags['ui-ux']}
							<div class="ui-ux content-row">
								<div class="img-container">
									<div class="description">
										<h2>ORACLE of Blair</h2>
										<p>
											Web and graphic design for our senior class model of the 2020 Presidential
											election. Designed in Figma. More <a href="https://polistat.mbhs.edu">here</a
											>.
										</p>
									</div>
									<img src={oracle} alt="Logo header for the ORACLE of Blair" />
								</div>
								<div class="img-container">
									<div class="description">
										<h2>climatedu</h2>
										<p>
											Website platform design for climatedu.org, an online climate course for middle
											and high school students. Designed in Figma. More <a
												href="https://climatedu.org">here</a
											>.
										</p>
									</div>
									<img src={climateduSite} alt="Website home page for climatedu.org" />
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
		<div class="journalism-tab tab {journalismPos}">
			<h2 class="tab-label">journalism</h2>
			<svg viewBox="0 0 263 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"
				/>
			</svg>
			<div class="tab-page">
				<div class="tab-page-content">
					<div class="buttons">
						{#each Object.keys(journalismTags).filter((k) => journalismTags[k]) as tag}
							<div
								class:selectedTag={journalismTags[tag]}
								on:click={() => {
									journalismTags[tag] = !journalismTags[tag];
								}}
							>
								<Tag className="filter">{tag}</Tag>
							</div>
						{/each}
						{#each Object.keys(journalismTags).filter((k) => !journalismTags[k]) as tag}
							<div
								class:selectedTag={journalismTags[tag]}
								on:click={() => {
									journalismTags[tag] = !journalismTags[tag];
								}}
							>
								<Tag className="filter">{tag}</Tag>
							</div>
						{/each}
						<div on:click={() => clear()}>
							<Tag className="clear">clear all</Tag>
						</div>
					</div>
					<div class="content-container">
						{#if Object.keys(journalismTags).filter((k) => journalismTags[k]).length === 0}
							{#each journalismItems as article}
								<ArticleCard {article} />
							{/each}
						{:else}
							{#each journalismItems as article}
								{#each article.tags as tag}
									{#if journalismTags[tag]}
										<ArticleCard {article} />
									{/if}
								{/each}
							{/each}
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="outro">
		<h2>don't be shy...</h2>
		<div class="icons">
			<a sveltekit:prefetch href="https://www.linkedin.com/in/vivian-li-25b424183/"
				><Icon src={FiLinkedin} className="custom-icon media-icon" /></a
			>
			<a sveltekit:prefetch href="mailto: vwli@usc.edu"
				><Icon src={FiMail} className="custom-icon media-icon" /></a
			>
		</div>
	</div>
</div>

<style lang="scss">
	h1 {
		margin-bottom: 2rem;
		@media screen and (max-width: 32rem) {
			padding: 0 5vw;
		}
	}
	svg {
		filter: drop-shadow(0 0 1rem var(--secondary-subtle-color));
		grid-row: 1 / span 2;
		height: 100%;
		grid-column: 2;
		@media screen and (max-width: 32rem) {
			height: 90%;
		}
	}
	.tab-page {
		background-color: var(--bg-color);
		grid-row: 2 / -1;
		grid-column: 1 / -1;
		z-index: 1;
		height: 100%;
	}
	.top {
		z-index: 2;
		svg {
			fill: var(--bg-color);
		}
	}
	.bottom {
		.tab-page {
			box-shadow: 0 0 1rem var(--secondary-subtle-color);
		}
		svg {
			fill: var(--bg-shadow-color);
		}
		.tab-page-content {
			display: none;
		}
	}
	.tabs {
		display: grid;
		max-width: 100%;
		width: 100%;
		.tab-selector {
			grid-column: 1;
			grid-row: 1;
			z-index: 3;
			width: 100%;
			height: 2.5rem;
			display: grid;
			grid-template-columns: 2.5rem 11rem 11rem auto;
			@media screen and (max-width: 50rem) {
				grid-template-columns: 0rem 11rem 11rem auto;
			}
			@media screen and (max-width: 32rem) {
				grid-template-columns: 0rem 9rem 9rem auto;
			}
			.design-selector {
				grid-column: 2;
			}
			.journalism-selector {
				grid-column: 3;
			}
		}
		.tab {
			grid-column: 1;
			grid-row: 1;
			display: grid;
			grid-template-rows: 2.5rem 2.5rem auto;
			@media screen and (max-width: 32rem) {
				grid-template-rows: 2rem 2.5rem auto;
			}
			.tab-label {
				font-size: 1rem;
				margin: 0;
				grid-row: 1;
				grid-column: 2;
				z-index: 2;
				justify-self: center;
				align-self: center;
			}
		}
		.design-tab {
			grid-template-columns: 2.5rem 12rem auto;
			@media screen and (max-width: 50rem) {
				grid-template-columns: 0 12rem auto;
			}
			@media screen and (max-width: 32rem) {
				grid-template-columns: 0 10rem auto;
			}
		}
		.journalism-tab {
			grid-template-columns: 12.5rem 12rem auto;
			@media screen and (max-width: 50rem) {
				grid-template-columns: 10rem 12rem auto;
			}
			@media screen and (max-width: 32rem) {
				grid-template-columns: 8rem 10rem auto;
			}
		}
	}
	.tab-page-content {
		margin: 2rem;
	}
	.selectedTag :global(.filter) {
		background-color: var(--highlight-color);
		box-shadow: 0 0 0.2rem var(--primary-light-color);
		color: var(--primary-color);
		border: 2.5px solid var(--primary-color);
	}
	.content-row {
		margin: 1.5rem 0;
		display: flex;
		gap: 1.5rem;
		.img-container {
			display: grid;
			.description {
				display: none;
				h2 {
					background-image: none;
					background-color: var(--lighter);
					font-size: 1.2rem;
					margin-bottom: 0.5rem;
				}
				p {
					margin: 0;
				}
				background-color: rgba(22, 22, 26, 0.7);
				color: var(--lighter);
				font-size: 0.85rem;
				grid-column: 1;
				grid-row: 1;
				z-index: 3;
				padding: 1.5rem;
				align-content: end;
			}
			&:hover .description {
				display: grid;
			}
		}
		img {
			box-shadow: 0 0 1rem var(--secondary-subtle-color);
			max-width: 100%;
			object-fit: scale-down;
			grid-column: 1;
			grid-row: 1;
		}
		@media screen and (max-width: 50rem) {
			flex-direction: column;
		}
	}
	.outro {
		display: flex;
		flex-direction: column;
		align-items: center;
		h2 {
			background-color: var(--primary-color);
			background-image: none;
			font-size: 1.75rem;
			margin: 3rem 0 0 0;
		}
		.icons {
			display: flex;
			gap: 0.5rem;
		}
		:global(.media-icon) {
			font-size: 2.5rem !important;
			color: var(--primary-color);
			&:hover {
				color: var(--primary-selected-color);
				cursor: pointer;
			}
		}
	}
</style>
