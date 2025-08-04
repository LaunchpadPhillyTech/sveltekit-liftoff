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
		client: {start:"_app/immutable/entry/start.DN307FfA.js",app:"_app/immutable/entry/app.B-VRxAWc.js",imports:["_app/immutable/entry/start.DN307FfA.js","_app/immutable/chunks/D9n3Me_s.js","_app/immutable/chunks/DcJ2dBsV.js","_app/immutable/entry/app.B-VRxAWc.js","_app/immutable/chunks/DcJ2dBsV.js","_app/immutable/chunks/Cctr9Hhf.js","_app/immutable/chunks/B-lVlGq6.js","_app/immutable/chunks/LvHc43wS.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
				endpoint: __memo(() => import('./entries/endpoints/api/analytics/_server.js'))
			},
			{
				id: "/api/leads",
				pattern: /^\/api\/leads\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/leads/_server.js'))
			},
			{
				id: "/api/social-proof",
				pattern: /^\/api\/social-proof\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/social-proof/_server.js'))
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
