const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c63675c3.js","imports":["_app/immutable/entry/start.c63675c3.js","_app/immutable/chunks/index.b75380e7.js","_app/immutable/chunks/singletons.91a52786.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.bb6c31be.js","imports":["_app/immutable/entry/app.bb6c31be.js","_app/immutable/chunks/index.b75380e7.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-56437d97.js'),
			() => import('./chunks/1-51541a08.js'),
			() => import('./chunks/2-ae339264.js'),
			() => import('./chunks/3-624b50ce.js')
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
