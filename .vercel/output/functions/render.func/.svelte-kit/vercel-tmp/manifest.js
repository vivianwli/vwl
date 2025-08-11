export const manifest = {
	appDir: '_app',
	appPath: '_app',
	assets: new Set([
		'.DS_Store',
		'favicon.svg',
		'thumbnails/bamboo.png',
		'thumbnails/breakthrough.png',
		'thumbnails/climate-tracker.jpg',
		'thumbnails/covid-model.png',
		'thumbnails/dickinson-cover.png',
		'thumbnails/flying-by-thumbnail.png',
		'thumbnails/fruit-blobs.png',
		'thumbnails/gingerbread-5.jpg',
		'thumbnails/haute-greenwashing-post.png',
		'thumbnails/haute-greenwashing.png',
		'thumbnails/mathy-protest.png',
		'thumbnails/netlify.png',
		'thumbnails/nyt-stem-writing.jpg',
		'thumbnails/nyt-thumbnail.png',
		'thumbnails/oat-milk.png',
		'thumbnails/piquik.svg',
		'thumbnails/pudding-thumbnail.png',
		'thumbnails/reddit-logo.svg',
		'thumbnails/svelte-workshop.png',
		'thumbnails/teachers.jfif',
		'thumbnails/technica.jpg',
		'thumbnails/todos-thumbnail.png',
		'thumbnails/ux-confidence.png',
		'thumbnails/vwl-site.png'
	]),
	mimeTypes: { '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' },
	_: {
		entry: {
			file: '_app/immutable/start-b3ab7f7a.js',
			imports: [
				'_app/immutable/start-b3ab7f7a.js',
				'_app/immutable/chunks/index-cf78bce8.js',
				'_app/immutable/chunks/singletons-4a01f613.js',
				'_app/immutable/chunks/index-69919d61.js',
				'_app/immutable/chunks/preload-helper-41c905a7.js'
			],
			stylesheets: [],
			fonts: []
		},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/16.js'),
			() => import('../output/server/nodes/17.js'),
			() => import('../output/server/nodes/18.js'),
			() => import('../output/server/nodes/19.js')
		],
		routes: [
			{
				id: '/',
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: '/blog',
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: '/blog/dickinson-woolf',
				pattern: /^\/blog\/dickinson-woolf\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: '/blog/fruit-blobs',
				pattern: /^\/blog\/fruit-blobs\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: '/blog/gingerbread-house-2021',
				pattern: /^\/blog\/gingerbread-house-2021\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: '/blog/hacksc-svelte-workshop',
				pattern: /^\/blog\/hacksc-svelte-workshop\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: '/blog/hamster-wheel',
				pattern: /^\/blog\/hamster-wheel\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: '/blog/made-with-svelte-kit',
				pattern: /^\/blog\/made-with-svelte-kit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: '/blog/michelle-feng',
				pattern: /^\/blog\/michelle-feng\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: '/blog/new-york-times-2022',
				pattern: /^\/blog\/new-york-times-2022\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: '/blog/oat-milk-guide',
				pattern: /^\/blog\/oat-milk-guide\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: '/blog/pikquik',
				pattern: /^\/blog\/pikquik\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: '/blog/reddit-ads-design-2023',
				pattern: /^\/blog\/reddit-ads-design-2023\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: '/blog/redesigning-netlify',
				pattern: /^\/blog\/redesigning-netlify\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: '/blog/sustainable-textiles',
				pattern: /^\/blog\/sustainable-textiles\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: '/home',
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: '/portfolio',
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: '/resume',
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			}
		],
		matchers: async () => {
			return {};
		}
	}
};
