import { w as p } from './index-69919d61.js';
const f = {
		duration: 4e3,
		initial: 1,
		next: 0,
		pausable: !1,
		dismissable: !0,
		reversed: !1,
		intro: { x: 256 },
		theme: {}
	},
	_ = () => {
		const { subscribe: u, update: a } = p([]);
		let l = 0;
		const c = {},
			i = (t) => t instanceof Object;
		return {
			subscribe: u,
			push: (t, s = {}) => {
				const n = { target: 'default', ...(i(t) ? t : { ...s, msg: t }) },
					e = c[n.target] || {},
					o = { ...f, ...e, ...n, theme: { ...e.theme, ...n.theme }, id: ++l };
				return (a((r) => (o.reversed ? [...r, o] : [o, ...r])), l);
			},
			pop: (t) => {
				a((s) => {
					if (!s.length || t === 0) return [];
					if (i(t)) return s.filter((e) => t(e));
					const n = t || Math.max(...s.map((e) => e.id));
					return s.filter((e) => e.id !== n);
				});
			},
			set: (t, s = {}) => {
				const n = i(t) ? { ...t } : { ...s, id: t };
				a((e) => {
					const o = e.findIndex((r) => r.id === n.id);
					return (o > -1 && (e[o] = { ...e[o], ...n }), e);
				});
			},
			_init: (t = 'default', s = {}) => ((c[t] = s), c)
		};
	},
	x = _();
export { x as t };
