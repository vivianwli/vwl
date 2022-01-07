<script>
    import "../../app.scss";
    export let src;
    export let caption;
    export let className;
</script>

<div class={className}>
    <img src={"/images/" + src} alt={caption}>
    <div class="caption">{@html caption}</div>
</div>

<style lang="scss">
    img {
		width: 50%;
		display: block;
		margin: 2rem auto 1rem auto;
		box-shadow: 0 0 1.2rem 0.1rem var(--secondary-color);
	}
	.caption {
		text-align: center;
		display: block;
		width: 50%;
		font-size: 0.9rem;
		margin: 1rem auto 2rem auto;
		color: var(--secondary-selected-color);
		font-style: italic;
	}
    .gallery-img {
        img {
            width: 90%;
        }
        .caption {
            width: 90%;
        }
    }
    .half-img {
        img {
            width: 20rem;
        }
        .caption {
            width: 20rem;
        }
    }
</style>