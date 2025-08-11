import {
	S as k,
	i as q,
	s as D,
	C as E,
	k as b,
	a as B,
	e as h,
	l as y,
	m as N,
	h as _,
	c as C,
	n as r,
	ae as d,
	p as v,
	b as m,
	D as H,
	E as I,
	F as L,
	f as M,
	t as S
} from './index-cf78bce8.js';
/* empty css            */ /* empty css                                                  */ function p(
	n
) {
	let e;
	return {
		c() {
			((e = b('div')), this.h());
		},
		l(a) {
			e = y(a, 'DIV', { class: !0 });
			var f = N(e);
			(f.forEach(_), this.h());
		},
		h() {
			r(e, 'class', 'caption svelte-1525flq');
		},
		m(a, f) {
			(m(a, e, f), (e.innerHTML = n[2]));
		},
		p(a, f) {
			f & 4 && (e.innerHTML = a[2]);
		},
		d(a) {
			a && _(e);
		}
	};
}
function T(n) {
	let e, a, f, c, o;
	const u = n[4].default,
		t = E(u, n, n[3], null);
	let s = n[2] && p(n);
	return {
		c() {
			((e = b('div')), t && t.c(), (f = B()), s && s.c(), (c = h()), this.h());
		},
		l(l) {
			e = y(l, 'DIV', { class: !0, style: !0 });
			var i = N(e);
			(t && t.l(i), i.forEach(_), (f = C(l)), s && s.l(l), (c = h()), this.h());
		},
		h() {
			(r(e, 'class', (a = d('gallery ' + n[1]) + ' svelte-1525flq')), v(e, '--columns', n[0]));
		},
		m(l, i) {
			(m(l, e, i), t && t.m(e, null), m(l, f, i), s && s.m(l, i), m(l, c, i), (o = !0));
		},
		p(l, [i]) {
			(t && t.p && (!o || i & 8) && H(t, u, l, l[3], o ? L(u, l[3], i, null) : I(l[3]), null),
				(!o || (i & 2 && a !== (a = d('gallery ' + l[1]) + ' svelte-1525flq'))) && r(e, 'class', a),
				(!o || i & 1) && v(e, '--columns', l[0]),
				l[2]
					? s
						? s.p(l, i)
						: ((s = p(l)), s.c(), s.m(c.parentNode, c))
					: s && (s.d(1), (s = null)));
		},
		i(l) {
			o || (M(t, l), (o = !0));
		},
		o(l) {
			(S(t, l), (o = !1));
		},
		d(l) {
			(l && _(e), t && t.d(l), l && _(f), s && s.d(l), l && _(c));
		}
	};
}
function V(n, e, a) {
	let { $$slots: f = {}, $$scope: c } = e,
		{ columns: o } = e,
		{ className: u } = e,
		{ caption: t = null } = e;
	return (
		(n.$$set = (s) => {
			('columns' in s && a(0, (o = s.columns)),
				'className' in s && a(1, (u = s.className)),
				'caption' in s && a(2, (t = s.caption)),
				'$$scope' in s && a(3, (c = s.$$scope)));
		}),
		[o, u, t, c, f]
	);
}
class j extends k {
	constructor(e) {
		(super(), q(this, e, V, T, D, { columns: 0, className: 1, caption: 2 }));
	}
}
export { j as B };
