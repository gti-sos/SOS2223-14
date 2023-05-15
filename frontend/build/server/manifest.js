const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a1982bc6.js","imports":["_app/immutable/entry/start.a1982bc6.js","_app/immutable/chunks/index.a649d273.js","_app/immutable/chunks/singletons.8f9b393c.js","_app/immutable/chunks/paths.3695b2ad.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.cd8ccd34.js","imports":["_app/immutable/entry/app.cd8ccd34.js","_app/immutable/chunks/index.a649d273.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-96a1ba6d.js'),
			() => import('./chunks/1-7180724d.js'),
			() => import('./chunks/2-22691006.js'),
			() => import('./chunks/3-3e0bd419.js'),
			() => import('./chunks/4-a98d8334.js'),
			() => import('./chunks/5-6ba8d75f.js'),
			() => import('./chunks/6-c8a51036.js'),
			() => import('./chunks/7-c7c740fc.js'),
			() => import('./chunks/8-f80bee11.js'),
			() => import('./chunks/9-bb772895.js'),
			() => import('./chunks/10-28e9f462.js'),
			() => import('./chunks/11-e59b31db.js'),
			() => import('./chunks/12-fe3a0976.js'),
			() => import('./chunks/13-7491e9ad.js'),
			() => import('./chunks/14-639079a1.js'),
			() => import('./chunks/15-bb5bab40.js'),
			() => import('./chunks/16-fe724e4b.js'),
			() => import('./chunks/17-cc0323a9.js'),
			() => import('./chunks/18-26f73add.js'),
			() => import('./chunks/19-170a9ef4.js'),
			() => import('./chunks/20-dbbbd48e.js'),
			() => import('./chunks/21-1b2c72d6.js'),
			() => import('./chunks/22-095c9b5a.js'),
			() => import('./chunks/23-ff5745c5.js'),
			() => import('./chunks/24-3b4d9dd1.js'),
			() => import('./chunks/25-4267a296.js'),
			() => import('./chunks/26-a846b608.js')
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
