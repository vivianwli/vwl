<svelte:head>
    <title>portfolio</title>
</svelte:head>

<div class="content">
    <h1>portfolio</h1>
    <div class="tabs">
        <div class="design-tab tab top">
            <h2 class="tab-label">design</h2>
            <svg viewBox="0 0 263 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"/>
            </svg> 
            <div class="tab-page"></div>
        </div>
        <div class="journalism-tab tab bottom">
            <h2 class="tab-label">journalism</h2>
            <svg viewBox="0 0 263 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.3647 18.5394L26.4733 35.1565C20.9981 46.6858 11.3657 53.6959 0.998535 53.6959V107.392H262.5V53.6959C252.318 53.6959 242.831 46.9326 237.304 35.7337L228.534 17.9622C223.007 6.76327 213.52 0 203.338 0H59.8395C49.4724 0 39.84 7.01005 34.3647 18.5394Z"/>
            </svg> 
            <div class="tab-page"></div>
        </div>
    </div>
</div>

<style lang="scss">
    h1 {
        margin-bottom: 2rem;
    }
    svg {
        filter: drop-shadow(0 0 0.5rem var(--secondary-subtle-color));
        grid-row: 1 / span 2;
        height: 100%;
        grid-column: 2;
    }
    .tab-page {
        background-color: var(--bg-color);
        grid-row: 2 / -1;
        grid-column: 1 / -1;
        z-index: 1;
    }
    .top {
        z-index: 2;
        svg {
            fill: var(--bg-color);
        }
    }
    .bottom {
        .tab-page {
            box-shadow: 0 0 0.5rem var(--secondary-subtle-color);
        }
        svg {
            fill: var(--bg-shadow-color);
        }
    }
    .tabs {
        display: grid;
        .tab {
            grid-column: 1;
            grid-row: 1;
            display: grid;
            grid-template-rows: 2.5rem 2.5rem 40rem;
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
</style>