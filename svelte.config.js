import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],

	kit: {
		adapter: vercel()
	},

	preprocess: [
		preprocess({
			scss: {}
		}),
		mdsvex({ extensions: ['.md', '.svx'] })
	]
};

export default config;
