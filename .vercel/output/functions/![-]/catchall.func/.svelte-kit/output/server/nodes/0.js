import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D34H-Lyl.js","_app/immutable/chunks/CJqUcAxU.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/BzJxH7rB.js","_app/immutable/chunks/DPXM8iR3.js","_app/immutable/chunks/DwNGzZcp.js","_app/immutable/chunks/HnHadE--.js","_app/immutable/chunks/FMhGB0Nd.js","_app/immutable/chunks/wIym9jIj.js","_app/immutable/chunks/CbcBBuX8.js","_app/immutable/chunks/CgU5AtxT.js"];
export const stylesheets = ["_app/immutable/assets/app.Czm4nmdV.css","_app/immutable/assets/SvelteToast.B4FYv_xo.css","_app/immutable/assets/0.CN0-t-wU.css"];
export const fonts = ["_app/immutable/assets/HV Fitzgerald Bold Italic.Dno3-Yrz.ttf"];
