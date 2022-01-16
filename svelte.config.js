import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],

	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			plugins: [imagetools({ force: true })],
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@import "src/variables.scss";'
					}
				}
			}
		}
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@import "src/variables.scss";'
			}
		}),
		mdsvex({ extensions: ['.md', '.svx'] })
	]
};

export default config;
