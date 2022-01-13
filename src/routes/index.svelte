<script>
	import Link from '$lib/components/Link.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import EmailInput from '$lib/components/EmailInput.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';

	// icon imports
	import FiArrowDownCircle from 'svelte-icons-pack/fi/FiArrowDownCircle';
	import FiMail from 'svelte-icons-pack/fi/FiMail';
	import FiGithub from 'svelte-icons-pack/fi/FiGithub';
	import FiLinkedin from 'svelte-icons-pack/fi/FiLinkedin';
	import FiInstagram from 'svelte-icons-pack/fi/FiInstagram';
	import FiYoutube from 'svelte-icons-pack/fi/FiYoutube';
	import FiTwitter from 'svelte-icons-pack/fi/FiTwitter';

	//image imports
	import vwl from '$lib/assets/vwl.svg';
	import vivian from '$lib/assets/vivian.png';
	import design1 from '$lib/assets/market-fermentation-2.png';
	import design2 from '$lib/assets/trader-joes-big.png';
	import code1 from '$lib/assets/research-2.png';
	import code2 from '$lib/assets/intro-code.svg';
	import code3 from '$lib/assets/research-1.png';
	import write1 from '$lib/assets/greenwashing-1.png';
	import write2 from '$lib/assets/viv-nytimes.png';
	import write3 from '$lib/assets/greenwashing-2.png';

	import { SvelteToast } from '@zerodevx/svelte-toast';

	let aboutSection = 'at-usc';
</script>

<svelte:head>
	<title>home</title>
</svelte:head>

<div class="content">
	<SvelteToast />
	<!-- cover page! -->
	<div class="section">
		<div class="logo">
			<img src={vwl} alt="logo" />
		</div>
		<Icon src={FiArrowDownCircle} className="custom-icon arrow" />
	</div>
	<!-- introduction! -->
	<div class="section">
		<div class="mini-section intro">
			<img class="avatar" src={vivian} alt="viv" />
			<div class="text-right">
				<h1>hello! i'm vivian li.</h1>
				<p>
					I’m a very small girl studying in the <b>Iovine and Young Academy</b>, based in Los
					Angeles at the University of Southern California. I live to
					<b>tell stories in beautiful ways</b>, especially around climate solutions and
					sustainability. I also love many other things and I'm generally doing all sorts of stuff.
					<b>Welcome to my playground</b>!
				</p>
				<Link
					link="https://drive.google.com/file/d/1mkq5Q-g9xGp5N2UZcgNrXokr2vZ4QfOS/view?usp=sharing"
					>resume</Link
				>
			</div>
		</div>
		<Icon src={FiArrowDownCircle} className="custom-icon arrow" />
	</div>
	<!-- the things that i do -->
	<div class="section things">
		<div class="mini-section">
			<div class="text-left">
				<h1>i design...</h1>
				<p>
					I make pretty things, from brand identities to hand-doodled holiday cards to tiny 3D
					worlds. Part of that process lies in constantly looking out for minutiae behind the beauty
					of daily life. Check it out!
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
					Okay, this one is relatively a work in progress. I've coded random projects in the past
					(thanks, high school!), and I'm now on a mission to better understand interactive media
					and data journalism. Feel free to follow along :)
				</p>
				<div class="buttons">
					<Link link="https://github.com/teacupkittie">my github</Link>
					<Link link="/blog">my blog</Link>
				</div>
			</div>
		</div>
		<div class="mini-section">
			<div class="text-left">
				<h1>i write...</h1>
				<p>
					Ah, the power of words. More than anything, I love to talk. Distilling ideas to their core
					components, figuring out what they mean, and sharing them with others. Thankfully, I get
					to do a lot of that here.
				</p>
				<div class="buttons">
					<Link link="/portfolio">my writing portfolio</Link>
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
		<Icon src={FiArrowDownCircle} className="custom-icon arrow" />
	</div>
	<!-- outro! -->
	<div class="section outro">
		<h1>i create.</h1>
		<div class="outro-content">
			<div class="contact">
				<h2>want to chat?</h2>
				<div class="media-icon-container">
					<a sveltekit:prefetch href="mailto: vwli@usc.edu"
						><Icon src={FiMail} className="custom-icon media-icon" /></a
					>
					<a sveltekit:prefetch href="https://github.com/teacupkittie"
						><Icon src={FiGithub} className="custom-icon media-icon" /></a
					>
					<a sveltekit:prefetch href="https://www.linkedin.com/in/vivian-li-25b424183/"
						><Icon src={FiLinkedin} className="custom-icon media-icon" /></a
					>
					<a sveltekit:prefetch href="https://instagram.com/mclovivian"
						><Icon src={FiInstagram} className="custom-icon media-icon" /></a
					>
					<Icon src={FiYoutube} className="custom-icon media-icon hidden" />
					<Icon src={FiYoutube} className="custom-icon media-icon hidden" />
					<a sveltekit:prefetch href="https://www.youtube.com/c/vivianli0"
						><Icon src={FiYoutube} className="custom-icon media-icon" /></a
					>
					<a sveltekit:prefetch href="https://twitter.com/teacupkittie"
						><Icon src={FiTwitter} className="custom-icon media-icon" /></a
					>
				</div>
				<p>Subscribe to my newsletter:<br /> (this will take you to my blog!)</p>
				<EmailInput className="right-justified" />
			</div>
			<span />
			<div class="about">
				<h2>want to know more?</h2>
				<div class="buttons">
					<div
						class:selectedTag={aboutSection === 'at-usc'}
						on:click={() => (aboutSection = 'at-usc')}
					>
						<Tag className="filter">what I do at USC</Tag>
					</div>
					<div
						class:selectedTag={aboutSection === 'care-about'}
						on:click={() => (aboutSection = 'care-about')}
					>
						<Tag className="filter">things I care about</Tag>
					</div>
					<div
						class:selectedTag={aboutSection === 'fun-facts'}
						on:click={() => (aboutSection = 'fun-facts')}
					>
						<Tag className="filter">fun facts</Tag>
					</div>
				</div>
				{#if aboutSection === 'at-usc'}
					<div>
						<ul>
							<li>
								i'm in a <a sveltekit:prefetch href="https://iovine-young.usc.edu/"
									>crazy-cool major</a
								> with some crazy-cool people
							</li>
							<li>
								i’m a soprano in <a sveltekit:prefetch href="https://uscsirensacappella.weebly.com/"
									>Sirens A Cappella</a
								> 🤍
							</li>
							<li>
								i'm developing USC's <a
									sveltekit:prefetch
									href="https://green.usc.edu/students/presidents-sustainability-internship-program/"
									>sustainability design guidelines</a
								>, organizing the Student Sustainability Committee's media presence, and planning
								the Presidential Symposium
							</li>
							<li>
								i write for <a sveltekit:prefetch href="https://hauteusc.com/">Haute Mag</a> and
								design for <a sveltekit:prefetch href="https://hacksc.com/">HackSC</a>
							</li>
							<li>i skate, bake, run, and enjoy our beautiful campus</li>
						</ul>
					</div>
				{:else if aboutSection === 'care-about'}
					<div>
						<ul>
							<li>
								our planet! I try my best to eat plant-based, to be a conscious consumer, and to
								talk about it when I can (in a non-judgemental way!)
							</li>
							<li>my friends and family. They are the most wonderful people</li>
							<li>making and eating good food</li>
							<li>being nice to people :)</li>
						</ul>
					</div>
				{:else}
					<div>
						<ul>
							<li>
								the “w” in vwl comes from my Chinese name, 李蔚薇 ("li weiwei"), which refers to the
								resilient nature of a wild rose. Basically, my parents named me after a weed...
							</li>
							<li>i'm a big fan of grocery stores. Trader Joe’s, particularly</li>
							<li>i write in brown ink rather than black ink</li>
							<li>my favorite fruits: fresh figs, sumo mandarins, blackberries</li>
						</ul>
					</div>
				{/if}
			</div>
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
	}
	.logo img {
		width: 100%;
		margin: auto;
	}

	/* arrow icon style*/
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

	/* style for each little image + text section! */
	.mini-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-top: 10vh;
	}

	/* glow + resizing for every image in these mini sections */
	.mini-section img {
		box-shadow: 0 0 1.2rem 0.1rem var(--secondary-color);
		max-width: 100%;
	}

	/* more space in between each thing in the things section (thing: design, code, write) */
	.things .mini-section {
		margin: 20vh 0vw 10vh 0vw;
	}

	/* less space between the end of "things" and the arrow */
	.things :global(.arrow) {
		margin-top: 5vh;
	}

	/* unique style for my profile picture */
	.mini-section .avatar {
		width: 75%;
		margin: auto;
		border-radius: 100%;
	}

	/* padding + centering for my text blocks */
	.text-right {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-left: 10%;
	}
	.text-left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		text-align: right;
		margin-right: 10%;
	}

	/* giving enough standalone slide space (so it looks good with scroll-snapping!) */
	.intro {
		padding-top: 5vh;

		.text-right {
			margin-left: 0;
		}

		h1 {
			margin-top: 0;
		}
	}

	/*image stack style */
	.image-stack {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		align-content: center;
		position: relative;
		padding-top: 2em;
	}
	.image-right {
		margin-left: 10%;
	}
	.image-left {
		margin-right: 10%;
	}

	/* positioning for each individual picture */
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
		margin: 15vh 0;
	}
	.outro-content {
		display: grid;
		grid-template-columns: repeat(16, 1fr);
	}
	.outro h1 {
		width: fit-content;
		margin: auto;
	}
	.outro h2 {
		background-color: var(--primary-color);
		background-image: none;
	}
	.about {
		grid-column: 9 / -1;
	}
	.outro span {
		height: 80%;
		width: 4px;
		background-color: var(--secondary-color);
		border-radius: 99px;
		opacity: 50%;
		margin: auto;
		grid-column: 7 / span 2;
	}
	.contact {
		text-align: right;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		grid-column: 1 / span 6;
	}
	.media-icon-container {
		display: grid;
		grid-template-columns: repeat(3, min-content) 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 0.75rem;
	}
	:global(.media-icon) {
		font-size: 3rem !important;
	}
	.contact p {
		margin: 5% 0;
	}
	.selectedTag :global(.filter) {
		background-color: var(--highlight-color);
		box-shadow: 0 0 0.2rem var(--primary-light-color);
		color: var(--primary-color);
		border: 2.5px solid var(--primary-color);
	}

	:global(.hidden) {
		visibility: hidden;
	}
</style>
