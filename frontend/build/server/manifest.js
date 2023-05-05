const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e4347617.js","imports":["_app/immutable/entry/start.e4347617.js","_app/immutable/chunks/index.91b75a39.js","_app/immutable/chunks/singletons.96316088.js","_app/immutable/chunks/paths.3a1954a9.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.17b3b95e.js","imports":["_app/immutable/entry/app.17b3b95e.js","_app/immutable/chunks/index.91b75a39.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-77b01bb1.js'),
			() => import('./chunks/1-087d2b65.js'),
			() => import('./chunks/2-25548991.js'),
			() => import('./chunks/3-6ce4ba81.js'),
			() => import('./chunks/4-24cde3e6.js'),
			() => import('./chunks/5-4931cc24.js'),
			() => import('./chunks/6-77424f60.js'),
			() => import('./chunks/7-bf2f4b93.js'),
			() => import('./chunks/8-48e1c1ae.js'),
			() => import('./chunks/9-b6921dd8.js'),
			() => import('./chunks/10-e240eed5.js'),
			() => import('./chunks/11-2b10efa7.js'),
			() => import('./chunks/12-89613a56.js'),
			() => import('./chunks/13-33a30bce.js'),
			() => import('./chunks/14-1e6c1e3a.js'),
			() => import('./chunks/15-132cdd8d.js'),
			() => import('./chunks/16-b149e8e6.js'),
			() => import('./chunks/17-89c86722.js'),
			() => import('./chunks/18-779b57c6.js'),
			() => import('./chunks/19-37a79178.js'),
			() => import('./chunks/20-a4c590d0.js'),
			() => import('./chunks/21-2be797b6.js')
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
				id: "/analytics",
				pattern: /^\/analytics\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/andalusia-tourism-situation-surveys",
				pattern: /^\/andalusia-tourism-situation-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/andalusia-tourism-situation-surveys/[province]/[year]",
				pattern: /^\/andalusia-tourism-situation-surveys\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"province","optional":false,"rest":false,"chained":false},{"name":"year","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/apartment-occupancy-surveys",
				pattern: /^\/apartment-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/apartment-occupancy-surveys/[province]/[year]",
				pattern: /^\/apartment-occupancy-surveys\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"province","optional":false,"rest":false,"chained":false},{"name":"year","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/graph/andalusia-tourism-situation-surveys",
				pattern: /^\/graph\/andalusia-tourism-situation-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/graph/apartment-occupancy-surveys",
				pattern: /^\/graph\/apartment-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/hotel-occupancy-surveys",
				pattern: /^\/hotel-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/hotel-occupancy-surveys/[province]/[year]",
				pattern: /^\/hotel-occupancy-surveys\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"province","optional":false,"rest":false,"chained":false},{"name":"year","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/integrations",
				pattern: /^\/integrations\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/integrations/andalusia-tourism-situation-surveys/integrations/withoutProxy",
				pattern: /^\/integrations\/andalusia-tourism-situation-surveys\/integrations\/withoutProxy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/integrations/andalusia-tourism-situation-surveys/uses",
				pattern: /^\/integrations\/andalusia-tourism-situation-surveys\/uses\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/integrations/andalusia-tourism-situation-surveys/uses/IMDb",
				pattern: /^\/integrations\/andalusia-tourism-situation-surveys\/uses\/IMDb\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/integrations/andalusia-tourism-situation-surveys/uses/PokemonGo",
				pattern: /^\/integrations\/andalusia-tourism-situation-surveys\/uses\/PokemonGo\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/integrations/apartment-occupancy-surveys",
				pattern: /^\/integrations\/apartment-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/integrations/apartment-occupancy-surveys/graficas",
				pattern: /^\/integrations\/apartment-occupancy-surveys\/graficas\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/integrations/apartment-occupancy-surveys/graficas/withProxy",
				pattern: /^\/integrations\/apartment-occupancy-surveys\/graficas\/withProxy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			},
			{
				id: "/integrations/apartment-occupancy-surveys/graficas/withoutProxy",
				pattern: /^\/integrations\/apartment-occupancy-surveys\/graficas\/withoutProxy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/integrations/apartment-occupancy-surveys/usos",
				pattern: /^\/integrations\/apartment-occupancy-surveys\/usos\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 21 },
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
