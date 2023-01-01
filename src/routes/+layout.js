// this runs before the layout is rendered, setting key to the URL path
export const load = async ({ url }) => ({
	key: url.pathname
});
