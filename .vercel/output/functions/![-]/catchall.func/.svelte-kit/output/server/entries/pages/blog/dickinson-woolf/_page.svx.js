import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { P as PostHeader, B as BlogImage } from "../../../../chunks/BlogImage.js";
const dickinson = "/_app/immutable/assets/dickinson-woolf.SqTDXg9o.png";
const metadata = {
  "title": `Emily Dickinson's "Room of One's Own"`,
  "slug": "dickinson-woolf",
  "publishDate": "APR 24 2023",
  "tags": [{ "name": "3D" }, { "name": "art" }, { "name": "design" }],
  "thumbnail": "dickinson-cover.png",
  "summary": "For COLT 374: Women Writers in Europe and America, I created a low poly model that brings together the central themes from both Virginia Woolf and Emily Dickinson's work."
};
const { title, slug, publishDate, tags, thumbnail, summary } = metadata;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PostHeader, "PostHeader").$$render(
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
  )} <p data-svelte-h="svelte-ou3gdh">Here it is, <em>really big</em>:</p> ${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      className: "gallery-img",
      src: dickinson,
      caption: "Low poly render of Emily Dickinson's ficticious room."
    },
    {},
    {}
  )} <p data-svelte-h="svelte-j4mbl2">In Spring 2023, I had the pleasure of taking one of my favorite classes at USC, <strong>COLT 374: Women Writers in Europe and America, taught by Prof. Margaret Rosenthal</strong>. The course explore’s written work from women writers in history, from Marie de France in the 12th century to modern day writers like Jamaica Kincaid. For my creative project at the end of the semester, I developed a low poly model of <strong>Emily Dickinson’s “room of one’s own.”</strong> My project brings together themes from both Dickinson and Virginia Woolf, as I felt particularly struck by Dickinson’s introduction in the <em>National Anthology of Literature by Women</em>. Dickinson was notable for her unwavering commitment to her craft, even if it meant living in near total solitude. As I learned more about Dickinson, I drew connections to Woolf’s ideas presented in her novel, <em>A Room of One’s Own</em>, which inspired this project.</p> <p data-svelte-h="svelte-wej5zm">In <em>A Room of One’s Own</em>, Woolf sets forth the idea that <strong>women need 500 pounds per year and a room of their own</strong> in order to write successfully. Her claim sounds superficial, but these two things represent self-sufficiency and privacy in one’s life. Espcially during Woolf’s time, women were defined by their titles as daughters, wives, and mothers, raised to accommodate the male gaze and constantly caring for their children at home. Money and privacy detach women from their longstanding dependence on gender roles and the men in their lives, enabling them to pursue their work with the same unencumbered spirit as men do.</p> <p data-svelte-h="svelte-ztz938"><strong>Dickinson embodied Woolf’s idea of “a room of one’s own” to the fullest, choosing independence to achieve literary greatness.</strong> She created a perpetual room of her own, both physically in the house that she rarely left, and intellectually by truly indulging the exploration of her mind. In this piece, I visualized Dickinson’s room, which was catered to cultivating an incandescent mind. It is important to note that this is not a historically accurate representation of Dickinson’s actual room, which was famously very bare. Rather, the piece explores elements that symbolize her dedication to “a room of one’s own.”</p> <p data-svelte-h="svelte-aarrj1">Throughout <em>“A Room of One’s Own”</em>, Woolf details anecdotes where her thoughts are interrupted by her physical surroundings. In one section, she is kicked out of a university courtyard because it is only intended for male scholars. In turn, she loses her train of thought that could have grown into an interesting idea. Later on, while she’s eating dinner at the women’s college that she’s meant to lecture at, she finds that it’s impossible to feel carefree and able to discuss intellectual matters when the food at the women’s college tastes so subpar compared to the overflowing luncheons at the men’s college. In contrast, Dickinson has complete control over where she spends time in her room. In a single room, she also has control over the lighting, sound, and anything that might interest her or otherwise distract her. In her solitude, <strong>Dickinson was unbothered by the daily interruptions that a woman might otherwise experience</strong>.</p> <p data-svelte-h="svelte-1w8cdpt">On the desk, Dickinson’s notebook, fountain pen, and ink are laid out on the table, which is the center of her work. Her room includes little to no distractions that are not tied to her poetry. Moreover, I included several US dollar bills and coins on the desk as an allusion to Woolf’s asserted “500 pounds per year.” As calculated, 500 pounds sterling in 1850 equates to roughly 86,116 pounds in 2023, which can be converted into 2,765 USD in 1850 during Dickinson’s time.</p> <p data-svelte-h="svelte-1j8sl59">Throughout the room are loose papers and crumpled sheets. There’s no need for her to keep the room tidy, as she has no one to impress but herself. Moreover, the crumbled sheets portray her high standard for writing, and the constant iterative process that she went through to produce her poetry. <strong>Her room reflects a constant work in progress</strong>.</p> <p data-svelte-h="svelte-1onrbsw">The wall above her bed is lined with countless books, where I imagine that she would be able to reference them throughout the day at her desk, or at night on her bed. The other wall has several framed works, which I intended to be paintings that inspire her poetry. The artwork is a tribute to her work, feeding her exploration of new ideas in existentialism. Moreover, the window right above her desk is meant to give her a direct connection to nature, even though she spends most of her time in the room of her own. Dickinson’s poetry often revolves around nature’s ability to express these abstract ideas, so I wanted to connect her to her source of inspiration. There are no mirrors, because Dickinson is not concerned with others’ opinions of her.</p> <p data-svelte-h="svelte-1sww3kj">Dickinson’s room of one’s own serves as a prime example of Virginia Woolf’s theory. <strong>In most cases, women simply sacrifice their complete dedication to their craft in order to attend to their family and other daily responsibilities. Dickinson proves that shedding these responsibilities can be a valiant thing to do.</strong> Her room symbolizes her inspiration, her lack of distraction, and her incessant affinity for writing poetry.</p>`;
});
export {
  Page as default,
  metadata
};
