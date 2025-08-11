export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/inter-bold.woff2","fonts/inter.woff2","icons/icon-192.png","icons/icon-512.png","images/feature-1.jpg","images/feature-2.jpg","images/feature-3.jpg","images/hero-bg.jpg","images/logo.svg"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CfF8zA4d.js",app:"_app/immutable/entry/app.CAr1HM6o.js",imports:["_app/immutable/entry/start.CfF8zA4d.js","_app/immutable/chunks/sECFg0Z1.js","_app/immutable/chunks/Dw_2Oecw.js","_app/immutable/entry/app.CAr1HM6o.js","_app/immutable/chunks/Dw_2Oecw.js","_app/immutable/chunks/BrMm2hgS.js","_app/immutable/chunks/CbBVm8cr.js","_app/immutable/chunks/C3FaNfmW.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/analytics",
				pattern: /^\/api\/analytics\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/analytics/_server.js'))
			},
			{
				id: "/api/assessment/progress",
				pattern: /^\/api\/assessment\/progress\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/assessment/progress/_server.js'))
			},
			{
				id: "/api/assessment/start",
				pattern: /^\/api\/assessment\/start\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/assessment/start/_server.js'))
			},
			{
				id: "/api/assessment/submit",
				pattern: /^\/api\/assessment\/submit\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/assessment/submit/_server.js'))
			},
			{
				id: "/api/assessment/upload",
				pattern: /^\/api\/assessment\/upload\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/assessment/upload/_server.js'))
			},
			{
				id: "/api/leads",
				pattern: /^\/api\/leads\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/leads/_server.js'))
			},
			{
				id: "/api/social-proof",
				pattern: /^\/api\/social-proof\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/social-proof/_server.js'))
			},
			{
				id: "/assessment",
				pattern: /^\/assessment\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/assessment/client-acquisition",
				pattern: /^\/assessment\/client-acquisition\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/assessment/implementation",
				pattern: /^\/assessment\/implementation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/assessment/overview",
				pattern: /^\/assessment\/overview\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/assessment/prompt-engineering",
				pattern: /^\/assessment\/prompt-engineering\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/assessment/submission",
				pattern: /^\/assessment\/submission\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/assessment/technical-solution",
				pattern: /^\/assessment\/technical-solution\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/careers",
				pattern: /^\/careers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
