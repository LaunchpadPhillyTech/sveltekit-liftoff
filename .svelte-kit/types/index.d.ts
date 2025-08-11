type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/api": undefined;
	"/api/analytics": undefined;
	"/api/assessment": undefined;
	"/api/assessment/progress": undefined;
	"/api/assessment/start": undefined;
	"/api/assessment/submit": undefined;
	"/api/assessment/upload": undefined;
	"/api/leads": undefined;
	"/api/social-proof": undefined;
	"/assessment": undefined;
	"/assessment/client-acquisition": undefined;
	"/assessment/implementation": undefined;
	"/assessment/overview": undefined;
	"/assessment/prompt-engineering": undefined;
	"/assessment/submission": undefined;
	"/assessment/technical-solution": undefined;
	"/careers": undefined
};

export type RouteId = "/" | "/api" | "/api/analytics" | "/api/assessment" | "/api/assessment/progress" | "/api/assessment/start" | "/api/assessment/submit" | "/api/assessment/upload" | "/api/leads" | "/api/social-proof" | "/assessment" | "/assessment/client-acquisition" | "/assessment/implementation" | "/assessment/overview" | "/assessment/prompt-engineering" | "/assessment/submission" | "/assessment/technical-solution" | "/careers";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/api" | "/api/analytics" | "/api/assessment" | "/api/assessment/progress" | "/api/assessment/start" | "/api/assessment/submit" | "/api/assessment/upload" | "/api/leads" | "/api/social-proof" | "/assessment" | "/assessment/client-acquisition" | "/assessment/implementation" | "/assessment/overview" | "/assessment/prompt-engineering" | "/assessment/submission" | "/assessment/technical-solution" | "/careers";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/fonts/inter-bold.woff2" | "/fonts/inter.woff2" | "/icons/icon-192.png" | "/icons/icon-512.png" | "/images/feature-1.jpg" | "/images/feature-2.jpg" | "/images/feature-3.jpg" | "/images/hero-bg.jpg" | "/images/logo.svg";