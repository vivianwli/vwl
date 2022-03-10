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
			optimizeDeps: {
				include: ['highlight.js/lib/core']
			},
			plugins: [imagetools({ force: true })],
			css: {
				preprocessorOptions: {
					scss: {}
				}
			}
		}
	},

	preprocess: [
		preprocess({
			scss: {}
		}),
		mdsvex({ extensions: ['.md', '.svx'] })
	]
};

export default config;
