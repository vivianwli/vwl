import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { P as PostHeader, B as BlogImage } from "../../../../chunks/BlogImage.js";
import { B as BlogGallery } from "../../../../chunks/BlogGallery.js";
const brainstorm = "/_app/immutable/assets/pikquik-brainstorm-21586064.png";
const interview1 = "/_app/immutable/assets/pikquik-interview-1-4014d4a9.png";
const interview2 = "/_app/immutable/assets/pikquik-interview-2-b54ae325.png";
const interview3 = "/_app/immutable/assets/pikquik-interview-3-21a025b7.png";
const ideate = "/_app/immutable/assets/pikquik-ideate-69611df8.png";
const synthesize = "/_app/immutable/assets/pikquik-synthesize-760d896c.png";
const proto1 = "/_app/immutable/assets/pikquik-proto-c8b49604.png";
const proto2 = "/_app/immutable/assets/pikquik-proto-2-c1d95090.png";
const proto3 = "/_app/immutable/assets/pikquik-proto-3-d58b56b3.png";
const moodboard = "/_app/immutable/assets/pikquik-moodboard-9372d171.png";
const appA1 = "/_app/immutable/assets/pikquik-app-a-1-76fbabf1.png";
const appA2 = "/_app/immutable/assets/pikquik-app-a-2-1cb30300.png";
const appA3 = "/_app/immutable/assets/pikquik-app-a-3-5502c69c.png";
const appA4 = "/_app/immutable/assets/pikquik-app-a-4-cdefce1e.png";
const appB1 = "/_app/immutable/assets/pikquik-app-b-1-37a829c6.png";
const appB2 = "/_app/immutable/assets/pikquik-app-b-2-bfe66719.png";
const appB3 = "/_app/immutable/assets/pikquik-app-b-3-339c7456.png";
const appB4 = "/_app/immutable/assets/pikquik-app-b-4-28e3c2fc.png";
const appC1 = "/_app/immutable/assets/pikquik-app-c-1-0f568ccc.png";
const appC2 = "/_app/immutable/assets/pikquik-app-c-2-71695024.png";
const appC3 = "/_app/immutable/assets/pikquik-app-c-3-3e01f0f3.png";
const appC4 = "/_app/immutable/assets/pikquik-app-c-4-6d7778ae.png";
const graph = "/_app/immutable/assets/pikquik-graph-7b4540cd.png";
const team = "/_app/immutable/assets/pikquik-team-02bd8958.png";
const metadata = {
  "title": "Pikquik case study (ACAD 324 final project)",
  "slug": "pikquik",
  "publishDate": "OCT 1 2023",
  "tags": [{ "name": "ui/ux" }, { "name": "design" }],
  "thumbnail": "piquik.svg",
  "summary": "A walkthrough of my team's final project for ACAD 324, Pikquik: a spunky UI/UX design for a festival food app."
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
  )}
<p>During Fall 2022, I took a class as a part of my major, The Practice of Design: Ideation to Innovation (ACAD 324). Our final project sought to determine a niche problem space, design a solution, and then evaluate that solution. We tackled the problem in teams of 5 or 6 students each, for about a month. Thanks so much to <strong>Iris, Jack, James, and Noy,</strong> for being wonderful teammates, and to <strong>Professor Davina Wolter</strong> for leading the class. This was definitely not a solo mission. I’m excited to discuss the process behind our final product, Pikquik, a physical stand and mobile app for efficient and fun festival food distribution.</p>
<p>Don’t want to read the whole thing? <a href="${"https://www.figma.com/proto/soCqCiWy7kz8EsEVEjbmYx/ACAD-324%3A-Pikquik?page-id=0%3A1&type=design&node-id=1-79&viewport=1349%2C326%2C0.04&t=p19qoyQXBc0tKkCW-1&scaling=scale-down&starting-point-node-id=1%3A79&mode=design"}" rel="${"nofollow"}">Check out the final documentation Figma here.</a></p>
<h2>Step A: analyze and define</h2>
<p>Before we began, our team’s scope was restricted to the organization of physical space (still a very generous scope). We jammed on different interpretations of “physical spaces” to develop niche definitions to explore within. We briefly discussed each idea, voted on our favorites, and decided to focus our research on crowd safety at music festivals. </p>
${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      className: "half-img",
      src: brainstorm,
      caption: "We came up with all sorts of ideas on FigJam, from the dining halls to porta potties to public transit."
    },
    {},
    {}
  )}
<p>After settling within the festival experience scope, we developed our “how might we” statements and problem statement. These were centered around the juxtaposition between a festival’s purpose and its frequently unsafe crowds: that which brings a bunch of fun-loving, music-loving people together, yet potentially leads those same people to getting lost or phsyically crushed.</p>
<ul><li><strong>How Might We…</strong> address a problem we both uniquely understand and can apply a multifaceted mindset towards?</li>
<li><strong>Problem Statement</strong>: Festivals should be delightful experiences, yet the spaces they occupy are often the opposite.</li></ul>
<p>We also conducted a few interviews while developing these statements, which echoed the sentiment that festivals can be overwhelming and difficult to navigate. Huzzah! A physical space that could benefit from organization.</p>
${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: interview1,
          caption: "An interview conducted with Tucker Gannon, a sophomore at USC."
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: interview2,
          caption: "An interview conducted with Hanson Leung, a junior at USC."
        },
        {},
        {}
      )}`;
    }
  })}
${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: interview3,
      caption: "An interview conducted with Justin Chang, class of 2021."
    },
    {},
    {}
  )}
<h2>Step B: ideate and select</h2>
<p>After defining a problem space, we set to work with ideating potential solutions. We tried multiple different brainstorming methods: encouraging crazy ideas, making forced connections, and exploring “what if” scenarios.</p>
<p>During this time, we also pivoted to focus on the problem of parking at festivals. We chose this new area based on new interviews that highlighted its importants, and we still stuck to the previous theme of optimizing the “less fun” parts of a fast-paced, high-energy festival experience.</p>
${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: ideate,
          caption: "Our idea board, centered around blue sticky note themes."
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: synthesize,
          caption: "Our thematically grouped ideas!"
        },
        {},
        {}
      )}`;
    }
  })}
<p>Some hilarious ideas that came out were car vending machines, artist-themed parking areas, and even inflatable hamster balls to protect personal space. After grouping these ideas into central themes, we selected three potential solutions:</p>
<ul><li><strong>Solution 1:</strong> Remove humans from the equation. Expedite the leaving process by creating an automated valet system that retreives cars.</li>
<li><strong>Solution 2:</strong> Improve the old. Redesign the structural and signage systems in current parking lots.</li>
<li><strong>Solution 3:</strong> Make it part of the experience. Coordinate the parking structures with certain acts and performers.</li></ul>
<h2>Step C: implementation and brand</h2>
<p>Somehow, we pivoted again! Inspired by our previous goal to alleviate congestion and traffic when leaving a festival parking lot, we also heard quite a lot from interviewees about how difficult it is to buy food at a festival. Festival-goers have to leave the stage areas with their favorite performing artists just to stand in an egregiously long line for expensive food. This time cost is uniquely important because people have paid so much to be at an event like Coachella or Lollapalooza, and they deserve to make the most of their money. We wanted to make this process faster and more fun, so that festival-goers would not only have fun while ordering their food, but they’d also be able to return to the main attractions faster.</p>
<p>Our new solution was an automated dispensary of fresh food, where users could order food from anywhere in the festival space using a mobile app, and then pick it up at a predetermined time from a locker-like area. This would control foot traffic in the vicinity of the food area and allow vendors to properly estimate demand throughout the duration of the event. Vendor workers would be able to make food on one side of the booth, and place the individual orders into lockers, where users could grab their food from the other side. Here are some of the prototypes we made, as well as our moodboard! Physical prototypes courtesy of Noy and Jack :)</p>
${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: proto2,
      caption: "A wooden mini-mockup of the food stand, with lockers facing the festival-goers."
    },
    {},
    {}
  )}
    
${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: proto1,
      caption: "A blender render of the locker's two-sided functionality: one for festival-goers, and one for food workers."
    },
    {},
    {}
  )}
${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: moodboard,
      caption: "Visual design inspiration: neon colors and bold shapes, like Gov Ball!"
    },
    {},
    {}
  )}
<p>Iris and I also designed our first wireframes for the food-ordering app. We came up with two visual prototypes to be evaluated:</p>
${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "4" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: appA1,
          caption: "Prototype A: initial menu"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: appA2,
          caption: "Prototype A: confirm order"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: appA3,
          caption: "Prototype A: pickup information"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: appA4,
          caption: "Prototype A: pickup ready!"
        },
        {},
        {}
      )}`;
    }
  })}
${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "4" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: appB1,
          caption: "Prototype B: initial menu"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: appB2,
          caption: "Prototype B: view individual item"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: appB3,
          caption: "Prototype B: confirm order"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: appB4,
          caption: "Prototype B: picking ready!"
        },
        {},
        {}
      )}`;
    }
  })}
<p>We chose to name the product “pikquik,” since eating at a festival is outdoors and kind of like a picnic, and we also wanted it to be “quick” and seamless. Hence, “pik-quik”!</p>
<h2>Step D: evaluation</h2>
<p>During our evaluation process, we put our visual and physical prototypes by asking potential users (and our professor) for their opinions. For the physical prototype, we were encouraged to explore contact-less options, so that the user would not have to pull a door handle. Instead, they could tap a button from their phone app to activate a sliding door. We were also asked to create a full-size prototype, which we gladly did.</p>
${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      className: "half-img",
      src: proto3,
      caption: "A full-size prototype of just one column of lockers."
    },
    {},
    {}
  )}
<p>For the visual app, we brought elements of both prototypes together. Certain features that we decided to include in the final design included:</p>
<ul><li>locational and time features, such as selection fields for pickup details, the map to indicate the pickup station, and the timer countdown</li>
<li>a swiping passcode feature, which creates friction for users and ensures that their action is intentional, especially when they might be inebriated or distracted at a festival</li>
<li>pictures to show the food items on the initial menu</li>
<li>an animation to match the sliding door function that is occuring in real life</li></ul>
<p>We also incorporated our moodboard into our visual design! These are just a few snapshots, but you can view the Figma with the <a href="${"(https://www.figma.com/proto/soCqCiWy7kz8EsEVEjbmYx/ACAD-324%3A-Pikquik?page-id=0%3A1&type=design&node-id=1-79&viewport=1349%2C326%2C0.04&t=p19qoyQXBc0tKkCW-1&scaling=scale-down&starting-point-node-id=1%3A79&mode=design)"}">final documentation and mockups here</a>.</p>
${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "4" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: appC1,
          caption: "Prototype B: initial menu"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: appC2,
          caption: "Prototype B: confirm order"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: appC3,
          caption: "Prototype B: pickup information"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: appC4,
          caption: "Prototype B: pickup ready!"
        },
        {},
        {}
      )}`;
    }
  })}
<p>If we had more time to work on this project, I would have loved to add many more of the logistical features that would make sense for this app, such as errors and warnings when users are not near the pickup zone, or if they fail the swiping passcode check, or if they need to communicate with the vendor. Moreover, I’d love to further explore the payment UI/UX for the app. Where would they see and modify this information? What would integrations with Paypal and Apple Pay look like? Should users load money into their digital wallet as part of a separate user flow?</p>
<p>As another part of our evaluation, we also sent out a survey to our target demographic (GenZ festival-goers). We asked directed questions to reaffirm the most frustrating parts of the festival experience. </p>
${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      src: graph,
      caption: "Auto-generated graphs from Google Forms."
    },
    {},
    {}
  )}
<p>From this survey, we learned that <strong>92.3 percent</strong> of respondees viewed their concessions experience as at least moderately important, <strong>all respondees</strong> valued concessions speed, and <strong>58.8 percent</strong> of respondees found long lines to be their least favorite part of the festival experience. Moreover, it seemed like Pikquik could very well be the answer, as at least <strong>76.5 percent</strong> of respondees would be moderately likely to purchase food at a festival through an app. Success!</p>
<h2>Final notes</h2>
<p><a href="${"https://www.figma.com/proto/soCqCiWy7kz8EsEVEjbmYx/ACAD-324%3A-Pikquik?page-id=0%3A1&type=design&node-id=1-79&viewport=1349%2C326%2C0.04&t=p19qoyQXBc0tKkCW-1&scaling=scale-down&starting-point-node-id=1%3A79&mode=design"}" rel="${"nofollow"}">FINAL DOCUMENTATION HERE!!!</a> Please click and take a look, it’s awesome!</p>
<p>What a ride of a one-month project! My team was instrumental to bringing this idea to life, and we also learned so much about design research throughout the process. We’ve tabled it for now, but maybe you’ll see Pikquik someday in the future!</p>
${validate_component(BlogImage, "BlogImage").$$render($$result, { src: team, caption: "My lovely team!" }, {}, {})}`;
});
export {
  Page as default,
  metadata
};
