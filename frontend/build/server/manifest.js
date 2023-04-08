const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.607d3987.js","imports":["_app/immutable/entry/start.607d3987.js","_app/immutable/chunks/index.b75380e7.js","_app/immutable/chunks/singletons.e65f5789.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e3a82aff.js","imports":["_app/immutable/entry/app.e3a82aff.js","_app/immutable/chunks/index.b75380e7.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-6201fc99.js'),
			() => import('./chunks/1-d1676363.js'),
			() => import('./chunks/2-a6937dda.js'),
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
