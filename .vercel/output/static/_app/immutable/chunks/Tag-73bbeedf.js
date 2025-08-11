import {
	S as r,
	i as f,
	s as m,
	C as h,
	k as d,
	l as v,
	m as p,
	h as _,
	n as c,
	ae as u,
	b,
	D as g,
	E as N,
	F as T,
	f as j,
	t as y
} from './index-cf78bce8.js';
/* empty css            */ function C(n) {
	let e, o, a;
	const i = n[2].default,
		t = h(i, n, n[1], null);
	return {
		c() {
			((e = d('button')), t && t.c(), this.h());
		},
		l(s) {
			e = v(s, 'BUTTON', { class: !0 });
			var l = p(e);
			(t && t.l(l), l.forEach(_), this.h());
		},
		h() {
			c(e, 'class', (o = u(n[0]) + ' svelte-jjivcc'));
		},
		m(s, l) {
			(b(s, e, l), t && t.m(e, null), (a = !0));
		},
		p(s, [l]) {
			(t && t.p && (!a || l & 2) && g(t, i, s, s[1], a ? T(i, s[1], l, null) : N(s[1]), null),
				(!a || (l & 1 && o !== (o = u(s[0]) + ' svelte-jjivcc'))) && c(e, 'class', o));
		},
		i(s) {
			a || (j(t, s), (a = !0));
		},
		o(s) {
			(y(t, s), (a = !1));
		},
		d(s) {
			(s && _(e), t && t.d(s));
		}
	};
}
function E(n, e, o) {
	let { $$slots: a = {}, $$scope: i } = e,
		{ className: t } = e;
	return (
		(n.$$set = (s) => {
			('className' in s && o(0, (t = s.className)), '$$scope' in s && o(1, (i = s.$$scope)));
		}),
		[t, i, a]
	);
}
class q extends r {
	constructor(e) {
		(super(), f(this, e, E, C, m, { className: 0 }));
	}
}
export { q as T };
