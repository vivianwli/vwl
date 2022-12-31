<script>
	import '../../app.scss';
	export let className;
	export let selected;
</script>

<button class={className}>
	<slot />
</button>

<style>
	button {
		transition: 0.3s ease;
		width: fit-content;
		border: none;
		background-color: var(--secondary-highlight-color);
		box-shadow: 0 0 0.4rem var(--transparent);
		border-radius: 30px;
		color: var(--dark);
		font-family: 'Space Mono';
		font-weight: 600;
		font-size: 0.8rem;
		padding: 0.4rem 0.7rem;
		cursor: pointer;
		white-space: nowrap;
	}
	button:hover {
		box-shadow: 0 0 0.4rem var(--secondary-button-shadow-color);
	}

	.clear {
		background-color: var(--transparent);
		height: 100%;
	}
	.clear:hover {
		box-shadow: none;
	}

	.inactive {
		background-color: var(--highlight-color);
		color: var(--primary-selected-color);
	}
	.inactive:hover {
		box-shadow: none;
	}

	.selected {
		background-color: var(--highlight-color);
		color: var(--primary-selected-color);
	}
	.selected:hover {
		box-shadow: 0 0 0.4rem var(--primary-button-shadow-color);
	}
</style>
