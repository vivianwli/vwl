import { c as create_ssr_component, v as validate_component } from '../../../../chunks/index.js';
import { B as BlogImage, P as PostHeader } from '../../../../chunks/BlogImage.js';
/* empty css                      */ const BlogHalfImage_svelte_svelte_type_style_lang = '';
const css = {
	code: '.wrapper.svelte-etu8lb{display:grid;width:100%;grid-template-columns:1fr 1fr;background-color:var(--highlight-color);align-items:center;box-shadow:0 0 1.2rem 0.1rem var(--secondary-subtle-color);margin:4rem -2rem;padding:2rem}@media screen and (max-width: 50rem){.wrapper.svelte-etu8lb{display:block}}',
	map: null
};
const BlogHalfImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { image } = $$props;
	let { caption } = $$props;
	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
		$$bindings.caption(caption);
	$$result.css.add(css);
	return `<div class="${'wrapper svelte-etu8lb'}"><div class="${'text'}">${slots.default ? slots.default({}) : ``}</div>
	${validate_component(BlogImage, 'BlogImage').$$render(
		$$result,
		{
			src: image,
			caption,
			className: 'half-img'
		},
		{},
		{}
	)}
</div>`;
});
const oatMilk = '/_app/immutable/assets/oat-milk-1e8fac81.png';
const brownies = '/_app/immutable/assets/brownies-349f4c60.jpg';
const metadata = {
	title: 'An ultimate guide to oat milk',
	slug: 'oat-milk-guide',
	publishDate: 'AUG 1 2020',
	tags: [{ name: 'food' }],
	thumbnail: 'oat-milk.png',
	summary:
		'There’s always more to learn about homemade oat milk. I detail the lessons I’ve learned, ways to expand upon a foolproof recipe, new delicious flavors, and advice on handling leftover oat pulp.'
};
const { title, slug, publishDate, tags, thumbnail, summary } = metadata;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(PostHeader, 'PostHeader').$$render(
		$$result,
		{
			title,
			publishDate,
			tags,
			thumbnail,
			slug,
			summary
		},
		{},
		{}
	)}
<p>Whether this is your first rodeo or your hundredth, there’s always more to learn about homemade oat milk. Today, I detail the lessons I’ve learned from my many trials and tribulations, ways to expand upon a foolproof recipe, new delicious flavors, and advice on handling leftover oat pulp.</p>
<p>Oat milk is by far my favorite milk, in taste but also so much more. It’s vegan, dairy-free, gluten-free (as long as you use certified GF oats), nut-free, soy-free, and it also saves the environment some heavy lifting. I hope you find this guide useful!</p>
<p> </p>
<h2>Oat milk basics</h2>
<p>I won’t keep you waiting—here’s the recipe! Blend together 4 cups of water, 1 cup of oats, 1 teaspoon of vanilla extract, a pinch of salt, and sweetener to taste. Then, strain the mixture with a tea towel or cheesecloth to separate the oat milk from the oat pulp. Sounds simple, right? I can tell you now that it really <em>is</em> quite simple, but my first couple “experiments” were so messy and subpar that my mom essentially begged me never to make oat milk again.</p>
<p>My ingredients haven’t changed either. I’m not suddenly dishing out hundreds for “gourmet” oats or special gadgets, and I promise that you also won’t need more than basic kitchen staples to make stellar oat milk. So, what’s the secret?</p>
<p>Oats are partially composed of starch granules. When heated (such as while cooking oatmeal), these granules swell as they absorb water, a process otherwise known as starch gelatinization. Gelatinization is common to other starches as well, but it begins in oats at around <a href="${'http://www.cerealsgrains.org/publications/cc/backissues/1996/Documents/73_271.pdf'}" rel="${'nofollow'}">45</a> to <a href="${'https://www.agriculturejournals.cz/publicFiles/297_2010-CJFS.pdf'}" rel="${'nofollow'}">60</a>˚C (a range, because I can’t seem to find sources that agree).</p>
<p>Starch gelatinization explains exactly why my first batch of oat milk came out gummy and slimy. The unreasonably thick oat lava also covered my hands, arms, and counter in a layer of goop. I didn’t deliberately heat the oat milk, but contact with the whirring blender blades and my warm hands led to an unpalatable mess.</p>
<p>Essentially, you’ll want to <strong>optimize the cold environment</strong> while making oat milk to avoid the onset of gelatinization. For me, this optimization looks like refrigerating all ingredients for at least a couple of hours before blending and straining—especially the water and sweetener (I use three soaked medjool dates). In a similar vein, I keep my blending duration to a minimum: 5-10 second increments, with 10 seconds of “rest time” in between. I strain as quickly as possible to get my milk back in the fridge, and I also cool my hands down with ice water before working.</p>
<p>That’s it! Really. Feel free play with the thickness by changing the ratio of oats to water, though I’d say to proceed with caution and adjust little by little. Achieving smooth, creamy, and fully non-slimy oat milk was truly a cathartic experience for me. However, despite the satisfaction of this success, I continued to look beyond and climb to new heights. Next stop: flavored milk!</p>
<p> </p>
<h2>Flavored milk</h2>
<p>After understanding the thickening properties of oats, mastering the basics for an immaculate milk base follows without a sweat. It’s also the hardest part! You really can’t go wrong when experimenting with new flavors. Some of my favorite variations include:</p>
<ul><li>matcha milk tea (1 tbsp of matcha powder)</li>
<li>chocolate milk (2 tbsp of cacao powder)</li>
<li>earl grey milk tea (use steeped tea in lieu of water)</li>
<li>cold brew latte (1 tsp instant coffee)</li>
<li>berry milk (bring berries to a simmer on the stovetop and then cool the liquid mixture in the fridge)</li>
<li>red bean milk (use store-bought paste, or make your own—I used an Instant Pot!)</li>
<li>cinnamon spice milk (1 tsp cinnamon, 1 tsp pumpkin spice)</li></ul>
${validate_component(BlogImage, 'BlogImage').$$render(
	$$result,
	{
		src: oatMilk,
		caption: 'Matcha oat milk and cherry blossoms.'
	},
	{},
	{}
)}
<p>Flavors I haven’t tried (but you definitely should) include black sesame milk and golden milk. Reap the extensive health benefits of turmeric! The doors are wide open, and I trust that you’ll discover even more ingenious flavors.</p>
<p> </p>
<h2>What to do with oat pulp</h2>
<p>Perhaps you now have show-stopping lavender oat milk, but you’re still staring at the leftover pile of oat pulp beside it. Fear not! This slightly slimy glob is actually highly nutritious and easily incorporated into a variety of recipes. I’ve seen people utilize this pulp in dishes from cookies (only for those who eat gluten or have access to a gluten-free baking flour mix, usually) to guacamole, but I usually prefer to throw it in pancake and brownie recipes.
Here’s my brownie recipe. It’s food processor-friendly!</p>
${validate_component(BlogHalfImage, 'BlogHalfImage').$$render(
	$$result,
	{
		image: brownies,
		caption: 'The finished product (brownies!!)'
	},
	{},
	{
		default: () => {
			return `<h3>Ingredients:</h3>
    <ul><li>oat pulp!</li>
        <li><b>3</b> bananas (or another sweetener)</li>
        <li><b>2</b> eggs</li>
        <li><b>¼ cup</b> oil (coconut, olive, etc.)</li>
        <li><b>½ cup</b> nut butter (I use peanut butter powder!)</li>
        <li><b>1 tsp</b> vanilla extract</li>
        <li><b>1 tsp</b> instant coffee powder</li>
        <li><b>1 tsp</b> baking powder</li>
        <li><b>1 tsp</b> cinnamon</li>
        <li><b>¼ tsp</b> salt</li>
        <li><b>1 cup</b> oat flour</li>
        <li><b>1 cup</b> almond flour</li></ul>
    <h3>Instructions:</h3>
    <ol><li>Blend or mix it all together!</li>
        <li>Bake at 350˚F for 25-30 min.</li></ol>`;
		}
	}
)}
<p>If you make slight adjustments to the ratio (such as using ¼ cup sweetener instead of bananas), don’t sweat it! I’ve found that this recipe is extremely forgiving. In fact, you could hike the amount of flour and nut butter to make brownie-cookies instead. My winged attempt turned out amazing, just like the sandwich cookies from ice cream sandwiches.</p>
<p>For pancakes, adding in oat pulp is even more lax. Supplement your current recipe with this pulp for a fiber boost!</p>
<p> </p>
<h2>Additional notes</h2>
<p>While this homemade oat milk is amazing cold or at room temperature, it’ll still cook up when heated. This means no steamy, creamy lattes unless you add stabilizers that prevent gelatinization. The good news is that most store-bought oat milk brands use stabilizers, so I rely Trader Joe’s oat milk for hot drinks instead.</p>
<p>On the other hand, there <em>is</em> a scenario where homemade oat milk is preferable to its store-bought counterpart, namely oat yogurt. Whereas we’re avoiding gelatinization while making oat milk, we actually take advantage of this thickening while making oat yogurt. With most non-dairy milks (almond, cashew, soy), we usually need a thickening agent to give the yogurt structure, whether it be pectin, agar-agar, or something else. Thankfully, oats have this property built in! Homemade oat yogurt effectively follows the same process as oat milk, but you don’t need to keep anything cold. The strained milk mix is simmered on the stove right after, anyway! I use this <a href="${'https://myfermentedfoods.com/how-make-vegan-yogurt/'}" rel="${'nofollow'}">recipe</a>, and it’s continuously served me well. It’s also super simple! Bring your mixture to 180˚F while whisking and without boiling, remove from the heat, and cool (while still whisking) until 115˚F. Finally, stir in the yogurt starter/existing yogurt, ferment in a warm place for at least eight hours, and enjoy!</p>
<p>So, this is it. Oat my goodness! I look forward to the new heights that you’ll bring this information to—new innovative techniques, visionary flavors, and groundbreaking recipes and applications. Wishing you my best :)</p>`;
});
export { Page as default, metadata };
