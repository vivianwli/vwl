const posts = /* @__PURE__ */ Object.assign({
	'./dickinson-woolf/+page.svx': () => import('./dickinson-woolf/_page.svx.js'),
	'./fruit-blobs/+page.svx': () => import('./fruit-blobs/_page.svx.js'),
	'./gingerbread-house-2021/+page.svx': () => import('./gingerbread-house-2021/_page.svx.js'),
	'./hacksc-svelte-workshop/+page.svx': () => import('./hacksc-svelte-workshop/_page.svx.js'),
	'./hamster-wheel/+page.svx': () => import('./hamster-wheel/_page.svx.js'),
	'./made-with-svelte-kit/+page.svx': () => import('./made-with-svelte-kit/_page.svx.js'),
	'./michelle-feng/+page.svx': () => import('./michelle-feng/_page.svx.js'),
	'./new-york-times-2022/+page.svx': () => import('./new-york-times-2022/_page.svx.js'),
	'./oat-milk-guide/+page.svx': () => import('./oat-milk-guide/_page.svx.js'),
	'./pikquik/+page.svx': () => import('./pikquik/_page.svx.js'),
	'./reddit-ads-design-2023/+page.svx': () => import('./reddit-ads-design-2023/_page.svx.js'),
	'./redesigning-netlify/+page.svx': () => import('./redesigning-netlify/_page.svx.js'),
	'./sustainable-textiles/+page.svx': () => import('./sustainable-textiles/_page.svx.js')
});
let body = [];
for (const path in posts) {
	body.push(posts[path]().then(({ metadata }) => metadata));
}
async function load() {
	const posts2 = await Promise.all(body);
	return {
		posts: posts2
	};
}
export { load };
