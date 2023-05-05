export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e4347617.js","imports":["_app/immutable/entry/start.e4347617.js","_app/immutable/chunks/index.91b75a39.js","_app/immutable/chunks/singletons.96316088.js","_app/immutable/chunks/paths.3a1954a9.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.17b3b95e.js","imports":["_app/immutable/entry/app.17b3b95e.js","_app/immutable/chunks/index.91b75a39.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js')
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

export const prerendered = new Set([]);
