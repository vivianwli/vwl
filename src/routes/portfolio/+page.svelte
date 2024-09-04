<script>
	// component imports
	import Tag from '$lib/components/Tag.svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import PortfolioModal from '$lib/components/PortfolioModal.svelte';
	import { projectsItems, designItems } from './data';

	// icon imports
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiMail from 'svelte-icons-pack/fi/FiMail';
	import FiLinkedin from 'svelte-icons-pack/fi/FiLinkedin';

	// svelte imports
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { fade } from 'svelte/transition';

	// for tooltip: in the case that x and y position aren't set, the cursor should fall back on a position that is out of view -- in this case, (-500, -500)
	let m = { x: -500, y: -500 };

	// logic to determine which tab is active or "on top"
	let designPos;
	let projectsPos;

	let tab = $page.url.searchParams.get('tab'); // based on url params, i.e. "?tab=projects"
	if (tab === 'projects') {
		designPos = 'bottom';
		projectsPos = 'top';
	} else {
		designPos = 'top';
		projectsPos = 'bottom';
	}

	let designTags = {};
	let projectsTags = {};

	let modalItem;

	// reset all filtering tags to be inactive
	function clear() {
		for (const key in projectsTags) {
			projectsTags[key] = false;
		}
		for (const key in designTags) {
			designTags[key] = false;
		}
	}

	// check to confirm that no tags have been selected
	function noneSelected() {
		return Object.keys(designTags).filter((k) => designTags[k]).length === 0;
	}

	let innerWidth;
	$: isMobile = innerWidth > 800 ? false : true; // determine whether the user is on mobile
	let currentMobileDescription = '';

	// sets which description is shown on mobile, if any
	function toggleMobileDescription(title) {
		currentMobileDescription === title
			? (currentMobileDescription = '')
			: (currentMobileDescription = title);
	}

	for (const article of projectsItems) {
		for (const tag of article.tags) {
			if (!(tag in projectsTags)) {
				projectsTags[tag] = false; // all tags start off inactive by default
			}
		}
	}

	for (const category of designItems) {
		if (!(category.tag in projectsTags)) {
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

<svelte:window bind:innerWidth />

<div class="content">
	{#if modalItem}
		<div transition:fade class="modal-container">
			<PortfolioModal bind:item={modalItem}/>
		</div>
	{/if}

	<h1>portfolio</h1>

	<!-- outer tabs wrapper -->
	<div class="tabs">
		<!-- tab selector is perfectly sized to match the tabs, necessary because the two tabs are directly overlapping grids (if one is on the bottom, it will never be selected)-->
		<div class="tab-selector">
			<div
				class="design-selector"
				on:click={() => {
					projectsPos = 'bottom';
					designPos = 'top';
				}}
				on:keydown={() => {
					projectsPos = 'bottom';
					designPos = 'top';
				}}
			/>
			<div
				class="projects-selector"
				on:click={() => {
					projectsPos = 'top';
					designPos = 'bottom';
				}}
				on:keydown={() => {
					projectsPos = 'top';
					designPos = 'bottom';
				}}
			/>
		</div>
		<!-- design tab -->
		<div
			class="design-tab tab {designPos}"
			on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}
		>
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
								on:click={() => {
									designTags[tag] = !designTags[tag];
								}}
								on:keydown={() => {
									designTags[tag] = !designTags[tag];
								}}
							>
								<Tag className={designTags[tag] ? 'selected' : ''}>{tag}</Tag>
							</div>
						{/each}
						<!-- then display all unselected tags -->
						{#each Object.keys(designTags).filter((k) => !designTags[k]) as tag}
							<div
								on:click={() => {
									designTags[tag] = !designTags[tag];
								}}
								on:keydown={() => {
									designTags[tag] = !designTags[tag];
								}}
							>
								<Tag className={designTags[tag] ? 'selected' : ''}>{tag}</Tag>
							</div>
						{/each}
						<div on:click={() => clear()} on:keydown={() => clear()}>
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
												{#if isMobile}
													{#if currentMobileDescription === item.title}
														<div
															transition:fly={{ y: 100, duration: 600 }}
															class="description mobile"
														>
															<h2>{item.title}</h2>
															<Tag className="inactive">{category.tag}</Tag>
															<p style="margin-top: 0.75rem">
																{item.description}
																{#if 'link' in item}
																	<span class="more-link-mobile">
																		More <a href={item.link}>here</a>.
																	</span>
																{/if}
															</p>
														</div>
													{/if}
													<img
														src={item.src}
														alt={item.title}
														on:click={() => toggleMobileDescription(item.title)}
														on:keydown={() => toggleMobileDescription(item.title)}
													/>
												{:else}
													<div 
														class="web-item-container"
														on:click={() => modalItem = item}
														on:keydown={() => modalItem = item}
													>
														<div
															class="description"
															style="position: fixed; left: {m.x + 5}px; top: {m.y + 5}px"
														>
															<h2>{item.title}</h2>
															<Tag className="inactive">{category.tag}</Tag>
															<p style="margin-top: 0.75rem">
																{item.description}
															</p>
														</div>
														<img src={item.src} alt={item.title} />
													</div>
												{/if}
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
		<!-- projects tab -->
		<div class="projects-tab tab {projectsPos}">
			<h2 class="tab-label">projects</h2>
			<svg viewBox="0 0 263 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"
				/>
			</svg>
			<div class="tab-page">
				<div class="tab-page-content">
					<div class="buttons">
						{#each Object.keys(projectsTags).filter((k) => projectsTags[k]) as tag}
							<div
								on:click={() => {
									projectsTags[tag] = !projectsTags[tag];
								}}
								on:keydown={() => {
									projectsTags[tag] = !projectsTags[tag];
								}}
							>
								<Tag className={projectsTags[tag] ? 'selected' : ''}>{tag}</Tag>
							</div>
						{/each}
						{#each Object.keys(projectsTags).filter((k) => !projectsTags[k]) as tag}
							<div
								on:click={() => {
									projectsTags[tag] = !projectsTags[tag];
								}}
								on:keydown={() => {
									projectsTags[tag] = !projectsTags[tag];
								}}
							>
								<Tag className={projectsTags[tag] ? 'selected' : ''}>{tag}</Tag>
							</div>
						{/each}
						<div on:click={() => clear()} on:keydown={() => clear()}>
							<Tag className="clear">clear all</Tag>
						</div>
					</div>
					<div class="content-container">
						<!-- render an article card for each projects item-->
						<!-- display only filtered ones if a filter has been selected, otherwise display all -->
						{#if Object.keys(projectsTags).filter((k) => projectsTags[k]).length === 0}
							{#each projectsItems as article}
								<ArticleCard {article} />
							{/each}
						{:else}
							{#each projectsItems as article}
								{#each article.tags as tag}
									{#if projectsTags[tag]}
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
	.modal-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--secondary-subtle-color);
		// padding: 10rem 20rem;
		box-sizing: border-box;
		z-index: 20;
		display: flex;
		justify-content: center;
		align-items: center;
	}

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
			.projects-selector {
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
		.projects-tab {
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
		color: var(--primary-selected-color);
	}

	.content-row {
		margin: 1.5rem 0;
		display: flex;
		gap: 1.5rem;

		/* image container styling for design tab */
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

		.description.mobile {
			opacity: 90%;
			z-index: 10;
			box-shadow: 0 0 2rem var(--secondary-subtle-color);
			position: fixed;
			top: auto;
			left: 0;
			bottom: 0;
			height: min-content;
			width: 100vw;
			box-sizing: border-box;
			border: none;
			border-radius: 0;
			.more-link-mobile {
				display: inline;
			}
		}

		@media (hover: hover) {
			.img-container:hover .description {
				// show description on hover
				opacity: 95%;
				z-index: 10;
			}
			.img-container {
				cursor: pointer;
			}
		}

		.img-container:focus .description {
			// show description on focus
			opacity: 95%;
			z-index: 10;
		}

		.more-link {
			display: inline;
			font-style: italic;
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
			@media (hover: hover) {
				&:hover {
					color: var(--primary-selected-color);
					cursor: pointer;
				}
			}
		}
	}
</style>
