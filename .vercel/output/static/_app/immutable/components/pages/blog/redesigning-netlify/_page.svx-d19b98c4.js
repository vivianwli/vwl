import {
	S as It,
	i as St,
	s as Ot,
	w as _,
	a as c,
	k as l,
	q as a,
	x as E,
	c as g,
	l as p,
	m as f,
	r as n,
	h as t,
	y as N,
	b as r,
	J as i,
	f as R,
	t as T,
	z as I,
	B as Tt
} from '../../../../chunks/index-cf78bce8.js';
import { P as Bt, B as U } from '../../../../chunks/BlogImage-f532aefd.js';
import { B as Rt } from '../../../../chunks/BlogGallery-87cb4976.js';
const Pt =
		'' + new URL('../../../../assets/netlify-original-home-57630e45.png', import.meta.url).href,
	Gt =
		'' + new URL('../../../../assets/netlify-redesign-home-1-e3aac81a.png', import.meta.url).href,
	Ft =
		'' + new URL('../../../../assets/netlify-redesign-home-2-f911bd42.png', import.meta.url).href,
	jt =
		'' +
		new URL('../../../../assets/netlify-original-deploys-1-42257b86.png', import.meta.url).href,
	xt =
		'' +
		new URL('../../../../assets/netlify-original-deploys-2-a61e2bbd.png', import.meta.url).href,
	zt =
		'' +
		new URL('../../../../assets/netlify-redesign-user-flow-866b25d7.png', import.meta.url).href,
	Ut =
		'' +
		new URL('../../../../assets/netlify-original-user-flow-45e36f89.png', import.meta.url).href;
function Lt(M) {
	let m, d, h, y;
	return (
		(m = new U({
			props: {
				src: jt,
				className: 'gallery-img',
				caption: '<b>BEFORE:</b> Original page for production deploys.'
			}
		})),
		(h = new U({
			props: {
				src: xt,
				className: 'gallery-img',
				caption: '<b>BEFORE:</b> Original page for deploy previews.'
			}
		})),
		{
			c() {
				(_(m.$$.fragment), (d = c()), _(h.$$.fragment));
			},
			l(o) {
				(E(m.$$.fragment, o), (d = g(o)), E(h.$$.fragment, o));
			},
			m(o, u) {
				(N(m, o, u), r(o, d, u), N(h, o, u), (y = !0));
			},
			p: Tt,
			i(o) {
				y || (R(m.$$.fragment, o), R(h.$$.fragment, o), (y = !0));
			},
			o(o) {
				(T(m.$$.fragment, o), T(h.$$.fragment, o), (y = !1));
			},
			d(o) {
				(I(m, o), o && t(d), I(h, o));
			}
		}
	);
}
function At(M) {
	let m, d, h, y;
	return (
		(m = new U({
			props: {
				src: Gt,
				className: 'gallery-img',
				caption: '<b>AFTER:</b> Redesigned production deploys, integrated with site homepage.'
			}
		})),
		(h = new U({
			props: {
				src: Ft,
				className: 'gallery-img',
				caption: '<b>AFTER:</b> Redesigned deploy previews, integrated with site homepage.'
			}
		})),
		{
			c() {
				(_(m.$$.fragment), (d = c()), _(h.$$.fragment));
			},
			l(o) {
				(E(m.$$.fragment, o), (d = g(o)), E(h.$$.fragment, o));
			},
			m(o, u) {
				(N(m, o, u), r(o, d, u), N(h, o, u), (y = !0));
			},
			p: Tt,
			i(o) {
				y || (R(m.$$.fragment, o), R(h.$$.fragment, o), (y = !0));
			},
			o(o) {
				(T(m.$$.fragment, o), T(h.$$.fragment, o), (y = !1));
			},
			d(o) {
				(I(m, o), o && t(d), I(h, o));
			}
		}
	);
}
function Ht(M) {
	let m,
		d,
		h,
		y,
		o,
		u,
		Ne,
		ae,
		v,
		Re,
		W,
		Te,
		Ie,
		J,
		Se,
		Oe,
		C,
		Be,
		Pe,
		ne,
		L,
		Ge,
		re,
		A,
		Fe,
		le,
		F,
		pe,
		j,
		je,
		K,
		xe,
		fe,
		S,
		ze,
		Q,
		Ue,
		Le,
		me,
		x,
		he,
		H,
		Ae,
		ce,
		z,
		ge,
		O,
		de,
		b,
		He,
		V,
		De,
		qe,
		X,
		Me,
		We,
		ue,
		w,
		Je,
		Y,
		Ce,
		Ke,
		Z,
		Qe,
		Ve,
		ee,
		Xe,
		Ye,
		te,
		Ze,
		et,
		we,
		B,
		tt,
		ie,
		it,
		st,
		ye,
		P,
		ot,
		se,
		at,
		nt,
		ve,
		G,
		$e,
		D,
		rt,
		be;
	return (
		(m = new Bt({
			props: { title: qt, publishDate: Wt, tags: Jt, slug: Mt, thumbnail: Ct, summary: Kt }
		})),
		(F = new U({
			props: {
				src: Ut,
				className: 'gallery-img',
				caption: '<b>BEFORE:</b> Typical user flow when accessing deployed sites.'
			}
		})),
		(x = new U({
			props: {
				src: zt,
				className: 'gallery-img',
				caption: '<b>AFTER:</b> Typical user flow when accessing deployed sites.'
			}
		})),
		(z = new U({
			props: {
				src: Pt,
				caption:
					'<b>BEFORE:</b> Original site homepage that linked to two states of the deploys page (production and previews).'
			}
		})),
		(O = new Rt({ props: { columns: '2', $$slots: { default: [Lt] }, $$scope: { ctx: M } } })),
		(G = new Rt({ props: { columns: '2', $$slots: { default: [At] }, $$scope: { ctx: M } } })),
		{
			c() {
				(_(m.$$.fragment),
					(d = c()),
					(h = l('p')),
					(y = a(
						'In this case study, we take a look at how Netlify can modify their user interface and user flow to simplify key actions. Netlify is one of the most popular options when it comes to deploying websites from code respositories. Their use cases span from individuals to large companies, and an effective redesign would mean a more seamless experience for countless users.'
					)),
					(o = c()),
					(u = l('h2')),
					(Ne = a('User interviews')),
					(ae = c()),
					(v = l('p')),
					(Re = a(
						'I interviewed developers with a range of experience, both specifically in Netlify and broadly in web development. Some were well-acquainted with Netlify’s interface, while others had only tried to deploy a site once or twice. Based on these user interviews, I found that the most prominent pain points lay in '
					)),
					(W = l('strong')),
					(Te = a('clearly navigating through the site')),
					(Ie = a(
						' and understanding where they were among the potential pages. Many of the pages presented '
					)),
					(J = l('strong')),
					(Se = a('too much information without clear hierarchy')),
					(Oe = a(', and provided ')),
					(C = l('strong')),
					(Be = a('too much action autonomy')),
					(Pe = a('.')),
					(ne = c()),
					(L = l('h2')),
					(Ge = a('Design approach')),
					(re = c()),
					(A = l('p')),
					(Fe = a(
						'The name of the game is differentiation. I mapped out the typical user journey below: developers start by clicking to view a certain production or preview deploy, or clicking to view all deploys of a certain type. From the “production” or “preview” deploys page, the user then clicks on a specific deploy to view more details and visit the site.'
					)),
					(le = c()),
					_(F.$$.fragment),
					(pe = c()),
					(j = l('p')),
					(je = a(
						'It took me a while to even realize that the two different actions (clicking to “view production deploys” and clicking to “view deploy previews”) actually led to the same page. The screens looked so similar that they were often mistaken for each other, and yet they misleadingly appreared to be distinct pages despite just being loaded in different states. As echoed by the user interviews, users often felt like they were running circles in a maze. I decided to '
					)),
					(K = l('strong')),
					(xe = a('reorganize page navigation points to be where they were most intuitive.')),
					(fe = c()),
					(S = l('p')),
					(ze = a(
						'Moreover, we want to keep the interface simple to navigate for novice and experienced users alike. Since nearly all Netlify users share the same goals and key actions, we want to give the user as few options and steps as possible. In this case, the fewer pages, the better—especially since several of the pages in the user flow shared significant overlapping information. Therefore, I propose this user flow refactor that '
					)),
					(Q = l('strong')),
					(Ue = a('slims the journey into just two screens')),
					(Le = a('.')),
					(me = c()),
					_(x.$$.fragment),
					(he = c()),
					(H = l('p')),
					(Ae = a(
						'Here’s what the reimagined user flow looks like in action. Below are the original screens:'
					)),
					(ce = c()),
					_(z.$$.fragment),
					(ge = c()),
					_(O.$$.fragment),
					(de = c()),
					(b = l('p')),
					(He = a('I wanted to make the most of the space on the site homepage, ')),
					(V = l('strong')),
					(De = a('utilizing the empty space')),
					(qe = a(' in the top right corner to instead ')),
					(X = l('strong')),
					(Me = a('enlarge the site thumbnail')),
					(We = a(
						' and draw attention to the most recent published deployment. As a pseudo-”hero” for the page, a pictorial preview is a great indicator for which site the user is viewing, as well as what state the most recent site is in.'
					)),
					(ue = c()),
					(w = l('p')),
					(Je = a(
						'This new enlarged component on the homepage features several additional adjustments: a large '
					)),
					(Y = l('strong')),
					(Ce = a('“Latest production deploy”')),
					(Ke = a(' label, a ')),
					(Z = l('strong')),
					(Qe = a('green border')),
					(Ve = a(' to signal “active” status, and a ')),
					(ee = l('strong')),
					(Xe = a('descriptive commit message that')),
					(Ye = a(
						' is prioritized above the commit branch and hash. It includes the same functionality from the original smaller component, but adds a '
					)),
					(te = l('strong')),
					(Ze = a('“open active site”')),
					(et = a(
						' button to calls users to see what’s live without navigating through the user flow.'
					)),
					(we = c()),
					(B = l('p')),
					(tt = a(
						'We combine two pages into one page, in turn simplifying three steps in the user flow to just one '
					)),
					(ie = l('strong')),
					(it = a('all-access dashboard')),
					(st = a(
						' where users can toggle between production and preview deploys. By keeping this component on the homepage, we remove the illusion that the production and preview deploys are on different pages. We consolidate the displayed information in a form that feels more lightweight and gives the user more control.'
					)),
					(ye = c()),
					(P = l('p')),
					(ot = a('Finally, I also added a much-needed ')),
					(se = l('strong')),
					(at = a('“Branch name” label')),
					(nt = a(
						' to the deploys component, calling on users to specify a certain branch from which to view deploys where it was previously unclear.'
					)),
					(ve = c()),
					_(G.$$.fragment),
					($e = c()),
					(D = l('p')),
					(rt = a(
						'That’s it! Simple changes that still keep the user’s familiarity, but improve the user’s ability to navigate and take the most common actions with ease.'
					)));
			},
			l(e) {
				(E(m.$$.fragment, e), (d = g(e)), (h = p(e, 'P', {})));
				var s = f(h);
				((y = n(
					s,
					'In this case study, we take a look at how Netlify can modify their user interface and user flow to simplify key actions. Netlify is one of the most popular options when it comes to deploying websites from code respositories. Their use cases span from individuals to large companies, and an effective redesign would mean a more seamless experience for countless users.'
				)),
					s.forEach(t),
					(o = g(e)),
					(u = p(e, 'H2', {})));
				var oe = f(u);
				((Ne = n(oe, 'User interviews')), oe.forEach(t), (ae = g(e)), (v = p(e, 'P', {})));
				var $ = f(v);
				((Re = n(
					$,
					'I interviewed developers with a range of experience, both specifically in Netlify and broadly in web development. Some were well-acquainted with Netlify’s interface, while others had only tried to deploy a site once or twice. Based on these user interviews, I found that the most prominent pain points lay in '
				)),
					(W = p($, 'STRONG', {})));
				var pt = f(W);
				((Te = n(pt, 'clearly navigating through the site')),
					pt.forEach(t),
					(Ie = n(
						$,
						' and understanding where they were among the potential pages. Many of the pages presented '
					)),
					(J = p($, 'STRONG', {})));
				var ft = f(J);
				((Se = n(ft, 'too much information without clear hierarchy')),
					ft.forEach(t),
					(Oe = n($, ', and provided ')),
					(C = p($, 'STRONG', {})));
				var mt = f(C);
				((Be = n(mt, 'too much action autonomy')),
					mt.forEach(t),
					(Pe = n($, '.')),
					$.forEach(t),
					(ne = g(e)),
					(L = p(e, 'H2', {})));
				var ht = f(L);
				((Ge = n(ht, 'Design approach')), ht.forEach(t), (re = g(e)), (A = p(e, 'P', {})));
				var ct = f(A);
				((Fe = n(
					ct,
					'The name of the game is differentiation. I mapped out the typical user journey below: developers start by clicking to view a certain production or preview deploy, or clicking to view all deploys of a certain type. From the “production” or “preview” deploys page, the user then clicks on a specific deploy to view more details and visit the site.'
				)),
					ct.forEach(t),
					(le = g(e)),
					E(F.$$.fragment, e),
					(pe = g(e)),
					(j = p(e, 'P', {})));
				var lt = f(j);
				((je = n(
					lt,
					'It took me a while to even realize that the two different actions (clicking to “view production deploys” and clicking to “view deploy previews”) actually led to the same page. The screens looked so similar that they were often mistaken for each other, and yet they misleadingly appreared to be distinct pages despite just being loaded in different states. As echoed by the user interviews, users often felt like they were running circles in a maze. I decided to '
				)),
					(K = p(lt, 'STRONG', {})));
				var gt = f(K);
				((xe = n(gt, 'reorganize page navigation points to be where they were most intuitive.')),
					gt.forEach(t),
					lt.forEach(t),
					(fe = g(e)),
					(S = p(e, 'P', {})));
				var ke = f(S);
				((ze = n(
					ke,
					'Moreover, we want to keep the interface simple to navigate for novice and experienced users alike. Since nearly all Netlify users share the same goals and key actions, we want to give the user as few options and steps as possible. In this case, the fewer pages, the better—especially since several of the pages in the user flow shared significant overlapping information. Therefore, I propose this user flow refactor that '
				)),
					(Q = p(ke, 'STRONG', {})));
				var dt = f(Q);
				((Ue = n(dt, 'slims the journey into just two screens')),
					dt.forEach(t),
					(Le = n(ke, '.')),
					ke.forEach(t),
					(me = g(e)),
					E(x.$$.fragment, e),
					(he = g(e)),
					(H = p(e, 'P', {})));
				var ut = f(H);
				((Ae = n(
					ut,
					'Here’s what the reimagined user flow looks like in action. Below are the original screens:'
				)),
					ut.forEach(t),
					(ce = g(e)),
					E(z.$$.fragment, e),
					(ge = g(e)),
					E(O.$$.fragment, e),
					(de = g(e)),
					(b = p(e, 'P', {})));
				var q = f(b);
				((He = n(q, 'I wanted to make the most of the space on the site homepage, ')),
					(V = p(q, 'STRONG', {})));
				var wt = f(V);
				((De = n(wt, 'utilizing the empty space')),
					wt.forEach(t),
					(qe = n(q, ' in the top right corner to instead ')),
					(X = p(q, 'STRONG', {})));
				var yt = f(X);
				((Me = n(yt, 'enlarge the site thumbnail')),
					yt.forEach(t),
					(We = n(
						q,
						' and draw attention to the most recent published deployment. As a pseudo-”hero” for the page, a pictorial preview is a great indicator for which site the user is viewing, as well as what state the most recent site is in.'
					)),
					q.forEach(t),
					(ue = g(e)),
					(w = p(e, 'P', {})));
				var k = f(w);
				((Je = n(
					k,
					'This new enlarged component on the homepage features several additional adjustments: a large '
				)),
					(Y = p(k, 'STRONG', {})));
				var vt = f(Y);
				((Ce = n(vt, '“Latest production deploy”')),
					vt.forEach(t),
					(Ke = n(k, ' label, a ')),
					(Z = p(k, 'STRONG', {})));
				var $t = f(Z);
				((Qe = n($t, 'green border')),
					$t.forEach(t),
					(Ve = n(k, ' to signal “active” status, and a ')),
					(ee = p(k, 'STRONG', {})));
				var bt = f(ee);
				((Xe = n(bt, 'descriptive commit message that')),
					bt.forEach(t),
					(Ye = n(
						k,
						' is prioritized above the commit branch and hash. It includes the same functionality from the original smaller component, but adds a '
					)),
					(te = p(k, 'STRONG', {})));
				var kt = f(te);
				((Ze = n(kt, '“open active site”')),
					kt.forEach(t),
					(et = n(
						k,
						' button to calls users to see what’s live without navigating through the user flow.'
					)),
					k.forEach(t),
					(we = g(e)),
					(B = p(e, 'P', {})));
				var _e = f(B);
				((tt = n(
					_e,
					'We combine two pages into one page, in turn simplifying three steps in the user flow to just one '
				)),
					(ie = p(_e, 'STRONG', {})));
				var _t = f(ie);
				((it = n(_t, 'all-access dashboard')),
					_t.forEach(t),
					(st = n(
						_e,
						' where users can toggle between production and preview deploys. By keeping this component on the homepage, we remove the illusion that the production and preview deploys are on different pages. We consolidate the displayed information in a form that feels more lightweight and gives the user more control.'
					)),
					_e.forEach(t),
					(ye = g(e)),
					(P = p(e, 'P', {})));
				var Ee = f(P);
				((ot = n(Ee, 'Finally, I also added a much-needed ')), (se = p(Ee, 'STRONG', {})));
				var Et = f(se);
				((at = n(Et, '“Branch name” label')),
					Et.forEach(t),
					(nt = n(
						Ee,
						' to the deploys component, calling on users to specify a certain branch from which to view deploys where it was previously unclear.'
					)),
					Ee.forEach(t),
					(ve = g(e)),
					E(G.$$.fragment, e),
					($e = g(e)),
					(D = p(e, 'P', {})));
				var Nt = f(D);
				((rt = n(
					Nt,
					'That’s it! Simple changes that still keep the user’s familiarity, but improve the user’s ability to navigate and take the most common actions with ease.'
				)),
					Nt.forEach(t));
			},
			m(e, s) {
				(N(m, e, s),
					r(e, d, s),
					r(e, h, s),
					i(h, y),
					r(e, o, s),
					r(e, u, s),
					i(u, Ne),
					r(e, ae, s),
					r(e, v, s),
					i(v, Re),
					i(v, W),
					i(W, Te),
					i(v, Ie),
					i(v, J),
					i(J, Se),
					i(v, Oe),
					i(v, C),
					i(C, Be),
					i(v, Pe),
					r(e, ne, s),
					r(e, L, s),
					i(L, Ge),
					r(e, re, s),
					r(e, A, s),
					i(A, Fe),
					r(e, le, s),
					N(F, e, s),
					r(e, pe, s),
					r(e, j, s),
					i(j, je),
					i(j, K),
					i(K, xe),
					r(e, fe, s),
					r(e, S, s),
					i(S, ze),
					i(S, Q),
					i(Q, Ue),
					i(S, Le),
					r(e, me, s),
					N(x, e, s),
					r(e, he, s),
					r(e, H, s),
					i(H, Ae),
					r(e, ce, s),
					N(z, e, s),
					r(e, ge, s),
					N(O, e, s),
					r(e, de, s),
					r(e, b, s),
					i(b, He),
					i(b, V),
					i(V, De),
					i(b, qe),
					i(b, X),
					i(X, Me),
					i(b, We),
					r(e, ue, s),
					r(e, w, s),
					i(w, Je),
					i(w, Y),
					i(Y, Ce),
					i(w, Ke),
					i(w, Z),
					i(Z, Qe),
					i(w, Ve),
					i(w, ee),
					i(ee, Xe),
					i(w, Ye),
					i(w, te),
					i(te, Ze),
					i(w, et),
					r(e, we, s),
					r(e, B, s),
					i(B, tt),
					i(B, ie),
					i(ie, it),
					i(B, st),
					r(e, ye, s),
					r(e, P, s),
					i(P, ot),
					i(P, se),
					i(se, at),
					i(P, nt),
					r(e, ve, s),
					N(G, e, s),
					r(e, $e, s),
					r(e, D, s),
					i(D, rt),
					(be = !0));
			},
			p(e, [s]) {
				const oe = {};
				(s & 1 && (oe.$$scope = { dirty: s, ctx: e }), O.$set(oe));
				const $ = {};
				(s & 1 && ($.$$scope = { dirty: s, ctx: e }), G.$set($));
			},
			i(e) {
				be ||
					(R(m.$$.fragment, e),
					R(F.$$.fragment, e),
					R(x.$$.fragment, e),
					R(z.$$.fragment, e),
					R(O.$$.fragment, e),
					R(G.$$.fragment, e),
					(be = !0));
			},
			o(e) {
				(T(m.$$.fragment, e),
					T(F.$$.fragment, e),
					T(x.$$.fragment, e),
					T(z.$$.fragment, e),
					T(O.$$.fragment, e),
					T(G.$$.fragment, e),
					(be = !1));
			},
			d(e) {
				(I(m, e),
					e && t(d),
					e && t(h),
					e && t(o),
					e && t(u),
					e && t(ae),
					e && t(v),
					e && t(ne),
					e && t(L),
					e && t(re),
					e && t(A),
					e && t(le),
					I(F, e),
					e && t(pe),
					e && t(j),
					e && t(fe),
					e && t(S),
					e && t(me),
					I(x, e),
					e && t(he),
					e && t(H),
					e && t(ce),
					I(z, e),
					e && t(ge),
					I(O, e),
					e && t(de),
					e && t(b),
					e && t(ue),
					e && t(w),
					e && t(we),
					e && t(B),
					e && t(ye),
					e && t(P),
					e && t(ve),
					I(G, e),
					e && t($e),
					e && t(D));
			}
		}
	);
}
const Dt = {
		title: 'Kleiner Perkins design challenge: Redesigning Netlify',
		slug: 'redesigning-netlify',
		publishDate: 'JAN 17 2023',
		tags: [{ name: 'design' }],
		thumbnail: 'netlify.png',
		summary:
			'In this case study, we take a look at how Netlify can modify their user interface and user flow to simplify key actions.'
	},
	{ title: qt, slug: Mt, publishDate: Wt, tags: Jt, thumbnail: Ct, summary: Kt } = Dt;
class Yt extends It {
	constructor(m) {
		(super(), St(this, m, null, Ht, Ot, {}));
	}
}
export { Yt as default, Dt as metadata };
