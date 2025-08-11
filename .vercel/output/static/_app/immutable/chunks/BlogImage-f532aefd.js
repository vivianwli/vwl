import {
	S as Z,
	i as x,
	s as $,
	k as b,
	a as P,
	q as k,
	T as te,
	l as D,
	h as d,
	c as S,
	m as M,
	r as A,
	n as r,
	J as g,
	b as B,
	u as z,
	f as q,
	g as le,
	d as ae,
	t as j,
	O as ne,
	w as se,
	x as ie,
	y as oe,
	z as ce,
	a0 as K,
	ae as Q,
	B as R
} from './index-cf78bce8.js';
import { T as re } from './Tag-73bbeedf.js';
/* empty css            */ function W(n, e, l) {
	const t = n.slice();
	return ((t[7] = e[l]), t);
}
function X(n) {
	let e, l;
	return {
		c() {
			((e = k('• LAST EDITED ')), (l = k(n[2])));
		},
		l(t) {
			((e = A(t, '• LAST EDITED ')), (l = A(t, n[2])));
		},
		m(t, s) {
			(B(t, e, s), B(t, l, s));
		},
		p(t, s) {
			s & 4 && z(l, t[2]);
		},
		d(t) {
			(t && d(e), t && d(l));
		}
	};
}
function ue(n) {
	let e = n[7].name + '',
		l;
	return {
		c() {
			l = k(e);
		},
		l(t) {
			l = A(t, e);
		},
		m(t, s) {
			B(t, l, s);
		},
		p(t, s) {
			s & 8 && e !== (e = t[7].name + '') && z(l, e);
		},
		d(t) {
			t && d(l);
		}
	};
}
function Y(n) {
	let e, l;
	return (
		(e = new re({
			props: { className: 'inactive', $$slots: { default: [ue] }, $$scope: { ctx: n } }
		})),
		{
			c() {
				se(e.$$.fragment);
			},
			l(t) {
				ie(e.$$.fragment, t);
			},
			m(t, s) {
				(oe(e, t, s), (l = !0));
			},
			p(t, s) {
				const _ = {};
				(s & 1032 && (_.$$scope = { dirty: s, ctx: t }), e.$set(_));
			},
			i(t) {
				l || (q(e.$$.fragment, t), (l = !0));
			},
			o(t) {
				(j(e.$$.fragment, t), (l = !1));
			},
			d(t) {
				ce(e, t);
			}
		}
	);
}
function fe(n) {
	let e, l, t, s, _, f, h, m, T, o, I, N, U, p, C, V, G, J, w, E;
	document.title = e = n[0];
	let v = n[2] && X(n),
		y = n[3],
		u = [];
	for (let a = 0; a < y.length; a += 1) u[a] = Y(W(n, y, a));
	const ee = (a) =>
		j(u[a], 1, 1, () => {
			u[a] = null;
		});
	return {
		c() {
			((l = b('meta')),
				(t = b('meta')),
				(s = b('meta')),
				(f = b('meta')),
				(m = b('meta')),
				(T = P()),
				(o = b('div')),
				(I = b('h1')),
				(N = k(n[0])),
				(U = P()),
				(p = b('p')),
				(C = k('PUBLISHED ')),
				(V = k(n[1])),
				(G = P()),
				v && v.c(),
				(J = P()),
				(w = b('div')));
			for (let a = 0; a < u.length; a += 1) u[a].c();
			this.h();
		},
		l(a) {
			const i = te('svelte-3kds6d', document.head);
			((l = D(i, 'META', { property: !0, content: !0 })),
				(t = D(i, 'META', { property: !0, content: !0 })),
				(s = D(i, 'META', { property: !0, content: !0 })),
				(f = D(i, 'META', { property: !0, content: !0 })),
				(m = D(i, 'META', { property: !0, content: !0 })),
				i.forEach(d),
				(T = S(a)),
				(o = D(a, 'DIV', { class: !0 })));
			var c = M(o);
			I = D(c, 'H1', { class: !0 });
			var H = M(I);
			((N = A(H, n[0])), H.forEach(d), (U = S(c)), (p = D(c, 'P', { class: !0 })));
			var L = M(p);
			((C = A(L, 'PUBLISHED ')),
				(V = A(L, n[1])),
				(G = S(L)),
				v && v.l(L),
				L.forEach(d),
				(J = S(c)),
				(w = D(c, 'DIV', { class: !0 })));
			var F = M(w);
			for (let O = 0; O < u.length; O += 1) u[O].l(F);
			(F.forEach(d), c.forEach(d), this.h());
		},
		h() {
			(r(l, 'property', 'og:title'),
				r(l, 'content', n[0]),
				r(t, 'property', 'og:type'),
				r(t, 'content', 'article'),
				r(s, 'property', 'og:image'),
				r(s, 'content', (_ = '/thumbnails/' + n[4])),
				r(f, 'property', 'og:url'),
				r(f, 'content', (h = 'https://www.vivianwli.com/blog/' + n[5])),
				r(m, 'property', 'og:description'),
				r(m, 'content', n[6]),
				r(I, 'class', 'svelte-16z33hw'),
				r(p, 'class', 'date'),
				r(w, 'class', 'buttons'),
				r(o, 'class', 'container svelte-16z33hw'));
		},
		m(a, i) {
			(g(document.head, l),
				g(document.head, t),
				g(document.head, s),
				g(document.head, f),
				g(document.head, m),
				B(a, T, i),
				B(a, o, i),
				g(o, I),
				g(I, N),
				g(o, U),
				g(o, p),
				g(p, C),
				g(p, V),
				g(p, G),
				v && v.m(p, null),
				g(o, J),
				g(o, w));
			for (let c = 0; c < u.length; c += 1) u[c].m(w, null);
			E = !0;
		},
		p(a, [i]) {
			if (
				((!E || i & 1) && e !== (e = a[0]) && (document.title = e),
				(!E || i & 1) && r(l, 'content', a[0]),
				(!E || (i & 16 && _ !== (_ = '/thumbnails/' + a[4]))) && r(s, 'content', _),
				(!E || (i & 32 && h !== (h = 'https://www.vivianwli.com/blog/' + a[5]))) &&
					r(f, 'content', h),
				(!E || i & 64) && r(m, 'content', a[6]),
				(!E || i & 1) && z(N, a[0]),
				(!E || i & 2) && z(V, a[1]),
				a[2] ? (v ? v.p(a, i) : ((v = X(a)), v.c(), v.m(p, null))) : v && (v.d(1), (v = null)),
				i & 8)
			) {
				y = a[3];
				let c;
				for (c = 0; c < y.length; c += 1) {
					const H = W(a, y, c);
					u[c]
						? (u[c].p(H, i), q(u[c], 1))
						: ((u[c] = Y(H)), u[c].c(), q(u[c], 1), u[c].m(w, null));
				}
				for (le(), c = y.length; c < u.length; c += 1) ee(c);
				ae();
			}
		},
		i(a) {
			if (!E) {
				for (let i = 0; i < y.length; i += 1) q(u[i]);
				E = !0;
			}
		},
		o(a) {
			u = u.filter(Boolean);
			for (let i = 0; i < u.length; i += 1) j(u[i]);
			E = !1;
		},
		d(a) {
			(d(l), d(t), d(s), d(f), d(m), a && d(T), a && d(o), v && v.d(), ne(u, a));
		}
	};
}
function me(n, e, l) {
	let { title: t } = e,
		{ publishDate: s } = e,
		{ editDate: _ } = e,
		{ tags: f } = e,
		{ thumbnail: h } = e,
		{ slug: m } = e,
		{ summary: T } = e;
	return (
		(n.$$set = (o) => {
			('title' in o && l(0, (t = o.title)),
				'publishDate' in o && l(1, (s = o.publishDate)),
				'editDate' in o && l(2, (_ = o.editDate)),
				'tags' in o && l(3, (f = o.tags)),
				'thumbnail' in o && l(4, (h = o.thumbnail)),
				'slug' in o && l(5, (m = o.slug)),
				'summary' in o && l(6, (T = o.summary)));
		}),
		[t, s, _, f, h, m, T]
	);
}
class be extends Z {
	constructor(e) {
		(super(),
			x(this, e, me, fe, $, {
				title: 0,
				publishDate: 1,
				editDate: 2,
				tags: 3,
				thumbnail: 4,
				slug: 5,
				summary: 6
			}));
	}
}
function _e(n) {
	let e, l, t, s, _, f;
	return {
		c() {
			((e = b('div')), (l = b('img')), (s = P()), (_ = b('div')), this.h());
		},
		l(h) {
			e = D(h, 'DIV', { class: !0 });
			var m = M(e);
			((l = D(m, 'IMG', { src: !0, alt: !0, class: !0 })),
				(s = S(m)),
				(_ = D(m, 'DIV', { class: !0 })));
			var T = M(_);
			(T.forEach(d), m.forEach(d), this.h());
		},
		h() {
			(K(l.src, (t = n[0])) || r(l, 'src', t),
				r(l, 'alt', n[1]),
				r(l, 'class', 'svelte-15dtf7u'),
				r(_, 'class', 'caption svelte-15dtf7u'),
				r(e, 'class', (f = Q(n[2]) + ' svelte-15dtf7u')));
		},
		m(h, m) {
			(B(h, e, m), g(e, l), g(e, s), g(e, _), (_.innerHTML = n[1]));
		},
		p(h, [m]) {
			(m & 1 && !K(l.src, (t = h[0])) && r(l, 'src', t),
				m & 2 && r(l, 'alt', h[1]),
				m & 2 && (_.innerHTML = h[1]),
				m & 4 && f !== (f = Q(h[2]) + ' svelte-15dtf7u') && r(e, 'class', f));
		},
		i: R,
		o: R,
		d(h) {
			h && d(e);
		}
	};
}
function he(n, e, l) {
	let { src: t } = e,
		{ caption: s = null } = e,
		{ className: _ } = e;
	return (
		(n.$$set = (f) => {
			('src' in f && l(0, (t = f.src)),
				'caption' in f && l(1, (s = f.caption)),
				'className' in f && l(2, (_ = f.className)));
		}),
		[t, s, _]
	);
}
class De extends Z {
	constructor(e) {
		(super(), x(this, e, he, _e, $, { src: 0, caption: 1, className: 2 }));
	}
}
export { De as B, be as P };
