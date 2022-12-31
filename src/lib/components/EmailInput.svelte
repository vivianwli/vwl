<script>
	import '../../app.scss';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiArrowRightCircle from 'svelte-icons-pack/fi/FiArrowRightCircle';
	export let className;
</script>

<form
	action="https://buttondown.email/api/emails/embed-subscribe/vivian"
	method="post"
	class="email-input {className}"
>
	<input type="email" placeholder="email" name="email" />
	<button type="submit"><Icon src={FiArrowRightCircle} className="custom-icon arrow" /></button>
</form>

<style>
	input {
		border: 2.5px solid var(--secondary-color);
		opacity: 75%;
		background-color: transparent;
		border-radius: 30px;
		color: var(--text-color);
		font-family: 'Space Mono';
		font-weight: 300;
		padding: 0.4rem 0.7rem;
		width: 100%;
	}
	input:focus {
		outline: none;
		box-shadow: 0 0 2px var(--secondary-color);
		background-color: var(--secondary-highlight-color);
	}
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
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
		width: fit-content;
	}
	button :global(.arrow) {
		margin: 0;
		color: var(--primary-light-color);
		opacity: 100%;
		width: 2rem;
	}
	button :global(.arrow):hover {
		margin: 0;
		color: var(--primary-color);
		cursor: pointer;
	}
	.email-input {
		display: grid;
		gap: 2rem;
		grid-template-columns: auto min-content;
		max-width: 30rem;
	}
</style>
