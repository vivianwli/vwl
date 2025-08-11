import * as universal from '../entries/pages/blog/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/3.Z25EtBaM.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/CJqUcAxU.js","_app/immutable/chunks/BzJxH7rB.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/CnbP0hja.js","_app/immutable/chunks/CtCy7njf.js","_app/immutable/chunks/FMhGB0Nd.js","_app/immutable/chunks/wIym9jIj.js","_app/immutable/chunks/HnHadE--.js","_app/immutable/chunks/CgU5AtxT.js"];
export const stylesheets = ["_app/immutable/assets/app.Czm4nmdV.css","_app/immutable/assets/Tag.DFbVl_2b.css","_app/immutable/assets/SvelteToast.B4FYv_xo.css","_app/immutable/assets/3.vqO8i1_i.css"];
export const fonts = ["_app/immutable/assets/HV Fitzgerald Bold Italic.Dno3-Yrz.ttf"];
