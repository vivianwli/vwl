<script>
    import CustomButton from "$lib/CustomButton.svelte";
</script>

<div class="content">
    <div class="section">
        <div class="logo">
            <img src="src/images/vwl.svg" alt="logo" />
        </div>
        <ion-icon name="arrow-down-circle-outline"></ion-icon>
    </div>
    <div class="section">
        <div class="mini-section">
            <img src="src/images/vivian.png" alt="viv" />
            <div class="text">
                <h1>hello! i'm vivian li.</h1>
                <p>
                    I’m a very small girl studying in the <b>Iovine and Young Academy</b>, based in Los Angeles at the University of Southern California. I live to <b>tell stories in beautiful ways</b>, especially around climate solutions and sustainability. I also love many other things and I'm generally doing all sorts of stuff, so you can read about it here. <b>Welcome to my playground</b>!
                </p>
                <CustomButton>resume</CustomButton>
            </div>
        </div>
        <ion-icon name="arrow-down-circle-outline"></ion-icon>
    </div>
</div>

<!-- 

<p>byeeeeeeeeeeee</p> -->

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
    }
    .logo img {
        width: 100%;
        margin: auto;
    }
    ion-icon {
        color: var(--secondary-color);
        font-size: 2.5rem;
        opacity: 50%;
        width: 100%;
        margin: auto;
        margin-top: 15vh;
        margin-bottom: 10vh;
    }
    ion-icon:hover {
        color: var(--primary-light-color);
    }
    /*
    .section {
        scroll-snap-align: start; 
    }
    */
    .mini-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 25vh 10vw 0 10vw;
        padding: 0 5vw;
    }
    .mini-section img {
        width: 75%;
        margin: auto;
        border-radius: 100%;
        box-shadow: 0 0 1.5rem 0.2rem var(--secondary-color);
    }
    .mini-section .text {
        padding:4rem 0em;
    }
</style>