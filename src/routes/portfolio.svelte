<script>
	// component imports
	import Tag from '$lib/components/Tag.svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';

	// icon imports
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiMail from 'svelte-icons-pack/fi/FiMail';
	import FiLinkedin from 'svelte-icons-pack/fi/FiLinkedin';

	// image imports
	import traderJoes from '$lib/assets/trader-joes-big.png?webp';
	import oatte from '$lib/assets/oatte.png?webp';
	import hackscIG from '$lib/assets/hacksc-ig.png?webp';
	import climateduIG from '$lib/assets/climatedu-ig.png?webp';
	import marketFermentation from '$lib/assets/market-fermentation-2.png?webp';
	import blobs from '$lib/assets/blobs-portfolio.png?webp';
	import iy8 from '$lib/assets/iy8.png?webp';
	import b1c from '$lib/assets/b1c-surfing.png?webp';
	import goodJob from '$lib/assets/good-job.png?webp';
	import makerTee from '$lib/assets/nyt-maker-2022.png?webp';
	import sirensMerch from '$lib/assets/sirens-merch.png?webp';
	import oracle from '$lib/assets/blair-oracle.png?webp';
	import climateduSite from '$lib/assets/climatedu-website.png?webp';

	// svelte imports
	import { page } from '$app/stores';

	// for tooltip: in the case that x and y position aren't set, the cursor should fall back on a position that is out of view -- in this case, (-500, -500)
	let m = { x: -500, y: -500 };

	// logic to determine which tab is active or "on top"
	let designPos;
	let writingPos;

	let tab = $page.url.searchParams.get('tab'); // based on url params, i.e. "?tab=writing"
	if (tab === 'writing') {
		designPos = 'bottom';
		writingPos = 'top';
	} else {
		designPos = 'top';
		writingPos = 'bottom';
	}

	let designTags = {};
	let writingTags = {};

	// reset all filtering tags to be inactive
	function clear() {
		for (const key in writingTags) {
			writingTags[key] = false;
		}
		for (const key in designTags) {
			designTags[key] = false;
		}
	}

	// check to confirm that no tags have been selected
	function noneSelected() {
		return Object.keys(designTags).filter((k) => designTags[k]).length === 0;
	}

	// writing card info
	let writingItems = [
		{
			link: 'https://bamboo.vivianwli.com',
			title: 'Bamboo housing',
			thumbnail: 'bamboo.png',
			info: 'JUL 1 2022',
			summary: 'A visual review of bamboo construction for residential use. How is bamboo currently used in the built environment, and how can it flourish in the future?',
			tags: ["research", "visualization"]
		},
		{
			link: 'blog/sustainable-textiles',
			title: 'An antidote to greenwashing',
			thumbnail: 'haute-greenwashing.png',
			info: 'DEC 3 2021 • HAUTE MAGAZINE',
			summary:
				"An in-depth feature on textiles and their impact in the context of sustainable fashion. Written for Haute Magazine's Fall 2021 issue, On the Edge.",
			tags: ["journalism"]
		},
		{
			link: 'https://drive.google.com/file/d/1rFpdk-Jk-Yu2RCvrqzmTKbINfGt8sUdt/view',
			title: 'Predicting COVID-19 cases via LSTM modeling with weather, mobility, and demographic data',
			thumbnail: 'covid-model.png',
			info: 'NOV 1 2020 • UMD INSTITUTE FOR RESEARCH IN ELECTRONICS AND APPLIED PHYSICS',
			summary: "A research project exploring the potential of applying machine learning (more specifically, an entity-aware long short term memory network) to COVID-19 case prediction.",
			tags: ["research"]
		},
		{
			link: 'https://youtu.be/UmOasRlMuXs',
			title: 'The hidden link between bats, COVID-19, and climate change',
			thumbnail: 'breakthrough.png',
			info: 'JUN 25 2020 • BREAKTHROUGH JUNIOR CHALLENGE',
			summary:
				'A synthesized explanation of yet another reason climate change should matter to us—the potential normalcy of pandemics via zoonotic diseases.',
			tags: ["educational", "video"]
		},
		{
			link: 'https://www.nytimes.com/2020/05/07/learning/an-unexpected-dinner-guest-marine-plastic-pollution-hides-a-neurological-toxin-in-our-food.html',
			title:
				'An unexpected dinner guest: marine plastic pollution hides a neurological toxin in our food',
			thumbnail: 'nyt-stem-writing.jpg',
			info: 'MAY 7 2020 • THE NEW YORK TIMES',
			summary:
				'One of eight winning essays (among 1,618 entries) from the New York Times Learning Network\'s STEM Writing Contest. Also published on <a href="https://phys.org/news/2019-09-marine-plastic-pollution-neurological-toxin.html">Phys.org</a>.',
			tags: ["journalism"]
		},
		{
			link: 'https://msmagazine.com/2019/12/16/inside-the-feminist-tech-jamboree-helping-girls-break-barriers-in-stem/',
			title: 'Inside the feminist tech jamboree helping girls break barriers in STEM',
			thumbnail: 'technica.jpg',
			info: 'DEC 16 2019 • MS. MAGAZINE',
			summary:
				'Behind-the-scenes of Technica, an all-women and non-binary hackathon hosted annually at the University of Maryland, College Park. Published as a part of "The Future is Ms."',
			tags: ["journalism"]
		},
		{
			link: 'http://climatetracker.org/youths-reporting-on-youths/',
			title: "Tracking the UN's youth climate delegates",
			thumbnail: 'climate-tracker.jpg',
			info: 'OCT 2 2019 • CLIMATE TRACKER',
			summary:
				'Profiles of international leaders at the UN Youth Action Summit alongside the global climate strikes on September 20, 2019. Written with Yamila Frej and Amogh Dimri during a three-day mentorship with Climate Tracker.',
			tags: ["journalism"]
		},
		{
			link: 'https://silverchips.mbhs.edu/content/raising-the-standard-for-mcps-in-ongoing-contract-negotiations-32318/',
			title: 'Raising the standard for MCPS in ongoing contract negotiations',
			thumbnail: 'teachers.jfif',
			info: 'NOV 13 2019 • SILVER CHIPS ONLINE',
			summary:
				"Coverage of teachers' responses to the teacher strikes in Chicago, especially in light of recent contract re-negotiations for Mongomery County Public Schools.",
			tags: ["journalism"]
		}
	];

	let designItems = [
		{
			tag: "3D",
			rows: [
				[
					{
						title: "low poly Trader Joe's",
						description: "This low-poly scene was my very first project in Blender. I love grocery stores and the holidays (especially Christmas), so it's a perfect combination!",
						src: traderJoes
					},
					{
						title: "oatte oat milk lattes",
						description: "I used Adobe Illustrator and Dimension to create this imaginary product, featuring almond black tea, red bean, matcha, and cinnamon cold brew flavors.",
						src: oatte
					},
				]
			]
		},
		{
			tag: "social-media",
			rows: [
				[
					{
						title: "HackSC Instagram",
						description: "Brand identity and Instagram assets for HackSC 2022. Neon gradients, glow effects, and blobs. Made in Figma!",
						link: "https://instagram.com/hackscofficial",
						src: hackscIG
					},
					{
						title: "climatedu Instagram",
						description: "Themed doodles for climatedu's weekly Infographic posts. Illustrations in Adobe Fresco on iPad, assembled in Figma.",
						link: "https://instagram.com/climateduteam",
						src: climateduIG
					}
				]
			]
		},
		{
			tag: "illustration",
			rows: [
				[
					{
						title: "Sirens merch graphic",
						description: "Matisse-inspired sweatshirt graphic design for Sirens A Cappella. Made in Figma and Adobe Fresco.",
						src: sirensMerch
					},
					{
						title: "fruit blob emojis",
						description: "Custom emojis made for Discord, illustrated in Adobe Fresco!",
						link: "blog/fruit-blobs",
						src: blobs
					},
					{
						title: "market fermentation",
						description: "Movie poster made in Adobe Illustrator and InDesign.",
						src: marketFermentation
					},
				],
				[
					{
						title: "b1c shirt graphic",
						description: "Merch graphic for cyberscurity team \"b1c\", centered around the theme of making waves.",
						src: b1c
					},
					{
						title: "good job album cover",
						description: "Album cover design for Sirens A Cappella's release of Good Job by Alicia Keys. Made in Figma.",
						src: goodJob
					},
					{
						title: "iy8 logo",
						description: "Sample logo (very not official) for Cohort 8 of IYA (note the 8!). Illustrated in Adobe Fresco.",
						src: iy8
					},
					{
						title: "NYT Maker Week 2022 shirt",
						description: "Winning T-shirt design for Maker Week at the New York Times, the all-company hackathon.",
						src: makerTee
					},
				]
			]
		},
		{
			tag: "ui-ux",
			rows: [
				[
					{
						title: "ORACLE of Blair",
						description: "Web and graphic design for our senior class model of the 2020 Presidential election. Designed in Figma.",
						link: "https://polistat.mbhs.edu",
						src: oracle
					},
					{
						title: "climatedu",
						description: "Website platform design for climatedu.org, an online climate course for middle and high school students. Designed in Figma.",
						link: "https://climatedu.org",
						src: climateduSite
					}
				]
			]
		}
	]

	for (const article of writingItems) {
		for (const tag of article.tags) {
			if (!(tag in writingTags)) {
				writingTags[tag] = false; // all tags start off inactive by default
			}
		}
	}

	for (const category of designItems) {
		if (!(category.tag in writingTags)) {
			designTags[category.tag] = false; // all tags start off inactive by default
		}
	}

	// TODO: design tags
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

	<!-- outer tabs wrapper -->
	<div class="tabs">
		<!-- tab selector is perfectly sized to match the tabs, necessary because the two tabs are directly overlapping grids (if one is on the bottom, it will never be selected)-->
		<div class="tab-selector">
			<div
				class="design-selector"
				on:click={() => {
					writingPos = 'bottom';
					designPos = 'top';
					console.log('design');
				}}
			/>
			<div
				class="writing-selector"
				on:click={() => {
					writingPos = 'top';
					designPos = 'bottom';
					console.log('journo');
				}}
			/>
		</div>
		<!-- design tab -->
		<div class="design-tab tab {designPos}" on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
			<h2 class="tab-label">design</h2>
			<!-- tab shape -->
			<svg viewBox="0 0 263 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"
				/>
			</svg>
			<!-- rectangular shape to give the illusion of a large folder with a tab -->
			<div class="tab-page">
				<div class="tab-page-content">
					<!-- filters -->
					<div class="buttons">
						<!-- first display all selected tags -->
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
						<!-- then display all unselected tags -->
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

					<!-- tab content separated into rows -->

					<div class="content-container">
						<!-- we display each category in designItems by row -->
						{#each designItems as category}
							{#if noneSelected() || designTags[category.tag]}
							{#each category.rows as row}
								<div class="{category.tag} content-row">
									{#each row as item}
									<div class="img-container">
										<div class="description" style="position: fixed; left: {m.x + 5}px; top: {m.y + 5}px">
											<h2>{item.title}</h2>
											<p>
												{item.description}
												{#if "link" in item}
													More <a href={item.link}>here</a>.
												{/if}
											</p>
										</div>
										<img src={item.src} alt={item.title} />
									</div>
									{/each}
								</div>
							{/each}
							{/if}
						{/each}
						
						</div>
				</div>
			</div>
		</div>
		<!-- writing tab -->
		<div class="writing-tab tab {writingPos}">
			<h2 class="tab-label">writing</h2>
			<svg viewBox="0 0 263 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"
				/>
			</svg>
			<div class="tab-page">
				<div class="tab-page-content">
					<div class="buttons">
						{#each Object.keys(writingTags).filter((k) => writingTags[k]) as tag}
							<div
								class:selectedTag={writingTags[tag]}
								on:click={() => {
									writingTags[tag] = !writingTags[tag];
								}}
							>
								<Tag className="filter">{tag}</Tag>
							</div>
						{/each}
						{#each Object.keys(writingTags).filter((k) => !writingTags[k]) as tag}
							<div
								class:selectedTag={writingTags[tag]}
								on:click={() => {
									writingTags[tag] = !writingTags[tag];
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
						<!-- render an article card for each writing item-->
						<!-- display only filtered ones if a filter has been selected, otherwise display all -->
						{#if Object.keys(writingTags).filter((k) => writingTags[k]).length === 0}
							{#each writingItems as article}
								<ArticleCard {article} />
							{/each}
						{:else}
							{#each writingItems as article}
								{#each article.tags as tag}
									{#if writingTags[tag]}
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

	<!-- outro -->
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
	/* extra padding for "portfolio" header */
	h1 {
		margin-bottom: 2rem;
		@media screen and (max-width: 32rem) {
			padding: 0 5vw;
		}
	}

	/* tab drop shadow */
	svg {
		filter: drop-shadow(0 0 1rem var(--secondary-subtle-color));
		grid-row: 1 / span 2;
		height: 100%;
		grid-column: 2;
		@media screen and (max-width: 32rem) {
			height: 90%;
		}
	}

	/* position both tabs in the same place on the grid */
	.tab-page {
		background-color: var(--bg-color);
		grid-row: 2 / -1;
		grid-column: 1 / -1;
		z-index: 1;
		height: 100%;
		.tab-page-content {
			margin: 2rem;
		}
	}

	/* top tab styles */
	.top {
		z-index: 2; // place the top tab in front via z-index
		svg {
			fill: var(--bg-color); // give the top tab foreground color
		}
	}

	/* bottom tab styles */
	.bottom {
		.tab-page {
			box-shadow: 0 0 1rem var(--secondary-subtle-color); // only give bottom tab the drop shadow (avoid double)
		}
		svg {
			fill: var(--bg-shadow-color); // give the bottom tab a darker color
		}
		.tab-page-content {
			display: none;
		}
	}

	.tabs {
		display: grid;
		max-width: 100%;
		width: 100%;

		/* tab selector sizing to match with the tabs */
		.tab-selector {
			grid-column: 1;
			grid-row: 1;
			z-index: 3;
			width: 100%;
			height: 2.5rem;
			display: grid;
			grid-template-columns: 2.5rem 11rem 11rem auto;

			/* responsive sizing */
			@media screen and (max-width: 50rem) {
				grid-template-columns: 0rem 11rem 11rem auto;
			}
			@media screen and (max-width: 32rem) {
				grid-template-columns: 0rem 9rem 9rem auto;
			}
			.design-selector {
				grid-column: 2;
			}
			.writing-selector {
				grid-column: 3;
			}
		}

		/* place each tab grid in the same part of the outer grid */
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

		/* only the top row of each grid is different, to accommodate unique tab placement */
		.design-tab {
			grid-template-columns: 2.5rem 12rem auto;
			@media screen and (max-width: 50rem) {
				grid-template-columns: 0 12rem auto;
			}
			@media screen and (max-width: 32rem) {
				grid-template-columns: 0 10rem auto;
			}
		}
		.writing-tab {
			grid-template-columns: 12.5rem 12rem auto;
			@media screen and (max-width: 50rem) {
				grid-template-columns: 10rem 12rem auto;
			}
			@media screen and (max-width: 32rem) {
				grid-template-columns: 8rem 10rem auto;
			}
		}
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

		/* image container styling for design tab */
		.img-container {
			.description {
				// hide description by default
				opacity: 0%;
				transition: opacity 0.5s;
				h2 {
					font-size: 1.2rem;
					margin-bottom: 0.5rem;
				}
				p {
					margin: 0;
				}
				background-color: var(--absolute);
				border: 1.5px solid var(--lighter);
				color: var(--text-color);
				font-size: 0.85rem;
				padding: 1.5rem;
				align-content: end;
				width: 20rem;
				border-radius: 5px;
			}
			&:hover .description {
				// show description on hover
				opacity: 90%;
			}
			&:focus .description {
				// show description on focus
				opacity: 90%;
			}
		}
		img {
			box-shadow: 0 0 1rem var(--secondary-subtle-color);
			max-height: 100%;
			max-width: 100%;
			object-fit: scale-down;
			flex-grow: 1;
		}

		// split rows vertically on small screen
		@media screen and (max-width: 50rem) {
			flex-direction: column;
			.description {
				box-shadow: 0 0 2rem var(--secondary-subtle-color) !important;
				top: auto !important; 
				left: 0 !important;
				bottom: 0 !important;
				height: min-content !important;
				width: 100vw !important;
				box-sizing: border-box !important;
				border: none !important;
				border-radius: 0 !important;
			}
		}
	}

	/* outro styles */
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
