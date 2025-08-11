import { c as create_ssr_component, v as validate_component } from '../../../../chunks/index.js';
import { P as PostHeader, B as BlogImage } from '../../../../chunks/BlogImage.js';
import { B as BlogGallery } from '../../../../chunks/BlogGallery.js';
const snoo1 = '/_app/immutable/assets/reddit-snoo-ec51fc36.jpg';
const snoo2 = '/_app/immutable/assets/reddit-snoo-2-c2caef1c.jpg';
const snoo3 = '/_app/immutable/assets/reddit-snoo-3-cf6a3c77.jpg';
const coffee = '/_app/immutable/assets/reddit-coffee-a82d9093.jpg';
const baseball = '/_app/immutable/assets/reddit-baseball-b636588d.jpg';
const escape = '/_app/immutable/assets/reddit-escape-d6587e23.jpg';
const pride = '/_app/immutable/assets/reddit-pride-46a6f564.jpg';
const fongOn = '/_app/immutable/assets/reddit-fong-on-ec95f740.jpg';
const metadata = {
	title: 'Interning at Reddit (2023)',
	slug: 'reddit-ads-design-2023',
	publishDate: 'OCT 31 2023',
	tags: [{ name: 'internship' }, { name: 'ui/ux' }, { name: 'design' }],
	thumbnail: 'reddit-logo.svg',
	summary:
		'During my summer internship, I worked on three product design projects to simplify the Reddit Ads platform for small businesses, from ad creative to Pixel event integration to viewing performance data. It was a blast :)'
};
const { title, slug, publishDate, tags, thumbnail, summary } = metadata;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(PostHeader, 'PostHeader').$$render(
		$$result,
		{
			title,
			publishDate,
			tags,
			slug,
			thumbnail,
			summary
		},
		{},
		{}
	)}
<p>This past summer, I worked at Reddit on the Ads Design team in New York. I was surrounded by such a talented team of designers, and I was able to learn so much for working with them! The Ads team at Reddit is separated into several verticals, and I worked on three different projects that spanned the Measurement, Growth, and Reporting teams. It was a load of fun!</p>
<p>Before I begin, I wanted to thank everyone on the Reddit Ads and HR teams who made this summer so incredible. Thank you to my mentor <strong>Gordon</strong> and manager <strong>Jen</strong> helped me to scout valuable projects and prepared me to put in my best throughout the summer. Also, thank you to my wonderful team members on each of my projects (Cameron, Ein, Sarah, Nahva, and more) and my intern friends. You guys rock! Thank you to <strong>Deitrick</strong> and <strong>Waverly</strong> for planning amazing in-person intern events. I loved every second of it.</p>
<h2>Work projects</h2>
<p>I unfortunately can’t share too much work here, as my work was under a non-disclosure agreement, but I had a lot of fun developing solutions for three of ths Reddit Ads teams. The short of it is:</p>
<ol><li>An <strong>Image Scraper</strong> that was built into the Reddit Ads “Simple Create” flow, which scraped images from the client’s website to be used in ad creative with just the click of a button</li>
<li>A <strong>Pixel Event Setup</strong> overhaul, which reimaged the existing user experience to set up the Reddit Pixel on an advertiser’s website and receive conversion event data (e.g. clicks, views, searches)</li>
<li>Explorations of new layouts and data visualization features for the <strong>Reddit Ads home dashboard</strong>, especially incorporating data from breakdowns and insights.</li></ol>
<p>My work centered around improving the Reddit Ads experience for small business owners, who don’t typically have the same capacity and prior knowledge about advertising on social platforms. When these features are launched publicly, I’ll be sure to include more information and screenshots here.</p>
<h2>Exciting non-work things</h2>
<p>After a half-remote internship in 2022 (mostly due to the lingering effects of COVID shutdowns), I felt so lucky to be surrounded by fellow Reddit interns every day in the New York office. I loved the community so much, and Reddit’s in-person programming (both internship and NYC office) made it even better by planning special activities for us. Here are some delightful moments:</p>
${validate_component(BlogGallery, 'BlogGallery').$$render(
	$$result,
	{ columns: '3' },
	{},
	{
		default: () => {
			return `${validate_component(BlogImage, 'BlogImage').$$render(
				$$result,
				{
					className: 'gallery-img',
					src: snoo1,
					caption: "Reddit NYC's MVP, the little Snoo plush! He held down the fort."
				},
				{},
				{}
			)}
    ${validate_component(BlogImage, 'BlogImage').$$render(
			$$result,
			{
				className: 'gallery-img',
				src: snoo2,
				caption: "Real, live Snoo at Reddit's 18th Cakeday party!"
			},
			{},
			{}
		)}
    ${validate_component(BlogImage, 'BlogImage').$$render(
			$$result,
			{
				className: 'gallery-img',
				src: snoo3,
				caption: 'Snoo in candy form, when Reddit brought in a themed ice cream cart :)'
			},
			{},
			{}
		)}`;
		}
	}
)}
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
					src: baseball,
					caption:
						'We watched the Yankees and the Mets as an intern class, and I learned about baseball (feat. Olivia)!'
				},
				{},
				{}
			)}
    ${validate_component(BlogImage, 'BlogImage').$$render(
			$$result,
			{
				className: 'gallery-img',
				src: escape,
				caption: 'When our intern group rocked a museum heist escape room >:)'
			},
			{},
			{}
		)}`;
		}
	}
)}
${validate_component(BlogGallery, 'BlogGallery').$$render(
	$$result,
	{ columns: '3' },
	{},
	{
		default: () => {
			return `${validate_component(BlogImage, 'BlogImage').$$render(
				$$result,
				{
					className: 'gallery-img',
					src: fongOn,
					caption: 'One of my favorite food places in New York, Fong On! A perfect post-work meal.'
				},
				{},
				{}
			)}
    ${validate_component(BlogImage, 'BlogImage').$$render(
			$$result,
			{
				className: 'gallery-img',
				src: pride,
				caption:
					"Adorable mini pride donuts (including vegan ones!) for Reddit's office celebration."
			},
			{},
			{}
		)}
    ${validate_component(BlogImage, 'BlogImage').$$render(
			$$result,
			{
				className: 'gallery-img',
				src: coffee,
				caption: 'Me and my coffee addiction from the 33rd floor.'
			},
			{},
			{}
		)}`;
		}
	}
)}
<p>I can also say that I’ve officially worked in the tallest building in the western hemisphere. Thank you, Condé Nast!</p>`;
});
export { Page as default, metadata };
