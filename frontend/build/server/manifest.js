const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c36dacfc.js","imports":["_app/immutable/entry/start.c36dacfc.js","_app/immutable/chunks/index.f18abe4c.js","_app/immutable/chunks/singletons.ffbb32a2.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.59b7238e.js","imports":["_app/immutable/entry/app.59b7238e.js","_app/immutable/chunks/index.f18abe4c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-46f21132.js'),
			() => import('./chunks/1-2f825d92.js'),
			() => import('./chunks/2-a316c0d4.js'),
			() => import('./chunks/3-607c4265.js'),
			() => import('./chunks/4-2cfc584b.js'),
			() => import('./chunks/5-ecb76d75.js'),
			() => import('./chunks/6-60040e79.js')
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
				id: "/andalusia-tourism-situation-surveys",
				pattern: /^\/andalusia-tourism-situation-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/andalusia-tourism-situation-surveys/[province]/[year]",
				pattern: /^\/andalusia-tourism-situation-surveys\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"province","optional":false,"rest":false,"chained":false},{"name":"year","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/apartment-occupancy-surveys",
				pattern: /^\/apartment-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/apartment-occupancy-surveys/[province]/[year]",
				pattern: /^\/apartment-occupancy-surveys\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"province","optional":false,"rest":false,"chained":false},{"name":"year","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
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
