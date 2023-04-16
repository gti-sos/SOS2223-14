const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.81129b93.js","imports":["_app/immutable/entry/start.81129b93.js","_app/immutable/chunks/index.f18abe4c.js","_app/immutable/chunks/singletons.31e74dcd.js","_app/immutable/chunks/paths.918b9445.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6611f8aa.js","imports":["_app/immutable/entry/app.6611f8aa.js","_app/immutable/chunks/index.f18abe4c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-726cd68d.js'),
			() => import('./chunks/1-f99c0d8d.js'),
			() => import('./chunks/2-c8d3c355.js'),
			() => import('./chunks/3-5a5cc80b.js'),
			() => import('./chunks/4-6a78f152.js'),
			() => import('./chunks/5-1e1e1513.js'),
			() => import('./chunks/6-c619a683.js'),
			() => import('./chunks/7-228832e0.js'),
			() => import('./chunks/8-136e96a2.js')
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
