<script>
	import '../../app.scss';
	export let className;
</script>

<button class={className}>
	<slot />
</button>

<style>
	button {
		transition: 0.3s ease;
		width: fit-content;
		background-color: var(--secondary-highlight-color);
		border: 1px solid var(--transparent);
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
		border: 1px solid var(--secondary-button-border-color);
		background-color: var(--secondary-button-hover-color);
	}

	.clear {
		background-color: var(--transparent);
		border: 1px solid var(--transparent) !important;
		height: 100%;
	}
	.clear:hover {
		background-color: rgba(180, 180, 191, 0.1);
	}

	.inactive {
		background-color: var(--highlight-color) !important;
		color: var(--primary-selected-color);
		border: 1px solid var(--transparent) !important;
	}

	.selected {
		background-color: var(--highlight-color);
		color: var(--primary-selected-color);
	}
	.selected:hover {
		border: 1px solid var(--primary-button-border-color);
		background-color: var(--primary-button-hover-color);
	}
</style>
