<script>
    import CustomButton from "../components/CustomButton.svelte";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FiArrowDownCircle from "svelte-icons-pack/fi/FiArrowDownCircle";
</script>

<div class="content">
    <div class="section">
        <div class="logo">
            <img src="src/images/vwl.svg" alt="logo" />
        </div>
        <!-- <ArrowDownCircle size="large" /> --> 
        <Icon src={FiArrowDownCircle} className="custom-icon arrow"/>
    </div>
    <div class="section">
        <div class="mini-section intro">
            <img class="avatar" src="src/images/vivian.png" alt="viv" />
            <div class="text">
                <h1>hello! i'm vivian li.</h1>
                <p>
                    I’m a very small girl studying in the <b>Iovine and Young Academy</b>, based in Los Angeles at the University of Southern California. I live to <b>tell stories in beautiful ways</b>, especially around climate solutions and sustainability. I also love many other things and I'm generally doing all sorts of stuff, so you can read about it here. <b>Welcome to my playground</b>!
                </p>
                <CustomButton>resume</CustomButton>
            </div>
        </div>
        <!-- <ArrowDownCircle size="large" /> --> 
        <Icon src={FiArrowDownCircle} className="custom-icon arrow"/>
    </div>
    <div class="section">
        <div class="mini-section">
            <div class="text-left">
                <h1>i design...</h1>
                <p>
                    I make pretty things, from brand identities to hand-doodled holiday cards to tiny 3D worlds. Part of that process lies in constantly looking out for minutiae behind the beauty of daily life. Check it out!
                </p>
                <CustomButton>my design portfolio</CustomButton>
            </div>
            <div class="image-stack image-right">
                <div class="image-stack-item image-stack-item-top">
                    <img src="src/images/market-fermentation-2.png" alt="market fermentation poster design" />
                </div>
                <div class="image-stack-item image-stack-item-bottom">
                    <img src="src/images/trader-joes-big.png" alt="low poly trader joes" />
                </div>
            </div>
        </div>
        <div class="mini-section">
            <div class="image-stack image-left">
                <div class="image-stack-item image-stack-item-top">
                    <img src="src/images/market-fermentation-2.png" alt="market fermentation poster design" />
                </div>
                <div class="image-stack-item image-stack-item-bottom">
                    <img src="src/images/trader-joes-big.png" alt="low poly trader joes" />
                </div>
            </div>
            <div class="text-right">
                <h1>i code...</h1>
                <p>
                    I make pretty things, from brand identities to hand-doodled holiday cards to tiny 3D worlds. Part of that process lies in constantly looking out for minutiae behind the beauty of daily life. Check it out!
                </p>
                <div class="buttons">
                    <CustomButton>my github</CustomButton>
                    <CustomButton>my blog</CustomButton>
                </div>  
            </div>
        </div>
        <div class="mini-section">
            <div class="text-left">
                <h1>i communicate...</h1>
                <p>
                    I make pretty things, from brand identities to hand-doodled holiday cards to tiny 3D worlds. Part of that process lies in constantly looking out for minutiae behind the beauty of daily life. Check it out!
                </p>
                <div class="buttons">
                    <CustomButton>my writing portfolio</CustomButton>
                    <CustomButton>my blog</CustomButton>
                </div> 
            </div>
            <div class="image-stack image-right">
                <div class="image-stack-item image-stack-item-top">
                    <img src="src/images/market-fermentation-2.png" alt="market fermentation poster design" />
                </div>
                <div class="image-stack-item image-stack-item-bottom">
                    <img src="src/images/trader-joes-big.png" alt="low poly trader joes" />
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    /*
    .content {
        scroll-snap-type: y proximity;
        scroll-padding-top: 10vh;
        overflow-y: scroll;
    }
    */
    .logo {
        width: 40vw;
        margin: auto;
        padding-top: 25vh;
        margin-bottom: 10vh;
    }
    .logo img {
        width: 100%;
        margin: auto;
    }
    :global(.arrow) {
        opacity: 50%;
        width: 100%;
        margin: auto;
        margin-top: 15vh;
        margin-bottom: 10vh;
    }
    /*
    .section {
        scroll-snap-align: start; 
    }
    */
    .mini-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 10vh 10vw 0 10vw;
        padding: 0 5vw;
    }
    .mini-section .avatar {
        width: 75%;
        margin: auto;
        border-radius: 100%;
        box-shadow: 0 0 1.5rem 0.2rem var(--secondary-color);
    }
    .mini-section .text-right {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: 10%;
    }
    .intro {
        margin-top: 25vh;
    }
    .text-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        text-align: right;
        margin-right: 10%;
    }
    .image-stack {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        position: relative;
        padding-top: 2em;
    }
    .image-right {
        margin-left: 10%;
    }
    .image-stack-item-top {
        grid-column: 8 / -1;
        grid-row: 1;
        z-index: 1;
    }
    .image-stack-item-top img {
        max-width: 100%;
        transform: rotate(10deg);
        box-shadow: 0 0 1.2rem 0.2rem var(--secondary-color);
    }
    .image-stack-item-bottom {
        grid-column: 1 / span 8;
        grid-row: 1;
        padding-top: 20%;
        transform: rotate(-10deg);
    }
    .image-stack-item-bottom img {
        max-width: 100%;
        box-shadow: 0 0 1.2rem 0.2rem var(--secondary-color);
    }
    .buttons {
        display: grid;
        grid-template-columns: min-content min-content 1fr;
        grid-gap: 0.5rem;
    }
    .image-left {
        margin-right: 10%;
    }
</style>