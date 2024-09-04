<script>
	import '../../app.scss';
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import FiX from 'svelte-icons-pack/fi/FiX';
	import { Jumper } from 'svelte-loading-spinners';
  import { fade } from 'svelte/transition';

	export let item;

  let isLoading = true;

  function handleLoad() {
    isLoading = false;
  }
</script>

{#if item}
<div transition:fade class="modal-container">
  <div 
    on:click={() => item = null}
    on:keydown={() => item = null}
    class="icon-container">
  <Icon src={FiX} className="custom-icon close-icon" /></div>
  <div class="modal-content">
    <h1>{item.title}</h1>
    <p>
      {item.description}
      {#if item.link}
        <a href={item.link} class="more-link">Click to see more.</a>
      {/if}
    </p>
    <div class="media-container">
      {#if isLoading}
        <div transition:fade class="spinner-container">
          <Jumper size="60" color="var(--primary-color)" unit="px" duration="1.5s" />
        </div>  
      {/if}
      {#if item.pdfSrc}
        <iframe
          class={"pdf" + (!isLoading && " loaded")}
          src={"https://docs.google.com/gview?url=https://drive.google.com/uc?id=" + item.pdfSrc + "&embedded=true"}
          title={item.title}
          on:load={handleLoad}
        >
        </iframe>
      {:else if item.imgSrc}
      <div class="img-container">
        <img src={item.imgSrc} alt={item.title} on:load={handleLoad}/>
      </div>
      {:else}
        <div class="img-container">
          <img src={item.src} alt={item.title} on:load={handleLoad}/>
        </div>
    {/if}
    </div>
  </div>
</div>
{/if}

<style>
  .modal-container {
    background-color: var(--modal-color);
    box-shadow: 0 0 2rem var(--secondary-color);
    padding: 2rem;
    width: 54rem;
    backdrop-filter: blur(1rem);
  }

  .modal-content {
    display: grid;
    gap: 0.5rem;
    padding: 1rem 3rem 2rem 3rem;
  }

  .img-container {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    max-width: 100%;
    width: auto;
    height: auto;
    aspect-ratio: auto;
    max-height: 450px;
    box-shadow: 0 0 1rem var(--secondary-subtle-color);
  }

  iframe {
    width: 100%;
    aspect-ratio: 16/9;
    border-width: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  iframe.loaded {
    box-shadow: 0 0 1rem var(--secondary-subtle-color);
  }

  p {
    margin-top: 0;
    font-size: 0.9rem;
  }

  h1 {
    margin-top: 0;
    font-size: 2rem;
  }

  :global(.close-icon) {
		font-size: 1.75rem;
		opacity: 100%;
  }

  .icon-container {
    display: flex;
    justify-content: end;
  }

  .spinner-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 25;
    background-color: var(--postcard-color);
  }

  .media-container {
    position: relative;
    height: 450px;
  }

</style>
