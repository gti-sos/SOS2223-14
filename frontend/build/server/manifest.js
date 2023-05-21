const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.174f5d7f.js","imports":["_app/immutable/entry/start.174f5d7f.js","_app/immutable/chunks/index.eb3421ec.js","_app/immutable/chunks/singletons.6ce68844.js","_app/immutable/chunks/paths.779c5c88.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1758632a.js","imports":["_app/immutable/entry/app.1758632a.js","_app/immutable/chunks/index.eb3421ec.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-72741006.js'),
			() => import('./chunks/1-686024c3.js'),
			() => import('./chunks/2-e57f0e0f.js'),
			() => import('./chunks/3-419b69d4.js'),
			() => import('./chunks/4-aaf192ea.js'),
			() => import('./chunks/5-4a0b7413.js'),
			() => import('./chunks/6-e5d9d16c.js'),
			() => import('./chunks/7-a2809f32.js'),
			() => import('./chunks/8-903e176d.js'),
			() => import('./chunks/9-75e79596.js'),
			() => import('./chunks/10-51fd8483.js'),
			() => import('./chunks/11-66e63372.js'),
			() => import('./chunks/12-46233e41.js'),
			() => import('./chunks/13-6d285817.js'),
			() => import('./chunks/14-6ad9c2d6.js'),
			() => import('./chunks/15-ab5f44c7.js'),
			() => import('./chunks/16-9d3526f2.js'),
			() => import('./chunks/17-5efd28a2.js'),
			() => import('./chunks/18-f2d7a376.js'),
			() => import('./chunks/19-221fe464.js'),
			() => import('./chunks/20-3d6c9c83.js'),
			() => import('./chunks/21-9aba26c3.js'),
			() => import('./chunks/22-cfb104f7.js'),
			() => import('./chunks/23-34256544.js'),
			() => import('./chunks/24-cce753b8.js'),
			() => import('./chunks/25-1a6768f6.js'),
			() => import('./chunks/26-eb4a20cf.js'),
			() => import('./chunks/27-ab186e4c.js'),
			() => import('./chunks/28-420fa6b3.js'),
			() => import('./chunks/29-e55eef32.js'),
			() => import('./chunks/30-ebc7ad89.js'),
			() => import('./chunks/31-388e412b.js'),
			() => import('./chunks/32-08b32c71.js'),
			() => import('./chunks/33-6ecf7ba5.js')
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
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/analytics",
				pattern: /^\/analytics\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/andalusia-tourism-situation-surveys",
				pattern: /^\/andalusia-tourism-situation-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/andalusia-tourism-situation-surveys/[province]/[year]",
				pattern: /^\/andalusia-tourism-situation-surveys\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"province","optional":false,"rest":false,"chained":false},{"name":"year","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/apartment-occupancy-surveys",
				pattern: /^\/apartment-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/apartment-occupancy-surveys/[province]/[year]",
				pattern: /^\/apartment-occupancy-surveys\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"province","optional":false,"rest":false,"chained":false},{"name":"year","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/graph/andalusia-tourism-situation-surveys",
				pattern: /^\/graph\/andalusia-tourism-situation-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/graph/apartment-occupancy-surveys",
				pattern: /^\/graph\/apartment-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/graph/hotel-occupancy-surveys",
				pattern: /^\/graph\/hotel-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/hotel-occupancy-surveys",
				pattern: /^\/hotel-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/hotel-occupancy-surveys/[province]/[year]",
				pattern: /^\/hotel-occupancy-surveys\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"province","optional":false,"rest":false,"chained":false},{"name":"year","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/integrations",
				pattern: /^\/integrations\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/integrations/andalusia-tourism-situation-surveys",
				pattern: /^\/integrations\/andalusia-tourism-situation-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/integrations/andalusia-tourism-situation-surveys/integrations",
				pattern: /^\/integrations\/andalusia-tourism-situation-surveys\/integrations\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/integrations/andalusia-tourism-situation-surveys/integrations/withProxy",
				pattern: /^\/integrations\/andalusia-tourism-situation-surveys\/integrations\/withProxy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/integrations/andalusia-tourism-situation-surveys/integrations/withoutProxy",
				pattern: /^\/integrations\/andalusia-tourism-situation-surveys\/integrations\/withoutProxy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/integrations/andalusia-tourism-situation-surveys/uses",
				pattern: /^\/integrations\/andalusia-tourism-situation-surveys\/uses\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/integrations/andalusia-tourism-situation-surveys/uses/IMDb",
				pattern: /^\/integrations\/andalusia-tourism-situation-surveys\/uses\/IMDb\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			},
			{
				id: "/integrations/andalusia-tourism-situation-surveys/uses/PokemonGo",
				pattern: /^\/integrations\/andalusia-tourism-situation-surveys\/uses\/PokemonGo\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 21 },
				endpoint: null
			},
			{
				id: "/integrations/apartment-occupancy-surveys",
				pattern: /^\/integrations\/apartment-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 22 },
				endpoint: null
			},
			{
				id: "/integrations/apartment-occupancy-surveys/graficas",
				pattern: /^\/integrations\/apartment-occupancy-surveys\/graficas\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 23 },
				endpoint: null
			},
			{
				id: "/integrations/apartment-occupancy-surveys/graficas/withProxy",
				pattern: /^\/integrations\/apartment-occupancy-surveys\/graficas\/withProxy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 25 },
				endpoint: null
			},
			{
				id: "/integrations/apartment-occupancy-surveys/graficas/withoutProxy",
				pattern: /^\/integrations\/apartment-occupancy-surveys\/graficas\/withoutProxy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 24 },
				endpoint: null
			},
			{
				id: "/integrations/apartment-occupancy-surveys/usos",
				pattern: /^\/integrations\/apartment-occupancy-surveys\/usos\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 26 },
				endpoint: null
			},
			{
				id: "/integrations/hotel-occupancy-surveys",
				pattern: /^\/integrations\/hotel-occupancy-surveys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 27 },
				endpoint: null
			},
			{
				id: "/integrations/hotel-occupancy-surveys/integraciones",
				pattern: /^\/integrations\/hotel-occupancy-surveys\/integraciones\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 28 },
				endpoint: null
			},
			{
				id: "/integrations/hotel-occupancy-surveys/integraciones/withProxy",
				pattern: /^\/integrations\/hotel-occupancy-surveys\/integraciones\/withProxy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 30 },
				endpoint: null
			},
			{
				id: "/integrations/hotel-occupancy-surveys/integraciones/withoutProxy",
				pattern: /^\/integrations\/hotel-occupancy-surveys\/integraciones\/withoutProxy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 29 },
				endpoint: null
			},
			{
				id: "/integrations/hotel-occupancy-surveys/usos",
				pattern: /^\/integrations\/hotel-occupancy-surveys\/usos\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 31 },
				endpoint: null
			},
			{
				id: "/integrations/hotel-occupancy-surveys/usos/DrinksDigital",
				pattern: /^\/integrations\/hotel-occupancy-surveys\/usos\/DrinksDigital\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 32 },
				endpoint: null
			},
			{
				id: "/integrations/hotel-occupancy-surveys/usos/GamerPower",
				pattern: /^\/integrations\/hotel-occupancy-surveys\/usos\/GamerPower\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 33 },
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
