const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.096d217c.js","imports":["_app/immutable/entry/start.096d217c.js","_app/immutable/chunks/index.3b0184ad.js","_app/immutable/chunks/singletons.22217902.js","_app/immutable/chunks/paths.399a7f74.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c671334c.js","imports":["_app/immutable/entry/app.c671334c.js","_app/immutable/chunks/index.3b0184ad.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-0bdbf7c6.js'),
			() => import('./chunks/1-52ccf2ad.js'),
			() => import('./chunks/2-5adfb76f.js'),
			() => import('./chunks/3-556aebe0.js'),
			() => import('./chunks/4-3748828d.js'),
			() => import('./chunks/5-909c6cda.js'),
			() => import('./chunks/6-a6e87700.js'),
			() => import('./chunks/7-dacce93f.js'),
			() => import('./chunks/8-93d6d3cd.js')
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
			},
			{
				id: "/hotel-occupancy-surveys",
				pattern: /^\/hotel-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/hotel-occupancy-surveys/[province]/[year]",
				pattern: /^\/hotel-occupancy-surveys\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"province","optional":false,"rest":false,"chained":false},{"name":"year","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 8 },
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
