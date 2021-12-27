<script>
    import "../app.css";
</script>

<button>
    <slot />
</button>

<style>
    button {
        width: fit-content;
        border: 2.5px solid var(--primary-color);
        background-color: var(--bg-color);
        border-radius: 30px;
        color: var(--primary-color);
        font-family: 'Epilogue';
        font-weight: 600;
        padding: 0.4rem 0.7rem;
        cursor: pointer;
        white-space: nowrap;
    }
    button:hover {
        background-color: var(--highlight-color);
        box-shadow: 0 0 0.2rem var(--primary-light-color);
    }
</style>