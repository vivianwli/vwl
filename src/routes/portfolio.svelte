<script>
    import Tag from '$lib/components/Tag.svelte';
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FiMail from "svelte-icons-pack/fi/FiMail";
    import FiLinkedin from "svelte-icons-pack/fi/FiLinkedin";
    import traderJoes from '$lib/assets/trader-joes-big.png';
    import oatte from '$lib/assets/oatte.png';
    import hacksc1 from '$lib/assets/hacksc.png';
    import hacksc2 from '$lib/assets/sam-yam-1.png';
    import climatedu1 from '$lib/assets/climatedu-redlining.png';
    import climatedu2 from '$lib/assets/climatedu-jellies.png';
    import marketFermentation from '$lib/assets/market-fermentation-2.png';
    import blobs from '$lib/assets/blobs-portfolio.png';
    import iy8 from '$lib/assets/iy8.png';
    import oracle from '$lib/assets/blair-oracle.png';
    import climatedu3 from '$lib/assets/climatedu-website.png';

    function clear() {
        for (const key in journalismTags) {
            journalismTags[key] = false;
        }
        for (const key in designTags) {
            designTags[key] = false;
        }
    }
    function noneSelected() {
        return Object.keys(designTags).filter(k => designTags[k]).length === 0;
    }

    let designPos = 'top';
    let journalismPos = 'bottom';
    let designTags = {'3D': false, 'social-media': false, 'illustration': false, 'ui-ux': false};
    let journalismTags = {'print': false, 'video': false};
</script>

<svelte:head>
    <title>portfolio</title>
</svelte:head>

<div class="content">
    <h1>portfolio</h1>
    <div class="tabs">
        <div class="tab-selector">
            <div class="design-selector" on:click={() => {journalismPos = 'bottom'; designPos = 'top'; console.log('design');}}></div>
            <div class="journalism-selector" on:click={() => {journalismPos = 'top'; designPos = 'bottom'; console.log('journo');}}></div>
        </div>
        <div class="design-tab tab {designPos}">
            <h2 class="tab-label">design</h2>
            <svg viewBox="0 0 263 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"/>
            </svg> 
            <div class="tab-page">
                <div class="tab-page-content">
                    <div class="buttons">
                        {#each Object.keys(designTags).filter(k => designTags[k]) as tag}
                            <div class:selectedTag={designTags[tag]} on:click="{() => {designTags[tag] = !designTags[tag]}}">
                                <Tag className="filter">{tag}</Tag>
                            </div>
                        {/each}
                        {#each Object.keys(designTags).filter(k => !designTags[k]) as tag}
                            <div class:selectedTag={designTags[tag]} on:click="{() => {designTags[tag] = !designTags[tag]}}">
                                <Tag className="filter">{tag}</Tag>
                            </div>
                        {/each}
                        <div on:click="{() => clear()}">
                            <Tag className="clear">clear all</Tag>
                        </div>
                    </div>
                    <div class="content-container">
                        {#if noneSelected() || designTags['3D']}
                            <div class="threed content-row">
                                <div id="tj" class="img-container"><img src={traderJoes} alt="low poly Trader Joe's" /></div>
                                <div class="img-container"><img src={oatte} alt="oat milk latte product mock-up" /></div>
                            </div>
                        {/if}
                        {#if noneSelected() || designTags['social-media']}
                            <div class="social-media content-row">
                                <div class="img-container"><img src={hacksc1} alt="HackSC's apps closing Instagram post" /></div>
                                <div class="img-container"><img src={hacksc2} alt="HackSC's keynote speaker Instagram post" /></div>
                                <div class="img-container"><img src={climatedu1} alt="climatedu's redlining climate impact Instagram post" /></div>
                                <div class="img-container"><img src={climatedu2} alt="climatedu's jellyfish carbon sink Instagram post" /></div>
                            </div>
                        {/if}
                        {#if noneSelected() || designTags['illustration']}
                            <div class="illustration content-row">
                                <div class="img-container"><img src={marketFermentation} alt="market fermentation mock movie poster" /></div>
                                <div class="img-container"><img src={blobs} alt="Fruit blobs for Discord" /></div>
                                <div class="img-container"><img src={iy8} alt="Iovine and Young Academy Cohort 8 sample logo art" /></div>
                            </div>
                        {/if}
                        {#if noneSelected() || designTags['ui-ux']}
                            <div class="ui-ux content-row">
                                <div class="img-container"><img src={oracle} alt="Logo header for the ORACLE of Blair" /></div>
                                <div class="img-container"><img src={climatedu3} alt="Website home page for climatedu.org" /></div>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
        <div class="journalism-tab tab {journalismPos}">
            <h2 class="tab-label">journalism</h2>
            <svg viewBox="0 0 263 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"/>
            </svg> 
            <div class="tab-page">
                <div class="tab-page-content">
                    <div class="buttons">
                        {#each Object.keys(journalismTags).filter(k => journalismTags[k]) as tag}
                            <div class:selectedTag={journalismTags[tag]} on:click="{() => {journalismTags[tag] = !journalismTags[tag]}}">
                                <Tag className="filter">{tag}</Tag>
                            </div>
                        {/each}
                        {#each Object.keys(journalismTags).filter(k => !journalismTags[k]) as tag}
                            <div class:selectedTag={journalismTags[tag]} on:click="{() => {journalismTags[tag] = !journalismTags[tag]}}">
                                <Tag className="filter">{tag}</Tag>
                            </div>
                        {/each}
                        <div on:click="{() => clear()}">
                            <Tag className="clear">clear all</Tag>
                        </div>
                    </div>
                </div>
                <!-- <div class="post-container">
                    {#if Object.keys(journalismTags).filter(k => journalismTags[k]).length === 0}
                        {#each posts as post}
                            <PostCard {post} />
                        {/each}
                    {:else}
                        {#each posts as post}
                            {#each post.tags as tag}
                                {#if journalismTags[tag.name]}
                                    <PostCard {post} />
                                {/if}
                            {/each}
                        {/each}
                    {/if}
                </div> -->
            </div>
        </div>
    </div>
    <div class="outro">
        <h2>don't be shy...</h2>
        <div class="icons">
            <a sveltekit:prefetch href="https://www.linkedin.com/in/vivian-li-25b424183/"><Icon src={FiLinkedin} className="custom-icon media-icon"/></a>
            <a sveltekit:prefetch href="mailto: vwli@usc.edu"><Icon src={FiMail} className="custom-icon media-icon"/></a>
        </div>
    </div>
</div>

<style lang="scss">
    h1 {
        margin-bottom: 2rem;
    }
    svg {
        filter: drop-shadow(0 0 1rem var(--secondary-subtle-color));
        grid-row: 1 / span 2;
        height: 100%;
        grid-column: 2;
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
        }
        .journalism-tab {
            grid-template-columns: 12.5rem 12rem auto;
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
            flex-shrink: 1;
        }
        img {
            box-shadow: 0 0 1rem var(--secondary-subtle-color);
            max-width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .outro {
        display:flex;
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