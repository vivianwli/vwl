import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { P as PostHeader, B as BlogImage } from "../../../../chunks/BlogImage.js";
const mathyProtest = "/_app/immutable/assets/mathy-protest-1714f698.png";
const metadata = {
  "title": "How Michelle Feng defies math academia norms",
  "slug": "michelle-feng",
  "publishDate": "FEB 1 2020",
  "tags": [{ "name": "interview" }],
  "thumbnail": "mathy-protest.png",
  "summary": "Michelle Feng explains how she discovered and became passionate about applied topology in the context of politics and social justice."
};
const { title, slug, publishDate, tags, thumbnail, summary } = metadata;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PostHeader, "PostHeader").$$render(
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
<p>When fifth year UCLA PhD student Michelle Feng initially entered undergraduate college as a theoretical math major, she wasn’t expecting a future out of the ordinary. In fact, math seemed like the logical path to take simply because she performed well in math classes growing up. It wasn’t until graduate school that she discovered—and became passionate about—the field she works in today: applied topology in the context of social justice.</p>
<p>As a teen, Feng developed a deep interest in number theory. She was fascinated by the idea that fundamental problems are simple to understand, yet still remain unsolved by the world’s greatest mathematicians. In the same vein, she found the nature of abstract shapes satisfying, and was drawn to abstract algebra and applied topology.</p>
<p>Despite loving math, Feng emerged from her undergraduate years at the University of Chicago disillusioned by the elitist culture that surrounded the field of theoretical mathematics. She had very few female and queer students in her math classes and the barriers for marginalized groups discouraged her from enjoying the space. “People would comment on my outfits or my appearance which made me really uncomfortable, and that turned me away from math for a long time,” she said.</p>
<p>Perhaps affected by her isolation as a minority in her classes, Feng became interested in social justice as an undergraduate. Required readings in her sociology classes introduced Feng to new ideas in feminism and queer theory, and she became increasingly involved in online social justice communities. For Feng, the combination of being in a new place and having ample time to spend on the internet led to her interest in activism as a passion beyond math. “It was a perfect storm of being exposed to these ideas for the first time, at a time when suddenly they were relevant to me,” she said.</p>
<p>Feng explained that minorities exist in math fields primarily due to socioeconomic reasons. Like peeling back the layers of an onion, lack of access to the field starts from the roots of childhood. She mentioned that students who pursue math in graduate studies struggle to support a family with their student salaries. Even before considering graduate school, paying for undergraduate college is already enough to deter students from poorer communities from math academia. Deeper into the core of the onion, the lack of resources, teachers, and advanced courses at their primary and secondary schools leave socioeconomically disadvantaged students in the dust.</p>
<p>For marginalized students that make it past those socioeconomic barriers, the challenge then lies in playing catch-up, and dealing with the alienation and lack of a community. “Even if people are nice to you, it can be really uncomfortable and isolating,” she said. “If you feel like you don’t belong in this community, you might just leave.”</p>
<p>Her frustration with the elitism and marginalization in college led Feng into the workforce for a year after graduating with her degree in Mathematics. She worked at a financial modeling company, developing mathematical models for a variety of financial services.</p>
<p>While working, Feng was also looking for ways to volunteer with the Black Lives Matter movement, which was gaining momentum at the time. She discovered that many organizations were looking for core competencies in analyzing data and quickly put the pieces together—she wanted to continue doing quantitative work, but she also recognized her enthusiasm for activism and social justice. “That’s when I made the connection that there’s actually a need in these movements for people who are statistically literate, so I started looking into going back to grad school,” she said.</p>
<p>Feng became a graduate student at UCLA, where she transitioned to an applied math major. She now works in applied topology, where she analyzes the shapes of mathematical spaces, specifically with applications to big data that might come in the form of political maps, voting maps, electoral maps, and segregation distribution.</p>
${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: mathyProtest,
      caption: "Illustration of BLM protesters on a mathy surface. (Source: me!)"
    },
    {},
    {}
  )}
<p>For Feng, the power of mathematical tools lies in their ability to interpret and understand human patterns, making them extraordinarily useful in the context of social activism. In her career, she hopes to elucidate the automated procedures for processing big data, especially in terms of developing methods for understanding discrimination and being able to explain analytical methods with transparency. Feng proposed the key question she aims to address: “If we think we’re seeing a pattern, can we confirm that quantitatively, and not just glance at it with our eyeballs—or even worse, have a computer glance at it?”</p>
<p>In fact, Feng noted that math itself is part of the solution for solving the demographic imbalances in math fields. She believes more departments should be open to conducting actual statistical analyses in their programs, whether it be verifying claims that women might be passing graduate school qualifying exams at lower rates than men or that they’re taking less advanced math classes. Collecting data about these issues would open the doors to designing policies that could actually fix them. “A good first step would be to investigate what your numbers are, and then maybe try to explain why,” she said.</p>
<p>Feng has remained plugged into online outlets, which she attributes to being involved in both social justice and data science spaces. In recent years, Feng has spent time on Twitter with the racial justice activism community and on Youtube with ideas regarding gender. Last year, Feng became more involved in gerrymandering analysis, and she’s since spent time reading about legal theory and postmodernist theory.</p>
<p>Not only did Feng overcome obstacles as minority in her math classes, she was able to later transform those struggles into a career that focuses on helping others and promoting social justice. Her work in analyzing discrimination and segregation using mathematical tools paves the way for policies geared at resolving these prevalent issues, and inspires others to find where their passions may intersect with a passion for mathematics.</p>`;
});
export {
  Page as default,
  metadata
};
