<script>
	import '../../app.scss';
	export let article;
	import Tag from '$lib/components/Tag.svelte';
</script>

<a
	sveltekit:prefetch
	sveltekit:noscroll
	href={article.link}
	on:click={() =>
		setTimeout(() => {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}, 600)}
>
	<div class="card-container">
		<img src={'/thumbnails/' + article.thumbnail + '?w=400&webp'} alt={article.title} />
		<div class="post-description">
			<h2>{article.title}</h2>
			<p class="date">{article.info}</p>
			<div class="buttons">
				{#each article.tags as tag}
					<Tag className="inactive">{tag}</Tag>
				{/each}
			</div>
			<p>{@html article.summary}</p>
		</div>
	</div>
</a>

<style lang="scss">
	.card-container {
		background-color: var(--postcard-color);
		box-shadow: 0 0 1rem var(--secondary-subtle-color);
		display: flex;
		@media screen and (max-width: 50rem) {
			display: block;
		}
		margin: 1.5rem 0;
		img {
			width: 40%;
			object-fit: cover;
			@media screen and (max-width: 50rem) {
				width: 100%;
			}
		}
		.date {
			font-size: 0.8rem;
		}
		.post-description {
			padding: 1.5rem;
			align-self: center;
			@media screen and (max-width: 50rem) {
				padding: 0 1rem 0.5rem 1rem;
			}
		}
		h2 {
			font-size: 1.2rem;
			margin-top: 0;
			margin-bottom: 0;
			@media screen and (max-width: 50rem) {
				margin-top: 1rem;
			}
		}
		p {
			font-size: 0.9rem;
			margin-bottom: 0;
		}
	}
	a {
		text-decoration: none;
		color: var(--text-color);
	}
	.buttons {
		padding-top: 1rem;
	}
</style>
