<div class="background">
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
	<span />
</div>

<style lang="scss">
	$animationDuration: 60s;
	$amount: 20;

	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;

		span {
			backface-visibility: hidden;
			position: absolute;
			animation-name: move;
			animation-duration: $animationDuration;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
			$colors: (var(--blob-1), var(--blob-2));
			$sizes: (10rem, 13rem, 16rem);
			@for $i from 1 through $amount {
				&:nth-child(#{$i}) {
					color: nth($colors, random(length($colors)));
					top: random(100) * 1%;
					left: random(100) * 1%;
					animation-duration: calc(random($animationDuration * 10) / 10) * 1s + 10s;
					animation-delay: calc(random(($animationDuration + 10s) * 10) / 10) * -1s;
					transform-origin: (random(50) - 25) * 1vw (random(50) - 25) * 1vh;
					$particleSize: nth($sizes, random(length($sizes)));
					width: $particleSize;
					height: $particleSize;
					border-radius: $particleSize;
					$blurRadius: (random() + 0.5) * $particleSize * 0.5;
					$x: if(random() > 0.5, -1, 1);
					box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor;
				}
			}
		}
	}

	@keyframes move {
		100% {
			transform: translate3d(0, 0, 1px) rotate(360deg);
		}
	}
</style>
