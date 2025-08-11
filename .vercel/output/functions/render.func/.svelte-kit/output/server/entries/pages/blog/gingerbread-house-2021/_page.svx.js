import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { P as PostHeader, B as BlogImage } from "../../../../chunks/BlogImage.js";
import { B as BlogGallery } from "../../../../chunks/BlogGallery.js";
const gingerbread1 = "/_app/immutable/assets/gingerbread-1-baea9cb1.jpg";
const gingerbread2 = "/_app/immutable/assets/gingerbread-2-9448f9ca.jpg";
const gingerbread3 = "/_app/immutable/assets/gingerbread-3-11ae6a6e.jpg";
const gingerbread4 = "/_app/immutable/assets/gingerbread-4-6b69c9ae.jpg";
const gingerbread5 = "/_app/immutable/assets/gingerbread-5-0f03423b.jpg";
const gingerbread8 = "/_app/immutable/assets/gingerbread-8-447625a3.jpg";
const gingerbread6 = "/_app/immutable/assets/gingerbread-6-e4ddf410.jpg";
const gingerbread7 = "/_app/immutable/assets/gingerbread-7-e1fad775.jpg";
const metadata = {
  "hidden": true,
  "title": "A four-day gingerbread house",
  "slug": "gingerbread-house-2021",
  "publishDate": "JAN 26 2022",
  "tags": [{ "name": "food" }, { "name": "art" }],
  "thumbnail": "gingerbread-5.jpg",
  "summary": "Jason and I built a gingerbread house from scratch—an incredibly deliberate process from research to construction to reflection. We gave our a photoshoot, too."
};
const { hidden, title, slug, publishDate, tags, thumbnail, summary } = metadata;
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
  )}
<p>Here’s the gingerbread house that I made this year.</p>
${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: gingerbread5,
      caption: "Our magnificent gingerbread house during sunset hour."
    },
    {},
    {}
  )}
<p>Now, how did we create this beauty?</p>
<h2>Day 0</h2>
<p>We started with <a href="${"https://www.pinterest.com/teacupkittie/gingerbread-house/"}" rel="${"nofollow"}">a Pinterest board</a>. Hurrah! We had a blueprint. Specifically, we were looking at intricate designs made with simple ingredients—less clutter from colorful candies, and more embellishments of royal icing.</p>
<p>In our research, we also took to observing media. We watched the Great British Bake Off (Holidays edition!), Claire Saffitz’s <a href="${"https://www.youtube.com/watch?v=lB_VOwKiRjE"}" rel="${"nofollow"}">attempt to make the greatest gingerbread house</a>, <a href="${"https://www.youtube.com/watch?v=ksgkpdxPPy8"}" rel="${"nofollow"}">year one</a> <em>and</em> <a href="${"https://www.youtube.com/watch?v=_SBSSfbih8U"}" rel="${"nofollow"}">year two</a> of the NYT Cooking Gingerbread Showdown. I’d also been passively consuming this content for years. It was a bucket list item of mine to build a gingerbread house. The time had come.</p>
<p>We also surveyed the vast marketplace of gingerbread house recipes. It needed to be delicious, yet possess undoubtable structural integrity. It proved to be quite the challenge, but we were inspired by Claire Saffitz’s notably thick walls. More than anything, we wanted our house to stay upright. Surely, these walls wouldn’t fall. We used these resources:</p>
<ul><li><a href="${"https://cooking.nytimes.com/guides/47-how-to-make-a-gingerbread-house"}" rel="${"nofollow"}">Gingerbread house recipe</a> from NYT cooking</li>
<li><a href="${"https://s3.documentcloud.org/documents/4321014/Template-for-a-Gingerbread-House.pdf"}" rel="${"nofollow"}">Gingerbread house pattern</a> from NYT cooking</li>
<li><a href="${"https://food52.com/recipes/32341-gingerbread-house-glue"}" rel="${"nofollow"}">Royal icing recipe</a> from Food52</li>
<li><a href="${"https://www.wilton.com/how-to-make-a-candy-stained-glass-window/WLTECH-7845.html"}" rel="${"nofollow"}">Stained glass windows guide</a> from Wilton</li></ul>
<h2>Day 1</h2>
<p>After grocery shopping, we made the dough, split into two identical batches as recommended by NYT and Claire. Into the fridge overnight!</p>
<h2>Day 2</h2>
<p>We baked the gingerbread and cut it after cooling. Some recipes recommend to cut the gingerbread while the slabs are still warm, but the NYT recipe instructed us to wait for the gingerbread to cool (trust🤞🏻). <em>Spoiler alert:</em> it was still possible to cut the gingerbread nearly two weeks after, when we realized that we needed to cut windows. Regardless of the timeframe, we just needed to be careful while cutting. Cutting cooled gingerbread was a success!</p>
<h2>Day 3</h2>
<p>The magic began here—roughly 14 days after Day 2 (drying out for structural integrity). We crushed 15 jolly ranchers and spread little clumps of each color in each window frame, aiming for one blue/purple, one green, and one pink/red. Some of our slabs actually had a bit of concavity to them, so they wouldn’t lie flat on the baking sheet. To avoid having the melted jolly ranchers seep down under the slab, we placed a little wads of paper towel underneath our silicone mat to prop the slab corners up. It worked! The stained glass candy windows were absolutely beautiful when held up to the light. We bought flickering LED tea lights to illuminate the windows from inside the house :)</p>
<p>We also whipped up the royal icing and embarked on the laborious journey of icing the individual pieces: the scalloped roof shingles, the decorative foliage, and the window frame details. These would dry overnight before we put the house together, eliminating any final-day smudge disasters.</p>
<h2>Day 4</h2>
<p>Time to assemble! Honestly, it was pretty seamless. The icing was sturdy and nothing fell. I chalk this success up the immense patience that we have (or maybe exhaustion). We let the slabs dry—first the front and sides, then the back, and finally one roof after the other.</p>
<p>For the decorations, we added a row of spice drops along the roof, a spice drop Christmas tree (courtesy of a very abnormally large spice drop and some pearlescent nonpareils), royal icing icicles, and candy canes for the front yard.</p>
<p>The final dusting of powdered sugar across the rooftop and window sills brought the scene to life. After admiring our creation in real time, we gave it a photoshoot. The moment you’ve been waiting for…</p>
<h2>Our magnum opus</h2>
${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: gingerbread1,
          caption: "Gingerbread house up close and personal"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: gingerbread2,
          caption: "Gingerbread house (back) in ambient indoor lighting."
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: gingerbread3,
          caption: "Gingerbread house (front) in ambient indoor lighting."
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: gingerbread4,
          caption: "Gingerbread house (front) during sunset hour."
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: gingerbread5,
          caption: "Gingerbread house (front) during sunset hour."
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: gingerbread6,
          caption: "The gingerbread house and I in the chilly outdoors!"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: gingerbread7,
          caption: "Spice drop rooftop in the crisp winter air."
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: gingerbread8,
          caption: "Gingerbread house (front) in the crisp winter air."
        },
        {},
        {}
      )}`;
    }
  })}
<p>I also shot and edited this stop motion video. Enjoy!</p>
<div class="${"iframe-container"}"><iframe class="${"iframe"}" src="${"https://www.youtube.com/embed/b8QaIJUQYi4"}"></iframe></div>
<h2>Reflections</h2>
<ol><li>Creating the detailed icing decorations would have certainly been easier if we used a thinner royal icing. Ultra-thick royal icing is a must for the construction, but it was rather arduous to pipe because it was so dense. The royal icing icicles were especially difficult because they formed droplets instead of sharp ends—perhaps using a thinner icing would help with this, too.</li>
<li>We made our door just a <em>tiny</em> but too small (based on the NYT pattern), such that the LED light would not be able to come in and out of the gingerbread house. So, those lights will flicker incessantly until they go out for good. If you’re adding lights, make the door bigger!</li>
<li>Buy a pack of 40 mini candy canes with the expectation that you’ll really only be able to salvage a ~10. They often come cracked, and they crack <strong>really</strong> easily.</li></ol>
<p>See you next year for another gingerbread house (?) 🥳</p>`;
});
export {
  Page as default,
  metadata
};
