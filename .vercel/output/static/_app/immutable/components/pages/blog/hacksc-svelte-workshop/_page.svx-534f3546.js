import {
	S as D,
	i as H,
	s as N,
	w as c,
	a as y,
	k as L,
	q as U,
	x as h,
	c as _,
	l as R,
	m as P,
	r as q,
	h as m,
	n as j,
	a0 as z,
	y as w,
	b as $,
	J as x,
	f as k,
	t as v,
	z as b,
	B
} from '../../../../chunks/index-cf78bce8.js';
import { P as F, B as S } from '../../../../chunks/BlogImage-f532aefd.js';
import { B as E } from '../../../../chunks/BlogGallery-87cb4976.js';
const K = '' + new URL('../../../../assets/svelte-workshop-1-521a6936.jpg', import.meta.url).href,
	M = '' + new URL('../../../../assets/svelte-workshop-2-6a8c3b71.jpg', import.meta.url).href,
	W = '' + new URL('../../../../assets/svelte-workshop-3-be4a4776.jpg', import.meta.url).href,
	A = '' + new URL('../../../../assets/svelte-workshop-4-4a7aa7d3.jpg', import.meta.url).href,
	J = '' + new URL('../../../../assets/svelte-workshop-5-cd3482ba.jpg', import.meta.url).href,
	V = '' + new URL('../../../../assets/svelte-workshop-6-292d33ae.jpg', import.meta.url).href;
function G(I) {
	let s, g, o, u, i, l, n, f, r, d, p, t;
	return (
		(s = new S({
			props: { className: 'gallery-img', src: K, caption: 'Introducing the workshop!' }
		})),
		(o = new S({
			props: {
				className: 'gallery-img',
				src: M,
				caption: 'Introducing myself, featuring some avid hand movement.'
			}
		})),
		(i = new S({
			props: { className: 'gallery-img', src: W, caption: 'Totally engaged hackers :)' }
		})),
		(n = new S({
			props: { className: 'gallery-img', src: A, caption: 'Workshop POV: behind the speaker!' }
		})),
		(r = new S({
			props: {
				className: 'gallery-img',
				src: J,
				caption: 'Workshop room at capacity, with hackers sitting on the steps.'
			}
		})),
		(p = new S({ props: { className: 'gallery-img', src: V, caption: 'Head-on lecture shot.' } })),
		{
			c() {
				(c(s.$$.fragment),
					(g = y()),
					c(o.$$.fragment),
					(u = y()),
					c(i.$$.fragment),
					(l = y()),
					c(n.$$.fragment),
					(f = y()),
					c(r.$$.fragment),
					(d = y()),
					c(p.$$.fragment));
			},
			l(e) {
				(h(s.$$.fragment, e),
					(g = _(e)),
					h(o.$$.fragment, e),
					(u = _(e)),
					h(i.$$.fragment, e),
					(l = _(e)),
					h(n.$$.fragment, e),
					(f = _(e)),
					h(r.$$.fragment, e),
					(d = _(e)),
					h(p.$$.fragment, e));
			},
			m(e, a) {
				(w(s, e, a),
					$(e, g, a),
					w(o, e, a),
					$(e, u, a),
					w(i, e, a),
					$(e, l, a),
					w(n, e, a),
					$(e, f, a),
					w(r, e, a),
					$(e, d, a),
					w(p, e, a),
					(t = !0));
			},
			p: B,
			i(e) {
				t ||
					(k(s.$$.fragment, e),
					k(o.$$.fragment, e),
					k(i.$$.fragment, e),
					k(n.$$.fragment, e),
					k(r.$$.fragment, e),
					k(p.$$.fragment, e),
					(t = !0));
			},
			o(e) {
				(v(s.$$.fragment, e),
					v(o.$$.fragment, e),
					v(i.$$.fragment, e),
					v(n.$$.fragment, e),
					v(r.$$.fragment, e),
					v(p.$$.fragment, e),
					(t = !1));
			},
			d(e) {
				(b(s, e),
					e && m(g),
					b(o, e),
					e && m(u),
					b(i, e),
					e && m(l),
					b(n, e),
					e && m(f),
					b(r, e),
					e && m(d),
					b(p, e));
			}
		}
	);
}
function O(I) {
	let s, g, o, u, i, l, n, f, r, d, p;
	return (
		(s = new F({
			props: { title: T, publishDate: Y, tags: Z, slug: X, thumbnail: ee, summary: te }
		})),
		(l = new E({ props: { columns: '2', $$slots: { default: [G] }, $$scope: { ctx: I } } })),
		{
			c() {
				(c(s.$$.fragment),
					(g = y()),
					(o = L('p')),
					(u = U(
						'I was absolutely elated to evangelize about Svelte and SvelteKit this past February at HackSC 2023! I’m the organizing team’s Design Lead, but this was my little side quest to share my love for this tool with hackers at the event. Feel free to scroll further for some images, followed by a recording of the workshop!'
					)),
					(i = y()),
					c(l.$$.fragment),
					(n = y()),
					(f = L('div')),
					(r = L('iframe')),
					this.h());
			},
			l(t) {
				(h(s.$$.fragment, t), (g = _(t)), (o = R(t, 'P', {})));
				var e = P(o);
				((u = q(
					e,
					'I was absolutely elated to evangelize about Svelte and SvelteKit this past February at HackSC 2023! I’m the organizing team’s Design Lead, but this was my little side quest to share my love for this tool with hackers at the event. Feel free to scroll further for some images, followed by a recording of the workshop!'
				)),
					e.forEach(m),
					(i = _(t)),
					h(l.$$.fragment, t),
					(n = _(t)),
					(f = R(t, 'DIV', { class: !0 })));
				var a = P(f);
				r = R(a, 'IFRAME', { class: !0, src: !0 });
				var C = P(r);
				(C.forEach(m), a.forEach(m), this.h());
			},
			h() {
				(j(r, 'class', 'iframe'),
					z(r.src, (d = 'https://www.youtube.com/embed/PQIbCtuJ2cM')) || j(r, 'src', d),
					j(f, 'class', 'iframe-container'));
			},
			m(t, e) {
				(w(s, t, e),
					$(t, g, e),
					$(t, o, e),
					x(o, u),
					$(t, i, e),
					w(l, t, e),
					$(t, n, e),
					$(t, f, e),
					x(f, r),
					(p = !0));
			},
			p(t, [e]) {
				const a = {};
				(e & 1 && (a.$$scope = { dirty: e, ctx: t }), l.$set(a));
			},
			i(t) {
				p || (k(s.$$.fragment, t), k(l.$$.fragment, t), (p = !0));
			},
			o(t) {
				(v(s.$$.fragment, t), v(l.$$.fragment, t), (p = !1));
			},
			d(t) {
				(b(s, t), t && m(g), t && m(o), t && m(i), b(l, t), t && m(n), t && m(f));
			}
		}
	);
}
const Q = {
		title: 'My HackSC 2023 workshop: intro to Svelte',
		slug: 'hacksc-svelte-workshop',
		publishDate: 'APR 11 2023',
		tags: [{ name: 'code' }],
		thumbnail: 'svelte-workshop.png',
		summary:
			'During HackSC 2023, I hosted a workshop introducing our lovely hackers to Svelte and SvelteKit. Watch the recording and view the action shots here!'
	},
	{ title: T, slug: X, publishDate: Y, tags: Z, thumbnail: ee, summary: te } = Q;
class oe extends D {
	constructor(s) {
		(super(), H(this, s, null, O, N, {}));
	}
}
export { oe as default, Q as metadata };
