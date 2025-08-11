import { n as noop, f as assign, i as identity, c as create_ssr_component, a as subscribe, o as onDestroy, v as validate_component, d as add_attribute, m as missing_component, b as each } from "./ssr.js";
import { t as toast } from "./SvelteToast.svelte_svelte_type_style_lang.js";
import { w as writable } from "./index.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start) return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function") duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const css$1 = {
  code: "._toastItem.svelte-j9nwjb{width:var(--toastWidth, 16rem);height:var(--toastHeight, auto);min-height:var(--toastMinHeight, 3.5rem);margin:var(--toastMargin, 0 0 0.5rem 0);padding:var(--toastPadding, 0);background:var(--toastBackground, rgba(66, 66, 66, 0.9));color:var(--toastColor, #fff);box-shadow:var(--toastBoxShadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06));border:var(--toastBorder, none);border-radius:var(--toastBorderRadius, 0.125rem);position:relative;display:flex;flex-direction:row;align-items:center;overflow:hidden;will-change:transform, opacity;-webkit-tap-highlight-color:transparent}._toastMsg.svelte-j9nwjb{padding:var(--toastMsgPadding, 0.75rem 0.5rem);flex:1 1 0%}.pe.svelte-j9nwjb,._toastMsg.svelte-j9nwjb a{pointer-events:auto}._toastBtn.svelte-j9nwjb{width:2rem;height:100%;font:1rem sans-serif;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none}._toastBar.svelte-j9nwjb{top:var(--toastBarTop, auto);right:var(--toastBarRight, auto);bottom:var(--toastBarBottom, 0);left:var(--toastBarLeft, 0);height:var(--toastBarHeight, 6px);width:var(--toastBarWidth, 100%);position:absolute;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;pointer-events:none}._toastBar.svelte-j9nwjb::-webkit-progress-bar{background:transparent}._toastBar.svelte-j9nwjb::-webkit-progress-value{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}._toastBar.svelte-j9nwjb::-moz-progress-bar{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}",
  map: `{"version":3,"file":"ToastItem.svelte","sources":["ToastItem.svelte"],"sourcesContent":["<script>\\nimport { onDestroy } from 'svelte'\\nimport { tweened } from 'svelte/motion'\\nimport { linear } from 'svelte/easing'\\nimport { toast } from './stores.js'\\n\\nexport let item\\n\\nconst progress = tweened(item.initial, { duration: item.duration, easing: linear })\\nconst close = () => toast.pop(item.id)\\nconst autoclose = () => {\\n  if ($progress === 1 || $progress === 0) {\\n    close()\\n  }\\n}\\nlet next = item.initial\\nlet prev = next\\nlet paused = false\\n\\n$: if (next !== item.next) {\\n  next = item.next\\n  prev = $progress\\n  paused = false\\n  progress.set(next).then(autoclose)\\n}\\n\\nconst pause = () => {\\n  if (item.pausable && !paused && $progress !== next) {\\n    progress.set($progress, { duration: 0 })\\n    paused = true\\n  }\\n}\\n\\nconst resume = () => {\\n  if (paused) {\\n    const d = item.duration\\n    const duration = d - d * (($progress - prev) / (next - prev))\\n    progress.set(next, { duration }).then(autoclose)\\n    paused = false\\n  }\\n}\\n\\nconst getProps = () => {\\n  const { props = {}, sendIdTo } = item.component\\n  if (sendIdTo) {\\n    props[sendIdTo] = item.id\\n  }\\n  return props\\n}\\n\\n// \`progress\` has been renamed to \`next\`; shim included for backward compatibility, to remove in next major\\n$: if (typeof item.progress !== 'undefined') {\\n  item.next = item.progress\\n}\\n\\nonDestroy(() => {\\n  if (typeof item.onpop === 'function') {\\n    item.onpop(item.id)\\n  }\\n})\\n<\/script>\\n\\n<style>\\n._toastItem {\\n  width: var(--toastWidth, 16rem);\\n  height: var(--toastHeight, auto);\\n  min-height: var(--toastMinHeight, 3.5rem);\\n  margin: var(--toastMargin, 0 0 0.5rem 0);\\n  padding: var(--toastPadding, 0);\\n  background: var(--toastBackground, rgba(66, 66, 66, 0.9));\\n  color: var(--toastColor, #fff);\\n  box-shadow: var(--toastBoxShadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06));\\n  border: var(--toastBorder, none);\\n  border-radius: var(--toastBorderRadius, 0.125rem);\\n  position: relative;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  overflow: hidden;\\n  will-change: transform, opacity;\\n  -webkit-tap-highlight-color: transparent;\\n}\\n._toastMsg {\\n  padding: var(--toastMsgPadding, 0.75rem 0.5rem);\\n  flex: 1 1 0%;\\n}\\n.pe,\\n._toastMsg :global(a) {\\n  pointer-events: auto;\\n}\\n._toastBtn {\\n  width: 2rem;\\n  height: 100%;\\n  font: 1rem sans-serif;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  cursor: pointer;\\n  outline: none;\\n}\\n._toastBar {\\n  top: var(--toastBarTop, auto);\\n  right: var(--toastBarRight, auto);\\n  bottom: var(--toastBarBottom, 0);\\n  left: var(--toastBarLeft, 0);\\n  height: var(--toastBarHeight, 6px);\\n  width: var(--toastBarWidth, 100%);\\n  position: absolute;\\n  display: block;\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  appearance: none;\\n  border: none;\\n  background: transparent;\\n  pointer-events: none;\\n}\\n._toastBar::-webkit-progress-bar {\\n  background: transparent;\\n}\\n/* \`--toastProgressBackground\` renamed to \`--toastBarBackground\`; override included for backward compatibility */\\n._toastBar::-webkit-progress-value {\\n  background: var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)));\\n}\\n._toastBar::-moz-progress-bar {\\n  background: var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)));\\n}\\n</style>\\n\\n<div class=\\"_toastItem\\" class:pe={item.pausable} on:mouseenter={pause} on:mouseleave={resume}>\\n  <div role=\\"status\\" class=\\"_toastMsg\\" class:pe={item.component}>\\n    {#if item.component}\\n      <svelte:component this={item.component.src} {...getProps()} />\\n    {:else}\\n      {@html item.msg}\\n    {/if}\\n  </div>\\n  {#if item.dismissable}\\n    <div class=\\"_toastBtn pe\\" role=\\"button\\" tabindex=\\"-1\\" on:click={close}>✕</div>\\n  {/if}\\n  <progress class=\\"_toastBar\\" value={$progress} />\\n</div>\\n"],"names":[],"mappings":"AA+DA,yBAAY,CACV,KAAK,CAAE,IAAI,YAAY,CAAC,MAAM,CAAC,CAC/B,MAAM,CAAE,IAAI,aAAa,CAAC,KAAK,CAAC,CAChC,UAAU,CAAE,IAAI,gBAAgB,CAAC,OAAO,CAAC,CACzC,MAAM,CAAE,IAAI,aAAa,CAAC,aAAa,CAAC,CACxC,OAAO,CAAE,IAAI,cAAc,CAAC,EAAE,CAAC,CAC/B,UAAU,CAAE,IAAI,iBAAiB,CAAC,sBAAsB,CAAC,CACzD,KAAK,CAAE,IAAI,YAAY,CAAC,KAAK,CAAC,CAC9B,UAAU,CAAE,IAAI,gBAAgB,CAAC,sEAAsE,CAAC,CACxG,MAAM,CAAE,IAAI,aAAa,CAAC,KAAK,CAAC,CAChC,aAAa,CAAE,IAAI,mBAAmB,CAAC,SAAS,CAAC,CACjD,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,SAAS,CAAC,CAAC,OAAO,CAC/B,2BAA2B,CAAE,WAC/B,CACA,wBAAW,CACT,OAAO,CAAE,IAAI,iBAAiB,CAAC,eAAe,CAAC,CAC/C,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,EACZ,CACA,iBAAG,CACH,wBAAU,CAAS,CAAG,CACpB,cAAc,CAAE,IAClB,CACA,wBAAW,CACT,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,IAAI,CAAC,UAAU,CACrB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,IACX,CACA,wBAAW,CACT,GAAG,CAAE,IAAI,aAAa,CAAC,KAAK,CAAC,CAC7B,KAAK,CAAE,IAAI,eAAe,CAAC,KAAK,CAAC,CACjC,MAAM,CAAE,IAAI,gBAAgB,CAAC,EAAE,CAAC,CAChC,IAAI,CAAE,IAAI,cAAc,CAAC,EAAE,CAAC,CAC5B,MAAM,CAAE,IAAI,gBAAgB,CAAC,IAAI,CAAC,CAClC,KAAK,CAAE,IAAI,eAAe,CAAC,KAAK,CAAC,CACjC,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KAAK,CACd,kBAAkB,CAAE,IAAI,CACxB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,WAAW,CACvB,cAAc,CAAE,IAClB,CACA,wBAAU,sBAAuB,CAC/B,UAAU,CAAE,WACd,CAEA,wBAAU,wBAAyB,CACjC,UAAU,CAAE,IAAI,yBAAyB,CAAC,oDAAoD,CAChG,CACA,wBAAU,mBAAoB,CAC5B,UAAU,CAAE,IAAI,yBAAyB,CAAC,oDAAoD,CAChG"}`
};
const ToastItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  let { item } = $$props;
  const progress = tweened(item.initial, { duration: item.duration, easing: identity });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  const close = () => toast.pop(item.id);
  const autoclose = () => {
    if ($progress === 1 || $progress === 0) {
      close();
    }
  };
  let next = item.initial;
  const getProps = () => {
    const { props = {}, sendIdTo } = item.component;
    if (sendIdTo) {
      props[sendIdTo] = item.id;
    }
    return props;
  };
  onDestroy(() => {
    if (typeof item.onpop === "function") {
      item.onpop(item.id);
    }
  });
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  $$result.css.add(css$1);
  {
    if (typeof item.progress !== "undefined") {
      item.next = item.progress;
    }
  }
  {
    if (next !== item.next) {
      next = item.next;
      progress.set(next).then(autoclose);
    }
  }
  $$unsubscribe_progress();
  return `<div class="${["_toastItem svelte-j9nwjb", item.pausable ? "pe" : ""].join(" ").trim()}"><div role="status" class="${["_toastMsg svelte-j9nwjb", item.component ? "pe" : ""].join(" ").trim()}">${item.component ? `${validate_component(item.component.src || missing_component, "svelte:component").$$render($$result, Object.assign({}, getProps()), {}, {})}` : `<!-- HTML_TAG_START -->${item.msg}<!-- HTML_TAG_END -->`}</div> ${item.dismissable ? `<div class="_toastBtn pe svelte-j9nwjb" role="button" tabindex="-1" data-svelte-h="svelte-wcy6qo">✕</div>` : ``} <progress class="_toastBar svelte-j9nwjb"${add_attribute("value", $progress, 0)}></progress></div>`;
});
const css = {
  code: "._toastContainer.svelte-7xr3c1{top:var(--toastContainerTop, 1.5rem);right:var(--toastContainerRight, 2rem);bottom:var(--toastContainerBottom, auto);left:var(--toastContainerLeft, auto);position:fixed;margin:0;padding:0;list-style-type:none;pointer-events:none;z-index:9999}",
  map: `{"version":3,"file":"SvelteToast.svelte","sources":["SvelteToast.svelte"],"sourcesContent":["<script>\\nimport { fade, fly } from 'svelte/transition'\\nimport { flip } from 'svelte/animate'\\nimport { toast } from './stores.js'\\nimport ToastItem from './ToastItem.svelte'\\n\\nexport let options = {}\\nexport let target = 'default'\\n\\n$: toast._init(target, options)\\n\\nlet items\\n$: items = $toast.filter((i) => i.target === target)\\n\\nconst getCss = (theme) => Object.keys(theme).reduce((a, c) => \`\${a}\${c}:\${theme[c]};\`, '')\\n<\/script>\\n\\n<style>\\n._toastContainer {\\n  top: var(--toastContainerTop, 1.5rem);\\n  right: var(--toastContainerRight, 2rem);\\n  bottom: var(--toastContainerBottom, auto);\\n  left: var(--toastContainerLeft, auto);\\n  position: fixed;\\n  margin: 0;\\n  padding: 0;\\n  list-style-type: none;\\n  pointer-events: none;\\n  z-index: 9999;\\n}\\n</style>\\n\\n<ul class=\\"_toastContainer\\">\\n  {#each items as item (item.id)}\\n    <li in:fly={item.intro} out:fade animate:flip={{ duration: 200 }} style={getCss(item.theme)}>\\n      <ToastItem {item} />\\n    </li>\\n  {/each}\\n</ul>\\n"],"names":[],"mappings":"AAkBA,8BAAiB,CACf,GAAG,CAAE,IAAI,mBAAmB,CAAC,OAAO,CAAC,CACrC,KAAK,CAAE,IAAI,qBAAqB,CAAC,KAAK,CAAC,CACvC,MAAM,CAAE,IAAI,sBAAsB,CAAC,KAAK,CAAC,CACzC,IAAI,CAAE,IAAI,oBAAoB,CAAC,KAAK,CAAC,CACrC,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,eAAe,CAAE,IAAI,CACrB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,IACX"}`
};
const SvelteToast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toast, $$unsubscribe_toast;
  $$unsubscribe_toast = subscribe(toast, (value) => $toast = value);
  let { options = {} } = $$props;
  let { target = "default" } = $$props;
  let items;
  const getCss = (theme) => Object.keys(theme).reduce((a, c) => `${a}${c}:${theme[c]};`, "");
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  $$result.css.add(css);
  {
    toast._init(target, options);
  }
  items = $toast.filter((i) => i.target === target);
  $$unsubscribe_toast();
  return `<ul class="_toastContainer svelte-7xr3c1">${each(items, (item) => {
    return `<li${add_attribute("style", getCss(item.theme), 0)}>${validate_component(ToastItem, "ToastItem").$$render($$result, { item }, {}, {})} </li>`;
  })}</ul>`;
});
export {
  SvelteToast as S
};
