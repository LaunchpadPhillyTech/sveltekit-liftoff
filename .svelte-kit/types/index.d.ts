type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/api": undefined;
	"/api/analytics": undefined;
	"/api/leads": undefined;
	"/api/social-proof": undefined
};

export type RouteId = "/" | "/api" | "/api/analytics" | "/api/leads" | "/api/social-proof";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/api" | "/api/analytics" | "/api/leads" | "/api/social-proof";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/fonts/inter-bold.woff2" | "/fonts/inter.woff2" | "/icons/icon-192.png" | "/icons/icon-512.png" | "/images/feature-1.jpg" | "/images/feature-2.jpg" | "/images/feature-3.jpg" | "/images/hero-bg.jpg" | "/images/logo.svg";