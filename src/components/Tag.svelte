<script>
    import "../app.scss";
    export let className;
</script>

<button class={className}>
    <slot />
</button>

<style>
    button {
        width: fit-content;
        border: 2.5px solid var(--secondary-color);
        background-color: var(--transparent);
        border-radius: 30px;
        color: var(--secondary-color);
        font-family: 'Epilogue';
        font-weight: 600;
        font-size: 0.9rem;
        padding: 0.4rem 0.7rem;
        cursor: pointer;
        white-space: nowrap;
    }
    button:hover {
        background-color: var(--secondary-highlight-color);
        box-shadow: 0 0 0.2rem var(--secondary-color);
    }
    .clear {
        border: none;
    }
    .clear:hover { 
        box-shadow: none;
    }
    .inactive {
        color: var(--primary-color);
        border: 2.5px solid var(--primary-color);
    }
    .inactive:hover {
        background-color: var(--transparent);
        box-shadow: none;
    }
</style>