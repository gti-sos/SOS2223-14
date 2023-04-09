const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.db6ba105.js","imports":["_app/immutable/entry/start.db6ba105.js","_app/immutable/chunks/index.f18abe4c.js","_app/immutable/chunks/singletons.d20b3f5a.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6443f37e.js","imports":["_app/immutable/entry/app.6443f37e.js","_app/immutable/chunks/index.f18abe4c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-b8cf1d7b.js'),
			() => import('./chunks/1-a6a0de05.js'),
			() => import('./chunks/2-bbef0351.js'),
			() => import('./chunks/3-0b0e2fcb.js'),
			() => import('./chunks/4-5785122a.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/apartment-occupancy-surveys",
				pattern: /^\/apartment-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/apartment-occupancy-surveys/[province]/[year]",
				pattern: /^\/apartment-occupancy-surveys\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"province","optional":false,"rest":false,"chained":false},{"name":"year","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
