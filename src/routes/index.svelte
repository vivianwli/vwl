<script>
    import CustomButton from "../components/CustomButton.svelte";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FiArrowDownCircle from "svelte-icons-pack/fi/FiArrowDownCircle";
</script>

<div class="content">
    <!-- cover page! -->
    <div class="section">
        <div class="logo">
            <img src="src/images/vwl.svg" alt="logo" />
        </div>
        <Icon src={FiArrowDownCircle} className="custom-icon arrow"/>
    </div>
    <!-- introduction! -->
    <div class="section">
        <div class="mini-section intro">
            <img class="avatar" src="src/images/vivian.png" alt="viv" />
            <div class="text">
                <h1>hello! i'm vivian li.</h1>
                <p>
                    I’m a very small girl studying in the <b>Iovine and Young Academy</b>, based in Los Angeles at the University of Southern California. I live to <b>tell stories in beautiful ways</b>, especially around climate solutions and sustainability. I also love many other things and I'm generally doing all sorts of stuff. <b>Welcome to my playground</b>!
                </p>
                <CustomButton link="/resume">resume</CustomButton>
            </div>
        </div>
        <Icon src={FiArrowDownCircle} className="custom-icon arrow"/>
    </div>
    <!-- the things that i do -->
    <div class="section things">
        <div class="mini-section">
            <div class="text-left">
                <h1>i design...</h1>
                <p>
                    I make pretty things, from brand identities to hand-doodled holiday cards to tiny 3D worlds. Part of that process lies in constantly looking out for minutiae behind the beauty of daily life. Check it out!
                </p>
                <CustomButton link="/portfolio">my design portfolio</CustomButton>
            </div>
            <div class="image-stack image-right">
                <div class="image-stack-item design-top">
                    <img src="src/images/market-fermentation-2.png" alt="market fermentation poster design" />
                </div>
                <div class="image-stack-item design-bottom">
                    <img src="src/images/trader-joes-big.png" alt="low poly trader joes" />
                </div>
            </div>
        </div>
        <div class="mini-section">
            <div class="image-stack image-left">
                <div class="image-stack-item code-top">
                    <img src="src/images/research-2.png" alt="my senior research project" />
                </div>
                <div class="image-stack-item code-middle">
                    <img src="src/images/intro-code.svg" alt="code-ception of this homepage" />
                </div>
                <div class="image-stack-item code-bottom">
                    <img src="src/images/research-1.png" alt="my senior research project" />
                </div>
            </div>
            <div class="text-right">
                <h1>i code...</h1>
                <p>
                    Okay, this one is relatively a work in progress. I've coded random projects in the past (thanks, high school!), and I'm now on a mission to better understand interactive media and data journalism. Feel free to follow along :)
                </p>
                <div class="buttons">
                    <CustomButton link="https://github.com/teacupkittie">my github</CustomButton>
                    <CustomButton link="/blog">my blog</CustomButton>
                </div>  
            </div>
        </div>
        <div class="mini-section">
            <div class="text-left">
                <h1>i write...</h1>
                <p>
                    Ah, the power of words. More than anything, I love to talk. Distilling ideas to their core components, figuring out what they mean, and sharing them with others. Thankfully, I get to do a lot of that here.
                </p>
                <div class="buttons">
                    <CustomButton link="/portfolio">my writing portfolio</CustomButton>
                    <CustomButton link="/blog">my blog</CustomButton>
                </div> 
            </div>
            <div class="image-stack image-right">
                <div class="image-stack-item write-top">
                    <img src="src/images/greenwashing-1.png" alt="an article i wrote on greenwashing" />
                </div>
                <div class="image-stack-item write-middle">
                    <img src="src/images/viv-nytimes.png" alt="an article i wrote on marine plastic pollution" />
                </div>
                <div class="image-stack-item write-bottom">
                    <img src="src/images/greenwashing-2.png" alt="an article i wrote on greenwashing" />
                </div>
            </div>
        </div>
        <Icon src={FiArrowDownCircle} className="custom-icon arrow"/>
    </div>
    <!-- to come: outro! -->
</div>

<style>
    /* TO BE IMPLEMENTED: scroll snap!
    .content {
        scroll-snap-type: y proximity;
        scroll-padding-top: 10vh;
        overflow-y: scroll;
    }
    .section {
        scroll-snap-align: start; 
    }
    */

    /* title page style */
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

    /* arrow icon style*/
    :global(.arrow) {
        opacity: 50%;
        width: 100%;
        margin: auto;
        margin-top: 15vh;
        margin-bottom: 10vh;
    }

    /* when there's more than one button in a row */ 
    .buttons {
        display: grid;
        grid-template-columns: min-content min-content 1fr;
        grid-gap: 0.5rem;
    }

    /* style for each little image + text section! */
    .mini-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 10vh 10vw 0 10vw;
        padding: 0 5vw;
    }

    /* glow + resizing for every image in these mini sections */
    .mini-section img {
        box-shadow: 0 0 1.2rem 0.1rem var(--secondary-color);
        max-width: 100%;
    }

    /* more space in between each thing in the things section (thing: design, code, write) */
    .things .mini-section{
        margin: 20vh 10vw 10vh 10vw;
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
        margin-top: 25vh;
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
</style>