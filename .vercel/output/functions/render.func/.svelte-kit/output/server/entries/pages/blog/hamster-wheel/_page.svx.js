import { c as create_ssr_component, v as validate_component } from '../../../../chunks/index.js';
import { P as PostHeader, B as BlogImage } from '../../../../chunks/BlogImage.js';
/* empty css                      */ /* empty css                                                            */ const flyingBy =
	'/_app/immutable/assets/flying-by-182db1a9.png';
const metadata = {
	title: 'Transcending the hamster wheel',
	slug: 'hamster-wheel',
	publishDate: 'MAR 22 2023',
	tags: [{ name: 'journal' }],
	thumbnail: 'flying-by-thumbnail.png',
	summary:
		'Reflection on my personal philosophy for a USC class, "The Entrpreneurial Mindset: Taking the Leap." On success, empathy, and finding joy!'
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
<h2>My personal philosophy</h2>
<p>To maximize subjective experience for myself and others. I hope to find joy in my life through gratitude, self-improvement, and a positive outlook on life. I strive to create joy in others’ lives, through my professional work and my personal support. Moreover, I want to be fully present, able to appreciate each moment at its fullest. I want others to feel that our time together is as invaluable and fleeting as it truly is. In the words of Gretchen Rubin: the days are long, but the years are short.</p>
${validate_component(BlogImage, 'BlogImage').$$render($$result, { src: flyingBy }, {}, {})}
<h2>On success</h2>
<p>I’ve always valued my ability to take risks despite the potential for failure. In situations where pride is all that I can lose, the opportunity will always be worthwhile. Many of the most valuable experiences and achievements that I’ve had are a direct result of this mindset, from applying to my dream schools to publishing work in The New York Times. It’s the reason behind the friends that I’ve made, my weightlifting routine, and even being able to sing in my beloved a cappella group. As APL founders Adam and Ryan Goldston noted, there’s so much to gain simply from believing that everything will go your way. I carry this hope and optimism with me as best I can.</p>
<p>I define success by how I grow and learn. Even if I fail at a certain goal, I’ll still take comfort in practicing a skill or learning a lesson. This semester, I did three final round product design interviews over several months. I’d “failed” at getting the role the first two times, and although I felt dejected from the countless hours I spent preparing, I could measurably see the building-block growth between each interview. By the second interview, I’d built a template for my portfolio review slide decks and learned how to navigate a whiteboard design challenge. By the third interview, I’d streamlined my storytelling to bring out the most salient points in each narrative. My past experiences will shape my future actions, and I find that growth to be worth my time. Producer Lauren Neustadter’s tip may be most comforting of all: nobody is watching. When I fail, most people won’t have the care (or overt cruelty) to ridicule me about it. When I succeed, it may be no more than a flash frame on their phone screen.</p>
<p>Yet I still certainly feel pressure to succeed, whether it be because of the trajectory of my past achievements, others’ achievements, or others’ expectations. At the same time, I see others’ value for who they are rather than their achievements. UT Austin professor Dr. Marissa Knox pointed out a contradiction that plagues my mindset: just as we should treat others how we want to be treated, we should also be as kind to ourselves as we would to other people. I’m always the first to reassure someone that rejection isn’t reflective of their worth, and I should view myself that way, too.
NYX Cosmetics founder Toni Ko’s advice also rings true in defiance of comparison. To truly be free, one must detach from three types of judgment: (1) judgment of the self, (2) judgment of others, and (3) judgment of others of the self. I’ve already made great progress toward following my own metrics of success, but I hope to quiet my worries about others’ opinions. As I grow to better understand myself, I hope to embody USC Dean Varun Soni’s resonant advice to trust my own voice.</p>
<h2>On empathy</h2>
<p>My driving value is empathy. Empathy dictates my daily decisions, my interpersonal relationships, my career aspirations, and especially my life philosophy. On a personal level, I hope to make others feel heard and valued. On a broad scale, I want to uplift accessibility and equity, especially for information accessibility.</p>
<p>By extension, I know that I have a love for talking to people. I’ve felt burnout in all other aspects of my life, whether it be writing, coding, cooking, or something else. Drawing upon the support of others and extending my own support has always energized me, no matter how I’m feeling. Communication is an activity that I could never tire of long-term, and it’s a skill that I find innate without training. Interpersonal interaction brings me back to my spark.</p>
<p>I hope to incorporate face-to-face communication in whatever I pursue. Currently, I can primarily see myself in management roles and client touchpoint roles. In light of my investment in education and information, I’d also love to work as a professor, both conducting research in information visualization and also working individually with students. I love getting to know people, and I’d apply that affinity toward understanding users or watching my students grow.</p>
<h2>Looking upward</h2>
<p>“Every action you take is a vote for the type of person you wish to become.” Author James Clear’s words remind me daily of how I want to live my life. I want to be deliberate about how I’m spending my time, doing exactly what I want to do when I want to do it. I hope to live in direct, honest support of my values. As I look forward, I hope to cast my everyday votes toward engaging conversations, good meals, mindful work days, meditative approaches, rejuvenating hugs, and singing out loud, all in service of a broader goal to bring joy to myself and others.</p>`;
});
export { Page as default, metadata };
