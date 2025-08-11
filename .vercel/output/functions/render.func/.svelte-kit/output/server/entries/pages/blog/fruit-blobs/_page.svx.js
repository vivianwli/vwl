import { c as create_ssr_component, v as validate_component } from '../../../../chunks/index.js';
import { P as PostHeader, B as BlogImage } from '../../../../chunks/BlogImage.js';
import { B as BlogGallery } from '../../../../chunks/BlogGallery.js';
const blobs1 = '/_app/immutable/assets/blobberries-9fbc97fa.png';
const blobs2 = '/_app/immutable/assets/blobcitrus-263808cc.png';
const blobs3 = '/_app/immutable/assets/blobsuggestive-4648a53b.png';
const blobs4 = '/_app/immutable/assets/basicbasket-7ec551fe.png';
const metadata = {
	title: 'Fruit & vegetable blob emojis for Discord',
	slug: 'fruit-blobs',
	publishDate: 'JUL 22 2020',
	editDate: 'JAN 4 2021',
	tags: [{ name: 'art' }],
	thumbnail: 'fruit-blobs.png',
	summary:
		'I received a Discord Nitro gift for my birthday month (July!), which ultimately catalyzed the creation of these fruit and vegetable blob emojis.'
};
const { title, slug, publishDate, editDate, tags, thumbnail, summary } = metadata;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(PostHeader, 'PostHeader').$$render(
		$$result,
		{
			title,
			publishDate,
			editDate,
			tags,
			thumbnail,
			slug,
			summary
		},
		{},
		{}
	)}
<p>I received a Discord Nitro gift for my birthday month (July!), which ultimately catalyzed the creation of these fruit and vegetable blob emojis. The day after I received the gift, I started aggressively joining servers to use their emotes globally. Then, I noticed that Blob Hub Studios was actively accepting pack submissions and that there was a crucial demand in the market for fruit blobs, so I took the plunge.</p>
<p>Join my <a href="${'https://discord.gg/AA2pvSU'}" rel="${'nofollow'}">Discord server</a> and use these blob emojis for your self (global use only available for Nitro users)! Additionally, my blobs are copyrighted by Blob Hub Studios. Join the <a href="${'https://discord.gg/yATKMY8'}" rel="${'nofollow'}">larger network</a>, too, which is home to over 12,000 unique blobs. Since submitting this pack, I’ve been named a Blob Designer as part of the Blob Hub Staff. Below are some of my favorite emojis I’ve created!</p>
${validate_component(BlogGallery, 'BlogGallery').$$render(
	$$result,
	{ columns: '2' },
	{},
	{
		default: () => {
			return `${validate_component(BlogImage, 'BlogImage').$$render(
				$$result,
				{
					className: 'gallery-img',
					src: blobs1,
					caption:
						'<b>:blobraspberry:</b> feeling loved and <b>:bloblackberry:</b> rolling its eyes. Twins with very different personalities!'
				},
				{},
				{}
			)}
  ${validate_component(BlogImage, 'BlogImage').$$render(
		$$result,
		{
			className: 'gallery-img',
			src: blobs2,
			caption:
				'An embarrassed <b>:blobgrapefruit:</b>, cool <b>:bloblemon:</b>, and zesty <b>:bloborange:</b>'
		},
		{},
		{}
	)}
  ${validate_component(BlogImage, 'BlogImage').$$render(
		$$result,
		{
			className: 'gallery-img',
			src: blobs3,
			caption: 'Suggestive <b>:blobergine:</b> and <b>:blobpeach:</b>'
		},
		{},
		{}
	)}
  ${validate_component(BlogImage, 'BlogImage').$$render(
		$$result,
		{
			className: 'gallery-img',
			src: blobs4,
			caption:
				'Basic emotions for basic fruits, including <b>:blobapple:</b>, <b>:blobpear</b>, <b>:blobanana:</b>, <b>:blobstrawberry:</b>, and <b>:bloberry:</b>'
		},
		{},
		{}
	)}`;
		}
	}
)}`;
});
export { Page as default, metadata };
