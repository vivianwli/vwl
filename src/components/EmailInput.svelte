<script>
    import "../app.css";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FiArrowRightCircle from "svelte-icons-pack/fi/FiArrowRightCircle";
</script>

<div class="email-input">
    <input type="email" placeholder="email" />
    <button type="submit"><Icon src={FiArrowRightCircle} className="custom-icon arrow"/></button>
</div>

<style>
    input {
        border: 2.5px solid var(--secondary-color);
        opacity: 75%;
        background-color: transparent;
        border-radius: 30px;
        color: var(--text-color);
        font-family: 'Epilogue';
        font-weight: 300;
        padding: 0.4rem 0.7rem;
        width: 70%;
    }
    input:focus {
        outline: none;
        box-shadow: 0 0 2px var(--secondary-color);
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: var(--secondary-color);
        font-weight: 600;
        opacity: 65%; /* Firefox */
    }
    button { 
        padding: 0; 
        background: none; 
        border: none; 
        outline: none; 
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: 4px;
    }
    button :global(.arrow) {
        margin: 0;
        color: var(--primary-light-color);
        opacity: 100%;
        font-size: 2rem;
    }
    button :global(.arrow):hover {
        margin: 0;
        color: var(--primary-color);
    }
    .email-input {
        display: flex;
    }
</style>