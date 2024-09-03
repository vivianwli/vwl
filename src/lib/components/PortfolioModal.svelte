<script>
	import '../../app.scss';
	export let item;
	import Tag from '$lib/components/Tag.svelte';
</script>

<div class="modal-container">
  <h1>{item.title}</h1>
  <p>{item.description}</p>
  {#if item.pdfSrc}
    <iframe
      class="pdf"
      src={"https://docs.google.com/gview?url=" + item.pdfSrc + ""}
      title={item.title}
    >
    </iframe>
  {:else}
    <img src={item.src} alt={item.title}/>
  {/if}
</div>

<style>
  .modal-container {
    background-color: var(--bg-color);
    box-shadow: 0 0 2rem var(--secondary-color);
    padding: 4rem 5rem;
    width: 50rem;
    display: grid;
    gap: 0.5rem;
    /* height: 20rem; */
  }

  iframe {
    width: 100%;
    aspect-ratio: 16/9;
  }

  p {
    margin-top: 0;
    font-size: 0.9rem;
  }

  h1 {
    margin-top: 0;
  }
</style>