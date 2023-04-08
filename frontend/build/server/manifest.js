const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.3003ed1c.js","imports":["_app/immutable/entry/start.3003ed1c.js","_app/immutable/chunks/index.b75380e7.js","_app/immutable/chunks/singletons.d9051b6d.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.47f40d37.js","imports":["_app/immutable/entry/app.47f40d37.js","_app/immutable/chunks/index.b75380e7.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-6201fc99.js'),
			() => import('./chunks/1-da162059.js'),
			() => import('./chunks/2-28c2815a.js'),
			() => import('./chunks/3-4029059b.js')
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
