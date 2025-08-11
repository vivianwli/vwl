import {
	S as Kt,
	i as Xt,
	s as Yt,
	C as Ds,
	k as l,
	l as n,
	m as o,
	h as r,
	n as t,
	b as H,
	K as Vs,
	D as As,
	E as Ms,
	F as xs,
	f as $,
	t as _,
	w as k,
	x as b,
	y,
	B as Gs,
	z as I,
	a as d,
	q as p,
	T as Cs,
	c as m,
	r as h,
	a0 as F,
	J as e
} from '../../chunks/index-cf78bce8.js';
/* empty css                       */ import { I as Ye } from '../../chunks/Icon-9aa1cef5.js';
import { S as Ts } from '../../chunks/SvelteToast-64e4b2a5.js';
import { F as Ns, a as Ss } from '../../chunks/FiLinkedin-d1371c76.js';
function Fs(f) {
	let s, a, c, w;
	const V = f[2].default,
		v = Ds(V, f, f[1], null);
	return {
		c() {
			((s = l('a')), v && v.c(), this.h());
		},
		l(u) {
			s = n(u, 'A', { 'sveltekit:prefetch': !0, 'sveltekit:noscroll': !0, href: !0, class: !0 });
			var E = o(s);
			(v && v.l(E), E.forEach(r), this.h());
		},
		h() {
			(t(s, 'sveltekit:prefetch', ''),
				t(s, 'sveltekit:noscroll', ''),
				t(s, 'href', f[0]),
				t(s, 'class', 'svelte-1qf0kt9'));
		},
		m(u, E) {
			(H(u, s, E), v && v.m(s, null), (a = !0), c || ((w = Vs(s, 'click', f[3])), (c = !0)));
		},
		p(u, [E]) {
			(v && v.p && (!a || E & 2) && As(v, V, u, u[1], a ? xs(V, u[1], E, null) : Ms(u[1]), null),
				(!a || E & 1) && t(s, 'href', u[0]));
		},
		i(u) {
			a || ($(v, u), (a = !0));
		},
		o(u) {
			(_(v, u), (a = !1));
		},
		d(u) {
			(u && r(s), v && v.d(u), (c = !1), w());
		}
	};
}
function Hs(f, s, a) {
	let { $$slots: c = {}, $$scope: w } = s,
		{ link: V = '/' } = s;
	const v = () =>
		setTimeout(() => {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}, 600);
	return (
		(f.$$set = (u) => {
			('link' in u && a(0, (V = u.link)), '$$scope' in u && a(1, (w = u.$$scope)));
		}),
		[V, w, c, v]
	);
}
class Pe extends Kt {
	constructor(s) {
		(super(), Xt(this, s, Hs, Fs, Yt, { link: 0 }));
	}
}
const Bs = {
	a: {
		viewBox: '0 0 24 24',
		fill: 'none',
		stroke: 'currentColor',
		'stroke-width': '2',
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round'
	},
	c: '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>'
};
function Ls(f) {
	let s, a;
	return (
		(s = new Ye({ props: { src: Bs, className: 'custom-icon arrow' } })),
		{
			c() {
				k(s.$$.fragment);
			},
			l(c) {
				b(s.$$.fragment, c);
			},
			m(c, w) {
				(y(s, c, w), (a = !0));
			},
			p: Gs,
			i(c) {
				a || ($(s.$$.fragment, c), (a = !0));
			},
			o(c) {
				(_(s.$$.fragment, c), (a = !1));
			},
			d(c) {
				I(s, c);
			}
		}
	);
}
class js extends Kt {
	constructor(s) {
		(super(), Xt(this, s, null, Ls, Yt, {}));
	}
}
const Ps = {
		a: {
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			'stroke-width': '2',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round'
		},
		c: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>'
	},
	qs = {
		a: {
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			'stroke-width': '2',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round'
		},
		c: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>'
	},
	zs = './_app/immutable/assets/vivian-aug2025-26937ab6.webp',
	Rs = './_app/immutable/assets/market-fermentation-2-bb480940.webp',
	Us = './_app/immutable/assets/trader-joes-big-86c035fe.webp',
	Ws = './_app/immutable/assets/research-2-b5ca7a69.webp',
	Js = '' + new URL('../../assets/intro-code-95867d96.svg?w=400&webp', import.meta.url).href,
	Ks = './_app/immutable/assets/research-1-f5fb7a7d.webp',
	Xs = './_app/immutable/assets/greenwashing-1-16bed324.webp',
	Ys = './_app/immutable/assets/viv-nytimes-7ed68fa0.webp',
	Os = './_app/immutable/assets/greenwashing-2-e2173e50.webp';
function Qs(f) {
	let s;
	return {
		c() {
			s = p('resume');
		},
		l(a) {
			s = h(a, 'resume');
		},
		m(a, c) {
			H(a, s, c);
		},
		d(a) {
			a && r(s);
		}
	};
}
function Zs(f) {
	let s;
	return {
		c() {
			s = p('my design portfolio');
		},
		l(a) {
			s = h(a, 'my design portfolio');
		},
		m(a, c) {
			H(a, s, c);
		},
		d(a) {
			a && r(s);
		}
	};
}
function ea(f) {
	let s;
	return {
		c() {
			s = p('my github');
		},
		l(a) {
			s = h(a, 'my github');
		},
		m(a, c) {
			H(a, s, c);
		},
		d(a) {
			a && r(s);
		}
	};
}
function ta(f) {
	let s;
	return {
		c() {
			s = p('my blog');
		},
		l(a) {
			s = h(a, 'my blog');
		},
		m(a, c) {
			H(a, s, c);
		},
		d(a) {
			a && r(s);
		}
	};
}
function sa(f) {
	let s;
	return {
		c() {
			s = p('my writing portfolio');
		},
		l(a) {
			s = h(a, 'my writing portfolio');
		},
		m(a, c) {
			H(a, s, c);
		},
		d(a) {
			a && r(s);
		}
	};
}
function aa(f) {
	let s;
	return {
		c() {
			s = p('my blog');
		},
		l(a) {
			s = h(a, 'my blog');
		},
		m(a, c) {
			H(a, s, c);
		},
		d(a) {
			a && r(s);
		}
	};
}
function ra(f) {
	let s,
		a,
		c,
		w,
		V,
		v,
		u,
		E,
		B,
		L,
		ne,
		Ot,
		nt,
		M,
		je,
		it,
		ot,
		ie,
		ct,
		qe,
		dt,
		mt,
		vt,
		P,
		ut,
		oe,
		ft,
		j,
		q,
		x,
		ze,
		gt,
		pt,
		Re,
		ht,
		$t,
		z,
		_t,
		R,
		De,
		ce,
		Qt,
		wt,
		Ve,
		de,
		Zt,
		kt,
		U,
		G,
		Ae,
		me,
		es,
		bt,
		Me,
		ve,
		ts,
		yt,
		xe,
		ue,
		ss,
		It,
		C,
		Ue,
		Et,
		jt,
		fe,
		Dt,
		Ge,
		Vt,
		At,
		Mt,
		W,
		J,
		xt,
		K,
		Gt,
		X,
		T,
		We,
		Ct,
		Tt,
		Je,
		Nt,
		St,
		Y,
		O,
		Ft,
		Q,
		Ht,
		N,
		Ce,
		ge,
		as,
		Bt,
		Te,
		pe,
		rs,
		Lt,
		Ne,
		he,
		ls,
		Pt,
		$e,
		qt,
		Z,
		Ke,
		zt,
		Rt,
		D,
		ee,
		_e,
		Ut,
		te,
		we,
		Wt,
		se,
		ke,
		Jt,
		ae,
		be,
		Oe;
	return (
		(u = new Ts({})),
		(P = new Pe({
			props: {
				link: 'https://drive.google.com/file/d/1aSM2-1e58h34HcEf8wKtLJuGWerz8NhD/view?usp=sharing',
				$$slots: { default: [Qs] },
				$$scope: { ctx: f }
			}
		})),
		(oe = new js({})),
		(z = new Pe({
			props: { link: '/portfolio', $$slots: { default: [Zs] }, $$scope: { ctx: f } }
		})),
		(J = new Pe({
			props: {
				link: 'https://github.com/teacupkittie',
				$$slots: { default: [ea] },
				$$scope: { ctx: f }
			}
		})),
		(K = new Pe({ props: { link: '/blog', $$slots: { default: [ta] }, $$scope: { ctx: f } } })),
		(O = new Pe({
			props: { link: '/portfolio?tab=projects', $$slots: { default: [sa] }, $$scope: { ctx: f } }
		})),
		(Q = new Pe({ props: { link: '/blog', $$slots: { default: [aa] }, $$scope: { ctx: f } } })),
		($e = new js({})),
		(_e = new Ye({ props: { src: Ns, className: 'custom-icon media-icon' } })),
		(we = new Ye({ props: { src: Ps, className: 'custom-icon media-icon' } })),
		(ke = new Ye({ props: { src: Ss, className: 'custom-icon media-icon' } })),
		(be = new Ye({ props: { src: qs, className: 'custom-icon media-icon' } })),
		{
			c() {
				((s = l('meta')),
					(a = l('meta')),
					(c = l('meta')),
					(w = l('meta')),
					(V = d()),
					(v = l('div')),
					k(u.$$.fragment),
					(E = d()),
					(B = l('div')),
					(L = l('div')),
					(ne = l('img')),
					(nt = d()),
					(M = l('div')),
					(je = l('h1')),
					(it = p("hello! i'm vivian li.")),
					(ot = d()),
					(ie = l('p')),
					(ct = p('I’m a product designer and UX engineer based in New York City. ')),
					(qe = l('b')),
					(dt = p('I love to use design and data to tell stories in beautiful ways')),
					(mt = p(`, especially about human computer interaction, social connection, and urban
					sustainability. Welcome to my playground!`)),
					(vt = d()),
					k(P.$$.fragment),
					(ut = d()),
					k(oe.$$.fragment),
					(ft = d()),
					(j = l('div')),
					(q = l('div')),
					(x = l('div')),
					(ze = l('h1')),
					(gt = p('i design...')),
					(pt = d()),
					(Re = l('p')),
					(ht =
						p(`I craft visually impactful and delightful experiences, from user interfaces to illustrated
					cards to low-poly 3D worlds. I'm always looking for the small beauties of daily life.`)),
					($t = d()),
					k(z.$$.fragment),
					(_t = d()),
					(R = l('div')),
					(De = l('div')),
					(ce = l('img')),
					(wt = d()),
					(Ve = l('div')),
					(de = l('img')),
					(kt = d()),
					(U = l('div')),
					(G = l('div')),
					(Ae = l('div')),
					(me = l('img')),
					(bt = d()),
					(Me = l('div')),
					(ve = l('img')),
					(yt = d()),
					(xe = l('div')),
					(ue = l('img')),
					(It = d()),
					(C = l('div')),
					(Ue = l('h1')),
					(Et = p('i code...')),
					(jt = d()),
					(fe = l('p')),
					(Dt =
						p(`I bring my visual ideas to life, using web and app development to propel data stories and
					other digital experiences. I'm also a Svelte lover (here's `)),
					(Ge = l('a')),
					(Vt = p('how I coded this site')),
					(At = p(')!')),
					(Mt = d()),
					(W = l('div')),
					k(J.$$.fragment),
					(xt = d()),
					k(K.$$.fragment),
					(Gt = d()),
					(X = l('div')),
					(T = l('div')),
					(We = l('h1')),
					(Ct = p('i write...')),
					(Tt = d()),
					(Je = l('p')),
					(Nt =
						p(`A picture may be worth a thousand words, but I have a longstanding respect for distilling
					concepts to their core components and sharing them effectively. Reading and writing lives
					at the forefront of how I communicate ideas.`)),
					(St = d()),
					(Y = l('div')),
					k(O.$$.fragment),
					(Ft = d()),
					k(Q.$$.fragment),
					(Ht = d()),
					(N = l('div')),
					(Ce = l('div')),
					(ge = l('img')),
					(Bt = d()),
					(Te = l('div')),
					(pe = l('img')),
					(Lt = d()),
					(Ne = l('div')),
					(he = l('img')),
					(Pt = d()),
					k($e.$$.fragment),
					(qt = d()),
					(Z = l('div')),
					(Ke = l('h1')),
					(zt = p('i create.')),
					(Rt = d()),
					(D = l('div')),
					(ee = l('a')),
					k(_e.$$.fragment),
					(Ut = d()),
					(te = l('a')),
					k(we.$$.fragment),
					(Wt = d()),
					(se = l('a')),
					k(ke.$$.fragment),
					(Jt = d()),
					(ae = l('a')),
					k(be.$$.fragment),
					this.h());
			},
			l(i) {
				const g = Cs('svelte-lejy8w', document.head);
				((s = n(g, 'META', { property: !0, content: !0 })),
					(a = n(g, 'META', { property: !0, content: !0 })),
					(c = n(g, 'META', { property: !0, content: !0 })),
					(w = n(g, 'META', { property: !0, content: !0 })),
					g.forEach(r),
					(V = m(i)),
					(v = n(i, 'DIV', { class: !0 })));
				var A = o(v);
				(b(u.$$.fragment, A), (E = m(A)), (B = n(A, 'DIV', { class: !0 })));
				var ye = o(B);
				L = n(ye, 'DIV', { class: !0 });
				var Ie = o(L);
				((ne = n(Ie, 'IMG', { class: !0, src: !0, alt: !0 })),
					(nt = m(Ie)),
					(M = n(Ie, 'DIV', { class: !0 })));
				var S = o(M);
				je = n(S, 'H1', { class: !0 });
				var Xe = o(je);
				((it = h(Xe, "hello! i'm vivian li.")), Xe.forEach(r), (ot = m(S)), (ie = n(S, 'P', {})));
				var Ee = o(ie);
				((ct = h(Ee, 'I’m a product designer and UX engineer based in New York City. ')),
					(qe = n(Ee, 'B', {})));
				var ns = o(qe);
				((dt = h(ns, 'I love to use design and data to tell stories in beautiful ways')),
					ns.forEach(r),
					(mt = h(
						Ee,
						`, especially about human computer interaction, social connection, and urban
					sustainability. Welcome to my playground!`
					)),
					Ee.forEach(r),
					(vt = m(S)),
					b(P.$$.fragment, S),
					S.forEach(r),
					Ie.forEach(r),
					(ut = m(ye)),
					b(oe.$$.fragment, ye),
					ye.forEach(r),
					(ft = m(A)),
					(j = n(A, 'DIV', { class: !0 })));
				var re = o(j);
				q = n(re, 'DIV', { class: !0 });
				var Qe = o(q);
				x = n(Qe, 'DIV', { class: !0 });
				var Se = o(x);
				ze = n(Se, 'H1', {});
				var is = o(ze);
				((gt = h(is, 'i design...')), is.forEach(r), (pt = m(Se)), (Re = n(Se, 'P', {})));
				var os = o(Re);
				((ht = h(
					os,
					`I craft visually impactful and delightful experiences, from user interfaces to illustrated
					cards to low-poly 3D worlds. I'm always looking for the small beauties of daily life.`
				)),
					os.forEach(r),
					($t = m(Se)),
					b(z.$$.fragment, Se),
					Se.forEach(r),
					(_t = m(Qe)),
					(R = n(Qe, 'DIV', { class: !0 })));
				var Ze = o(R);
				De = n(Ze, 'DIV', { class: !0 });
				var cs = o(De);
				((ce = n(cs, 'IMG', { src: !0, alt: !0, class: !0 })),
					cs.forEach(r),
					(wt = m(Ze)),
					(Ve = n(Ze, 'DIV', { class: !0 })));
				var ds = o(Ve);
				((de = n(ds, 'IMG', { src: !0, alt: !0, class: !0 })),
					ds.forEach(r),
					Ze.forEach(r),
					Qe.forEach(r),
					(kt = m(re)),
					(U = n(re, 'DIV', { class: !0 })));
				var et = o(U);
				G = n(et, 'DIV', { class: !0 });
				var Fe = o(G);
				Ae = n(Fe, 'DIV', { class: !0 });
				var ms = o(Ae);
				((me = n(ms, 'IMG', { src: !0, alt: !0, class: !0 })),
					ms.forEach(r),
					(bt = m(Fe)),
					(Me = n(Fe, 'DIV', { class: !0 })));
				var vs = o(Me);
				((ve = n(vs, 'IMG', { src: !0, alt: !0, class: !0 })),
					vs.forEach(r),
					(yt = m(Fe)),
					(xe = n(Fe, 'DIV', { class: !0 })));
				var us = o(xe);
				((ue = n(us, 'IMG', { src: !0, alt: !0, class: !0 })),
					us.forEach(r),
					Fe.forEach(r),
					(It = m(et)),
					(C = n(et, 'DIV', { class: !0 })));
				var He = o(C);
				Ue = n(He, 'H1', {});
				var fs = o(Ue);
				((Et = h(fs, 'i code...')), fs.forEach(r), (jt = m(He)), (fe = n(He, 'P', {})));
				var tt = o(fe);
				((Dt = h(
					tt,
					`I bring my visual ideas to life, using web and app development to propel data stories and
					other digital experiences. I'm also a Svelte lover (here's `
				)),
					(Ge = n(tt, 'A', { href: !0 })));
				var gs = o(Ge);
				((Vt = h(gs, 'how I coded this site')),
					gs.forEach(r),
					(At = h(tt, ')!')),
					tt.forEach(r),
					(Mt = m(He)),
					(W = n(He, 'DIV', { class: !0 })));
				var st = o(W);
				(b(J.$$.fragment, st),
					(xt = m(st)),
					b(K.$$.fragment, st),
					st.forEach(r),
					He.forEach(r),
					et.forEach(r),
					(Gt = m(re)),
					(X = n(re, 'DIV', { class: !0 })));
				var at = o(X);
				T = n(at, 'DIV', { class: !0 });
				var Be = o(T);
				We = n(Be, 'H1', {});
				var ps = o(We);
				((Ct = h(ps, 'i write...')), ps.forEach(r), (Tt = m(Be)), (Je = n(Be, 'P', {})));
				var hs = o(Je);
				((Nt = h(
					hs,
					`A picture may be worth a thousand words, but I have a longstanding respect for distilling
					concepts to their core components and sharing them effectively. Reading and writing lives
					at the forefront of how I communicate ideas.`
				)),
					hs.forEach(r),
					(St = m(Be)),
					(Y = n(Be, 'DIV', { class: !0 })));
				var rt = o(Y);
				(b(O.$$.fragment, rt),
					(Ft = m(rt)),
					b(Q.$$.fragment, rt),
					rt.forEach(r),
					Be.forEach(r),
					(Ht = m(at)),
					(N = n(at, 'DIV', { class: !0 })));
				var Le = o(N);
				Ce = n(Le, 'DIV', { class: !0 });
				var $s = o(Ce);
				((ge = n($s, 'IMG', { src: !0, alt: !0, class: !0 })),
					$s.forEach(r),
					(Bt = m(Le)),
					(Te = n(Le, 'DIV', { class: !0 })));
				var _s = o(Te);
				((pe = n(_s, 'IMG', { src: !0, alt: !0, class: !0 })),
					_s.forEach(r),
					(Lt = m(Le)),
					(Ne = n(Le, 'DIV', { class: !0 })));
				var ws = o(Ne);
				((he = n(ws, 'IMG', { src: !0, alt: !0, class: !0 })),
					ws.forEach(r),
					Le.forEach(r),
					at.forEach(r),
					(Pt = m(re)),
					b($e.$$.fragment, re),
					re.forEach(r),
					(qt = m(A)),
					(Z = n(A, 'DIV', { class: !0 })));
				var lt = o(Z);
				Ke = n(lt, 'H1', {});
				var ks = o(Ke);
				((zt = h(ks, 'i create.')), ks.forEach(r), (Rt = m(lt)), (D = n(lt, 'DIV', { class: !0 })));
				var le = o(D);
				ee = n(le, 'A', { 'sveltekit:prefetch': !0, href: !0, target: !0 });
				var bs = o(ee);
				(b(_e.$$.fragment, bs),
					bs.forEach(r),
					(Ut = m(le)),
					(te = n(le, 'A', { 'sveltekit:prefetch': !0, href: !0, target: !0 })));
				var ys = o(te);
				(b(we.$$.fragment, ys),
					ys.forEach(r),
					(Wt = m(le)),
					(se = n(le, 'A', { 'sveltekit:prefetch': !0, href: !0, target: !0 })));
				var Is = o(se);
				(b(ke.$$.fragment, Is),
					Is.forEach(r),
					(Jt = m(le)),
					(ae = n(le, 'A', { 'sveltekit:prefetch': !0, href: !0, target: !0 })));
				var Es = o(ae);
				(b(be.$$.fragment, Es),
					Es.forEach(r),
					le.forEach(r),
					lt.forEach(r),
					A.forEach(r),
					this.h());
			},
			h() {
				((document.title = 'home'),
					t(s, 'property', 'og:title'),
					t(s, 'content', "vivian li's website"),
					t(a, 'property', 'og:type'),
					t(a, 'content', 'website'),
					t(c, 'property', 'og:image'),
					t(c, 'content', '/thumbnails/vwl-site.png'),
					t(w, 'property', 'og:url'),
					t(w, 'content', 'https://www.vivianwli.com'),
					t(ne, 'class', 'avatar svelte-jnvd3t'),
					F(ne.src, (Ot = zs)) || t(ne, 'src', Ot),
					t(ne, 'alt', 'viv'),
					t(je, 'class', 'svelte-jnvd3t'),
					t(M, 'class', 'text-right svelte-jnvd3t'),
					t(L, 'class', 'mini-section intro svelte-jnvd3t'),
					t(B, 'class', 'section svelte-jnvd3t'),
					t(x, 'class', 'text-left svelte-jnvd3t'),
					F(ce.src, (Qt = Rs)) || t(ce, 'src', Qt),
					t(ce, 'alt', 'market fermentation poster design'),
					t(ce, 'class', 'svelte-jnvd3t'),
					t(De, 'class', 'image-stack-item design-top svelte-jnvd3t'),
					F(de.src, (Zt = Us)) || t(de, 'src', Zt),
					t(de, 'alt', 'low poly trader joes'),
					t(de, 'class', 'svelte-jnvd3t'),
					t(Ve, 'class', 'image-stack-item design-bottom svelte-jnvd3t'),
					t(R, 'class', 'image-stack image-right svelte-jnvd3t'),
					t(q, 'class', 'mini-section svelte-jnvd3t'),
					F(me.src, (es = Ws)) || t(me, 'src', es),
					t(me, 'alt', 'my senior research project'),
					t(me, 'class', 'svelte-jnvd3t'),
					t(Ae, 'class', 'image-stack-item code-top svelte-jnvd3t'),
					F(ve.src, (ts = Js)) || t(ve, 'src', ts),
					t(ve, 'alt', 'code-ception of this homepage'),
					t(ve, 'class', 'svelte-jnvd3t'),
					t(Me, 'class', 'image-stack-item code-middle svelte-jnvd3t'),
					F(ue.src, (ss = Ks)) || t(ue, 'src', ss),
					t(ue, 'alt', 'my senior research project'),
					t(ue, 'class', 'svelte-jnvd3t'),
					t(xe, 'class', 'image-stack-item code-bottom svelte-jnvd3t'),
					t(G, 'class', 'image-stack image-left svelte-jnvd3t'),
					t(Ge, 'href', '/blog/made-with-svelte-kit'),
					t(W, 'class', 'buttons'),
					t(C, 'class', 'text-right svelte-jnvd3t'),
					t(U, 'class', 'mini-section svelte-jnvd3t'),
					t(Y, 'class', 'buttons'),
					t(T, 'class', 'text-left svelte-jnvd3t'),
					F(ge.src, (as = Xs)) || t(ge, 'src', as),
					t(ge, 'alt', 'an article i wrote on greenwashing'),
					t(ge, 'class', 'svelte-jnvd3t'),
					t(Ce, 'class', 'image-stack-item write-top svelte-jnvd3t'),
					F(pe.src, (rs = Ys)) || t(pe, 'src', rs),
					t(pe, 'alt', 'an article i wrote on marine plastic pollution'),
					t(pe, 'class', 'svelte-jnvd3t'),
					t(Te, 'class', 'image-stack-item write-middle svelte-jnvd3t'),
					F(he.src, (ls = Os)) || t(he, 'src', ls),
					t(he, 'alt', 'an article i wrote on greenwashing'),
					t(he, 'class', 'svelte-jnvd3t'),
					t(Ne, 'class', 'image-stack-item write-bottom svelte-jnvd3t'),
					t(N, 'class', 'image-stack image-right svelte-jnvd3t'),
					t(X, 'class', 'mini-section svelte-jnvd3t'),
					t(j, 'class', 'section things svelte-jnvd3t'),
					t(ee, 'sveltekit:prefetch', ''),
					t(ee, 'href', 'mailto:vivianwli.design@gmail.com'),
					t(ee, 'target', '_blank'),
					t(te, 'sveltekit:prefetch', ''),
					t(te, 'href', 'https://github.com/vivianwli'),
					t(te, 'target', '_blank'),
					t(se, 'sveltekit:prefetch', ''),
					t(se, 'href', 'https://www.linkedin.com/in/vivianwli/'),
					t(se, 'target', '_blank'),
					t(ae, 'sveltekit:prefetch', ''),
					t(ae, 'href', 'https://instagram.com/mclovivian'),
					t(ae, 'target', '_blank'),
					t(D, 'class', 'media-icon-container svelte-jnvd3t'),
					t(Z, 'class', 'section outro svelte-jnvd3t'),
					t(v, 'class', 'content'));
			},
			m(i, g) {
				(e(document.head, s),
					e(document.head, a),
					e(document.head, c),
					e(document.head, w),
					H(i, V, g),
					H(i, v, g),
					y(u, v, null),
					e(v, E),
					e(v, B),
					e(B, L),
					e(L, ne),
					e(L, nt),
					e(L, M),
					e(M, je),
					e(je, it),
					e(M, ot),
					e(M, ie),
					e(ie, ct),
					e(ie, qe),
					e(qe, dt),
					e(ie, mt),
					e(M, vt),
					y(P, M, null),
					e(B, ut),
					y(oe, B, null),
					e(v, ft),
					e(v, j),
					e(j, q),
					e(q, x),
					e(x, ze),
					e(ze, gt),
					e(x, pt),
					e(x, Re),
					e(Re, ht),
					e(x, $t),
					y(z, x, null),
					e(q, _t),
					e(q, R),
					e(R, De),
					e(De, ce),
					e(R, wt),
					e(R, Ve),
					e(Ve, de),
					e(j, kt),
					e(j, U),
					e(U, G),
					e(G, Ae),
					e(Ae, me),
					e(G, bt),
					e(G, Me),
					e(Me, ve),
					e(G, yt),
					e(G, xe),
					e(xe, ue),
					e(U, It),
					e(U, C),
					e(C, Ue),
					e(Ue, Et),
					e(C, jt),
					e(C, fe),
					e(fe, Dt),
					e(fe, Ge),
					e(Ge, Vt),
					e(fe, At),
					e(C, Mt),
					e(C, W),
					y(J, W, null),
					e(W, xt),
					y(K, W, null),
					e(j, Gt),
					e(j, X),
					e(X, T),
					e(T, We),
					e(We, Ct),
					e(T, Tt),
					e(T, Je),
					e(Je, Nt),
					e(T, St),
					e(T, Y),
					y(O, Y, null),
					e(Y, Ft),
					y(Q, Y, null),
					e(X, Ht),
					e(X, N),
					e(N, Ce),
					e(Ce, ge),
					e(N, Bt),
					e(N, Te),
					e(Te, pe),
					e(N, Lt),
					e(N, Ne),
					e(Ne, he),
					e(j, Pt),
					y($e, j, null),
					e(v, qt),
					e(v, Z),
					e(Z, Ke),
					e(Ke, zt),
					e(Z, Rt),
					e(Z, D),
					e(D, ee),
					y(_e, ee, null),
					e(D, Ut),
					e(D, te),
					y(we, te, null),
					e(D, Wt),
					e(D, se),
					y(ke, se, null),
					e(D, Jt),
					e(D, ae),
					y(be, ae, null),
					(Oe = !0));
			},
			p(i, [g]) {
				const A = {};
				(g & 1 && (A.$$scope = { dirty: g, ctx: i }), P.$set(A));
				const ye = {};
				(g & 1 && (ye.$$scope = { dirty: g, ctx: i }), z.$set(ye));
				const Ie = {};
				(g & 1 && (Ie.$$scope = { dirty: g, ctx: i }), J.$set(Ie));
				const S = {};
				(g & 1 && (S.$$scope = { dirty: g, ctx: i }), K.$set(S));
				const Xe = {};
				(g & 1 && (Xe.$$scope = { dirty: g, ctx: i }), O.$set(Xe));
				const Ee = {};
				(g & 1 && (Ee.$$scope = { dirty: g, ctx: i }), Q.$set(Ee));
			},
			i(i) {
				Oe ||
					($(u.$$.fragment, i),
					$(P.$$.fragment, i),
					$(oe.$$.fragment, i),
					$(z.$$.fragment, i),
					$(J.$$.fragment, i),
					$(K.$$.fragment, i),
					$(O.$$.fragment, i),
					$(Q.$$.fragment, i),
					$($e.$$.fragment, i),
					$(_e.$$.fragment, i),
					$(we.$$.fragment, i),
					$(ke.$$.fragment, i),
					$(be.$$.fragment, i),
					(Oe = !0));
			},
			o(i) {
				(_(u.$$.fragment, i),
					_(P.$$.fragment, i),
					_(oe.$$.fragment, i),
					_(z.$$.fragment, i),
					_(J.$$.fragment, i),
					_(K.$$.fragment, i),
					_(O.$$.fragment, i),
					_(Q.$$.fragment, i),
					_($e.$$.fragment, i),
					_(_e.$$.fragment, i),
					_(we.$$.fragment, i),
					_(ke.$$.fragment, i),
					_(be.$$.fragment, i),
					(Oe = !1));
			},
			d(i) {
				(r(s),
					r(a),
					r(c),
					r(w),
					i && r(V),
					i && r(v),
					I(u),
					I(P),
					I(oe),
					I(z),
					I(J),
					I(K),
					I(O),
					I(Q),
					I($e),
					I(_e),
					I(we),
					I(ke),
					I(be));
			}
		}
	);
}
class da extends Kt {
	constructor(s) {
		(super(), Xt(this, s, null, ra, Yt, {}));
	}
}
export { da as default };
