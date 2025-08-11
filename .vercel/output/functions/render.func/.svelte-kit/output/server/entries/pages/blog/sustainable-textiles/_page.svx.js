import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { P as PostHeader, B as BlogImage } from "../../../../chunks/BlogImage.js";
import { B as BlogGallery } from "../../../../chunks/BlogGallery.js";
const textiles1 = "/_app/immutable/assets/textiles-1-147fa4b8.png";
const textiles2 = "/_app/immutable/assets/textiles-2-db525954.png";
const textiles3 = "/_app/immutable/assets/textiles-3-865b91c1.png";
const metadata = {
  "title": "An antidote to greenwashing",
  "slug": "sustainable-textiles",
  "publishDate": "DEC 3 2021",
  "tags": [{ "name": "fashion" }, { "name": "sustainability" }],
  "thumbnail": "haute-greenwashing-post.png",
  "summary": "Any brand can say they're sustainable. By delving into the various textiles behind sustainable clothing, we strip the power from companies to decide whether a product is environmentally friendly."
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
<p><em>This feature article was first published in Haute Magazine’s “On the Edge” issue. I have posted it to my website to maximize web readability, but please feel free to explore the original <a href="${"https://www.hauteusc.com/ontheedge"}" rel="${"nofollow"}">here</a>, complete with the visual design and photography. Haute is USC’s fashion, arts, and culture magazine.</em></p>
<p> </p>
<h2>Understanding fabrics can help us fight greenwashing</h2>
<p>Any brand can say they’re sustainable. It’s easy to bluff. In recent years, greenwashing — providing misleading claims about environmental impact — has grown prolifically to match skyrocketing consumer demand for sustainable products. It’s illegal, unethical, and it breaches the trust between consumers and brands. Greenwashing isn’t going anywhere anytime soon, but we as consumers can regain control of how dodgy, sketchy marketing scams affect us. Specifically, by delving into the various textiles behind sustainable clothing, we strip the power from companies to decide whether a product is environmentally friendly on our behalf.</p>
<p>Fast fashion brands stand at the center of many consistent greenwashing scandals. As an industry responsible for 10% of global carbon emissions, the need for pushing back is clear. Megan McSherry, a sustainability educator and USC 2020 alumna, cites H&amp;M as a perfect example of greenwashing. “They have their conscious collection with green tags on the clothing,” she says. “But is the business as a whole sustainable? No. Is that conscious line sustainable? No, because they create millions of garments just for that small line every year.”</p>
<p>With regard to educating Gen Z about tackling fast fashion as an individual consumer, McSherry is working at the forefront. Under the internet name ACTEEVISM, she creates content for over 100 thousand followers across TikTok, Instagram, and Youtube. She’s a firm believer that greenwashing persists because people aren’t educationally equipped to catch it. “It’s so easy to say that you’re doing something sustainable, because the general population doesn’t have enough knowledge about environmental science to know when they’re telling the truth,” McSherry says.</p>
${validate_component(BlogGallery, "BlogGallery").$$render($$result, { columns: "2" }, {}, {
    default: () => {
      return `${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: textiles2,
          caption: "Various garment production tools. Cover photo for the article in Haute's Fall 2021 issue. <i>(Photo credit: Quan Pham)</i>"
        },
        {},
        {}
      )}
    ${validate_component(BlogImage, "BlogImage").$$render(
        $$result,
        {
          className: "gallery-img",
          src: textiles3,
          caption: "Pin-holder, fabric squares, thread, safety pins, and measuring tape. <i>(Photo credit: Quan Pham)</i>"
        },
        {},
        {}
      )}`;
    }
  })}
<p> </p>
<h2>Textiles: good and bad</h2>
<p>McSherry explains that textiles play a key role in the industry, both upfront during production and later on in its afterlife. “About 98% of textiles end up in a landfill,” McSherry says. “What is it going to do? Are the dyes going to impact the soil? Is it a petroleum-based product going into the landfill?” Her key questions prompt deeper thought about what happens to our clothing once it’s tossed out of sight.</p>
<p>The top offenders are petroleum-based fabrics, including polyester and nylon. “They’re basically plastic,” McSherry says. “Every time you wash, microplastics are released into the ocean because our washing machines don’t have the capability to filter out teeny-tiny microfibers.” Once they reach the landfill, polyester and nylon take hundreds of years to decompose — the same predicament behind general plastic waste.</p>
<p>While some companies use recycled PET plastic (rPET) to make leggings and swimwear a more sustainable alternative, McSherry points out that it’s still plastic. Moreover, rPET has given companies ways to greenwash. In instances where demand for rPET has increased significantly, companies accommodate by buying brand-new, never-used plastic to make rPET. “Brands are getting sneaky,” McSherry says. “It’s important to look for post-consumer recycled rPET instead of just recycled plastic.”</p>
<p>Lindsey Troop, the Regional Manager at FABSCRAP, also warns against end-of-life dilemmas with spandex. FABSCRAP is a nonprofit organization dedicated to coordinating textile reuse and recycling. 60% of the fabric they receive is directly reused and made available to the public, while another 40% is shredded and turned into shoddy for insulation. “We have to sort out anything that has even 1% of spandex because it will actually melt in the high-heat system and gum up the machinery,” she says.</p>
<p>Volunteers and employees at FABSCRAP instead sort out the spandex scrap and sell it by the pound as scrap packs. They also work with boxing gyms to fill punching bags and with animal shelters to stuff dog pillows. “You have to get really creative with the reuse aspect, and it’s definitely not a long-term solution,” Troop says.</p>
<p>On the other side of the spectrum, organic cotton might seem like the go-to sustainable fabric. After all, it’s organic, isn’t it? Yet McSherry mentions that organic cotton can use more land and water than conventional cotton and other crops. Instead, she cites regenerative cotton practices as a cleaner alternative. “Regenerative cotton practices grow cotton in a way that nourishes the soil instead of soaking every ounce of nutrients from the ground,” McSherry says. Among other natural fibers, hemp is another up-and-coming sustainable option that serves versatile purposes and limits water usage during its cultivation.</p>
<p>Companies like Lenzing are also developing innovative fibers with a lower ecological footprint. Erica Redd is the Business Development Manager for the New York office of Lenzing, the company behind innovative fibers ECOVERO, TENCEL Lyocell, and TENCEL Modal. Redd notes that these three fibers all source their wood from natural forests or sustainable forestry plantations with the highest environmental standards. In fact, tracing the source of ECOVERO, Lenzing’s brand of viscose, is crucial to its sustainability. “There’s dirty viscose out there that people talk about, specifically because you don’t know where it’s coming from,” she says. “Our viscose is traceable, so we have around 50% lower emissions and water impact when compared to a generic viscose.”</p>
<p>TENCEL Modal utilizes the entirety of the wood, recovering around 40% as cellulose and using the remaining 60% to power the plant and help with production. During the process, they also recover sodium sulfate and other chemicals that are sold off into the food industry.</p>
<p>With TENCEL Lyocell, Lenzing is able to recover over 99% of the solvent, losing only 0.6% to steam. “We don’t have to sell it off or anything,” Redd says. “It’s just fully recovered and fully reused every time.” TENCEL Lyocell both biodegrades and composts, actually adding positive value back into the environment.</p>
<p>Beyond fibers, Lenzing is also developing sustainable process innovations such as their REFIBRA technology and Eco Color Technology. REFIBRA technology is designed to give post-consumer cotton scraps another life, chemically recycling them along with virgin TENCEL Lyocell to preserve the fiber’s strength. Redd asserts that REFIBRA is a great example of Lenzing’s commitment to improvement. “When we started REFIBRA, we were only at a 15% mix of pre-consumer cotton waste,” she says. “Now, we’ve increased it to 30% of pre- and post-consumer cotton waste.”</p>
<p>Lenzing’s Eco Color technology provides a more environmentally-friendly method to dye fibers. When the TENCEL Modal is a honey-like consistency during the production process, they add the dye and spin out pre-colored fiber. Eco Colors mitigate the water and dye waste that comes with dyeing the fiber later on. In Austria, if you buy a bag of oranges, it actually comes in a bag that’s made out of our Modal Eco Colors,” Redd says. “You can just put it into your compost and it will biodegrade, which is really cool.”</p>
<p>Moving forward, Redd says being carbon neutral by 2050 is one of Lenzing’s top goals. They’ve started the process by offering carbon-zero fiber for TENCEL Modal, Lyocell, and REFIBRA by purchasing carbon credits and offering certification for brands. “Creating more sustainable products and reinvesting in our fibers is really the future,” Redd says.</p>
<p>When assessing the materials on the clothing tag, McSherry provides a general rule of thumb. “Cotton, linen, TENCEL, bamboo lyocell — all of those are natural materials, and a lot of them grow fairly quickly or are less resource-intensive,” she says. “The best fabrics are really just well thought out.”</p>
<p> </p>
<h2>The power of transparency</h2>
<p>So, what is the antidote to greenwashing? How do we catch companies in the act and make informed decisions? Beyond checking the clothing label for specific materials, McSherry urges people to assess brands as a whole by looking into the sustainable claims they find. “Don’t just assume that what brands are saying is true,” she says.</p>
<p>TENCEL ensures that brands using their fibers are telling the truth, by adding their fiber identification during the production process. “Say you’re in Madewell and you’re looking at a product that says it’s made out of TENCEL,” Redd says. “That fabric has actually been tested in our lab, and we have given it a certification that it is our fiber.”</p>
<p>Redd recommends companies’ sustainability reports as a useful resource to assess. Brands creating genuine positive impact will be sure to promote their work—Reformation publishes quarterly reports of their progress across priorities such as social responsibility, resource efficiency, and product traceability. “Make sure they release data,” Redd says. “That’s the most important thing — whether they’re releasing numbers.”</p>
<p>Tentree is an “Earth-First” apparel brand that exemplifies the importance of transparency in establishing trust with consumers. Beyond using 98% preferred materials in their apparel — TENCEL, recycled polyester, organic cotton, and hemp — tentree has a unique initiative to plant ten trees with every purchase. Alone, this claim means little, but tentree takes additional steps to support their mission. They work with non-profit organizations and experts to spearhead reforestation initiatives in devastated areas, often sitting on the board to verify their efforts.</p>
<p>Customers can register their trees and track their impact. On their blog, tentree details different tree species, planting sites, and community planters. Director of Product Commercialization Ludovic Duran notes that tentree is working on new initiatives to increase transparency with the tree-planting process. “Recently, we have gone into developing new technology to support those companies in tracking, mapping, and reporting what’s going on on the ground,” Duran says.</p>
<p>Tentree prioritizes sustaining their planting projects long-term. Their non-profit partners educate and collaborate with locals to train them on how to maintain their nurseries and forests. “We were planting with a partner in Senegal to support local communities not just in reforesting and bringing biodiversity back, but also to support them in achieving independence from food sources,” Duran says.</p>
<p>Since joining the Climate Neutral Certification Program last year, tentree has developed a life cycle assessment of the company’s total emissions. Duran clarifies that tentree accounts for their carbon footprint by using gold standard carbon offset. Their tree-planting initiative is an additional step that tentree takes to support their values. “It’s not just about limiting our impact or being aware of our impact,” Duran says. “We really want to bring a positive impact.”</p>
${validate_component(BlogImage, "BlogImage").$$render(
    $$result,
    {
      className: "gallery-img",
      src: textiles1,
      caption: "Measuring textile squares in a sewing workspace. <i>(Photo credit: Quan Pham)</i>"
    },
    {},
    {}
  )}
<p> </p>
<h2>Nuances in the broader picture of sustainable fashion</h2>
<p>Sustainability extends beyond the numbers of how eco-friendly an item is. We as consumers also need to consider how brands treat their workers and their surrounding communities. With fast fashion, garment worker conditions are a particularly dire concern. “Fashion is one of the only industries that really can’t automate very much,” McSherry says. “Every single garment is sewn by somebody.”</p>
<p>Before Los Angeles passed S.B. 62, a bill ensuring minimum wage, garment workers made roughly $5 an hour sewing hundreds of garments, working 60 to 80 hours a week. “That’s not okay,” McSherry says. “In a state that has a $15 an hour minimum wage, some people are making as low as $2 an hour sewing the clothes that we wear once and then throw away — it’s horrible.”</p>
<p>McSherry points out that dirt-cheap prices from H&amp;M and Forever 21 simply can’t exist without exploiting workers. Instead, billionaire executives take advantage of garment workers to sell the clothes for as little as they can while still making a huge profit. “The founder of H&amp;M should not be in the top 10 richest people if their garment workers aren’t making enough to live,” McSherry says.</p>
<p>Fashion also is one of the only industries that isn’t regulated at all on a federal level in terms of the environmental impact just because it’s such a global industry. “We have emission-reduction goals for cars, fossil fuels, and all of these other industries, but there’s nothing being done about fashion currently,” McSherry says.</p>
<p>Although greenwashing creates a minefield for sustainable consumerism, the tools to fight back are widespread and accessible. A great first step is to slow down your purchasing process. McSherry provides a specific tip about giving items a cool-down period before buying them. “Don’t shop through Instagram,” she says. “If you see something that you like, text yourself the link and look at it on your computer.” By reassessing the item later, we are more mindful and avoid impulsive purchases.</p>
<p>While many sustainable solutions are economically inaccessible, sustainable consumerism lies in a mindset that we can apply beyond the brand, even at Urban Outfitters, Zara, or H&amp;M. McSherry and Troop both emphasize that prioritizing longevity and end-life of items is crucial. “There is a sustainable mindset that you can adopt without changing too much about where you consume, and that’s my hope for the future,” McSherry says. Invest in timeless colors and styles while avoiding trends.</p>
<p>Troop had a background in fashion styling and merchandising, and her experience at FABSCRAP prompted her to think about the waste they created at the retail level. “When someone returned something that was slightly damaged, we would just toss it aside,” she says. “After I had this introduction to textile waste I was like, ‘Wait, what are you doing with it? Wait, where does that end up?’” After the purchase, care for clothing in a way that extends its lifespan.</p>
<p>We should also work actively to keep brands accountable. When we find lapses in transparency, we need to be vocal. Accounts like @remakeourworld on Instagram encourage us to find community in advocacy. They call out fast fashion brands for greenwashing and covering up claims of unethical labor. Anyone with a social media account can leave comments under brands’ Instagram pages, whether it be exposing inconsistencies or asking for cleaner practices. “That’s one of my favorite accessible ways to advocate for change,” McSherry says.</p>
<p>Ultimately, enjoying fashion sustainably comes from an intentional paradigm to make the most out of the resources that we have available. As Troop summarizes, “if you feel a certain responsibility for what happens to your products after you use them, then I think you’re on the right track.”</p>`;
});
export {
  Page as default,
  metadata
};
