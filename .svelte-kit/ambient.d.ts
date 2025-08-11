
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DATABASE_URL: string;
	export const SENDGRID_API_KEY: string;
	export const SENDGRID_FROM_EMAIL: string;
	export const SENDGRID_FROM_NAME: string;
	export const SESSION_SECRET: string;
	export const GOOGLE_ANALYTICS_ID: string;
	export const FACEBOOK_PIXEL_ID: string;
	export const ENABLE_ANALYTICS: string;
	export const ENABLE_EMAIL_NOTIFICATIONS: string;
	export const ENABLE_SOCIAL_PROOF: string;
	export const ENABLE_URGENCY_TIMER: string;
	export const RATE_LIMIT_MAX_REQUESTS: string;
	export const RATE_LIMIT_WINDOW_MS: string;
	export const NODE_ENV: string;
	export const LOG_LEVEL: string;
	export const GJS_DEBUG_TOPICS: string;
	export const LESSOPEN: string;
	export const NOW_BUILDER: string;
	export const VERCEL_GIT_REPO_OWNER: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const FONTCONFIG_PATH: string;
	export const GIO_MODULE_DIR: string;
	export const TURBO_RUN_SUMMARY: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
	export const npm_node_execpath: string;
	export const GDK_BACKEND_VSCODE_SNAP_ORIG: string;
	export const CLUTTER_DISABLE_MIPMAPPED_TEXT: string;
	export const SHLVL: string;
	export const HOME: string;
	export const CHROME_DESKTOP: string;
	export const LOCPATH_VSCODE_SNAP_ORIG: string;
	export const TERM_PROGRAM_VERSION: string;
	export const DESKTOP_SESSION: string;
	export const GTK_PATH: string;
	export const npm_package_json: string;
	export const XDG_DATA_HOME_VSCODE_SNAP_ORIG: string;
	export const GTK_IM_MODULE_FILE: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const TURBO_DOWNLOAD_LOCAL_ENABLED: string;
	export const VERCEL_ENV: string;
	export const COREPACK_ROOT: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const MANAGERPID: string;
	export const SYSTEMD_EXEC_PID: string;
	export const IM_CONFIG_CHECK_ENV: string;
	export const GSM_SKIP_SSH_AGENT_WORKAROUND: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const COLORTERM: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const VERCEL_GIT_COMMIT_SHA: string;
	export const VERCEL_GIT_PULL_REQUEST_ID: string;
	export const VERCEL_TARGET_ENV: string;
	export const DEBUGINFOD_URLS: string;
	export const VERCEL_GIT_COMMIT_REF: string;
	export const IM_CONFIG_PHASE: string;
	export const WAYLAND_DISPLAY: string;
	export const COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
	export const LOGNAME: string;
	export const VERCEL_GIT_PROVIDER: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const JOURNAL_STREAM: string;
	export const _: string;
	export const XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const CLAUDE_CODE_SSE_PORT: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
	export const npm_config_registry: string;
	export const USERNAME: string;
	export const TERM: string;
	export const VERCEL_URL: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const VERCEL_GIT_COMMIT_AUTHOR_NAME: string;
	export const VERCEL_GIT_REPO_ID: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const GTK_EXE_PREFIX: string;
	export const INVOCATION_ID: string;
	export const TURBO_REMOTE_ONLY: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const XDG_MENU_PREFIX: string;
	export const BAMF_DESKTOP_FILE_HINT: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const LOCPATH: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
	export const XDG_DATA_HOME: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const TERM_PROGRAM: string;
	export const __VERCEL_BUILD_RUNNING: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const GSETTINGS_SCHEMA_DIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const npm_config_verify_deps_before_run: string;
	export const NODE_PATH: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const LESSCLOSE: string;
	export const GTK_PATH_VSCODE_SNAP_ORIG: string;
	export const FONTCONFIG_FILE: string;
	export const VERCEL_GIT_COMMIT_AUTHOR_LOGIN: string;
	export const GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
	export const TURBO_CACHE: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const VERCEL: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const QT_IM_MODULE: string;
	export const PWD: string;
	export const ENABLE_IDE_INTEGRATION: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_DATA_DIRS: string;
	export const NX_DAEMON: string;
	export const VERCEL_OIDC_TOKEN: string;
	export const npm_config__jsr_registry: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const VERCEL_GIT_COMMIT_MESSAGE: string;
	export const VERCEL_GIT_PREVIOUS_SHA: string;
	export const VERCEL_PROJECT_SETTINGS_NODE_VERSION: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const PNPM_HOME: string;
	export const VERCEL_GIT_REPO_SLUG: string;
	export const INIT_CWD: string;
	export const VITE_USER_NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_SITE_URL: string;
	export const PUBLIC_APP_NAME: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DATABASE_URL: string;
		SENDGRID_API_KEY: string;
		SENDGRID_FROM_EMAIL: string;
		SENDGRID_FROM_NAME: string;
		SESSION_SECRET: string;
		GOOGLE_ANALYTICS_ID: string;
		FACEBOOK_PIXEL_ID: string;
		ENABLE_ANALYTICS: string;
		ENABLE_EMAIL_NOTIFICATIONS: string;
		ENABLE_SOCIAL_PROOF: string;
		ENABLE_URGENCY_TIMER: string;
		RATE_LIMIT_MAX_REQUESTS: string;
		RATE_LIMIT_WINDOW_MS: string;
		NODE_ENV: string;
		LOG_LEVEL: string;
		GJS_DEBUG_TOPICS: string;
		LESSOPEN: string;
		NOW_BUILDER: string;
		VERCEL_GIT_REPO_OWNER: string;
		USER: string;
		npm_config_user_agent: string;
		FONTCONFIG_PATH: string;
		GIO_MODULE_DIR: string;
		TURBO_RUN_SUMMARY: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
		npm_node_execpath: string;
		GDK_BACKEND_VSCODE_SNAP_ORIG: string;
		CLUTTER_DISABLE_MIPMAPPED_TEXT: string;
		SHLVL: string;
		HOME: string;
		CHROME_DESKTOP: string;
		LOCPATH_VSCODE_SNAP_ORIG: string;
		TERM_PROGRAM_VERSION: string;
		DESKTOP_SESSION: string;
		GTK_PATH: string;
		npm_package_json: string;
		XDG_DATA_HOME_VSCODE_SNAP_ORIG: string;
		GTK_IM_MODULE_FILE: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		TURBO_DOWNLOAD_LOCAL_ENABLED: string;
		VERCEL_ENV: string;
		COREPACK_ROOT: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		MANAGERPID: string;
		SYSTEMD_EXEC_PID: string;
		IM_CONFIG_CHECK_ENV: string;
		GSM_SKIP_SSH_AGENT_WORKAROUND: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		COLORTERM: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		VERCEL_GIT_COMMIT_SHA: string;
		VERCEL_GIT_PULL_REQUEST_ID: string;
		VERCEL_TARGET_ENV: string;
		DEBUGINFOD_URLS: string;
		VERCEL_GIT_COMMIT_REF: string;
		IM_CONFIG_PHASE: string;
		WAYLAND_DISPLAY: string;
		COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
		LOGNAME: string;
		VERCEL_GIT_PROVIDER: string;
		pnpm_config_verify_deps_before_run: string;
		JOURNAL_STREAM: string;
		_: string;
		XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
		MEMORY_PRESSURE_WATCH: string;
		CLAUDE_CODE_SSE_PORT: string;
		XDG_SESSION_CLASS: string;
		XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
		npm_config_registry: string;
		USERNAME: string;
		TERM: string;
		VERCEL_URL: string;
		GNOME_DESKTOP_SESSION_ID: string;
		VERCEL_GIT_COMMIT_AUTHOR_NAME: string;
		VERCEL_GIT_REPO_ID: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		GTK_EXE_PREFIX: string;
		INVOCATION_ID: string;
		TURBO_REMOTE_ONLY: string;
		npm_package_name: string;
		NODE: string;
		XDG_MENU_PREFIX: string;
		BAMF_DESKTOP_FILE_HINT: string;
		GNOME_SETUP_DISPLAY: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		LOCPATH: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
		XDG_DATA_HOME: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		TERM_PROGRAM: string;
		__VERCEL_BUILD_RUNNING: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		GSETTINGS_SCHEMA_DIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		npm_config_verify_deps_before_run: string;
		NODE_PATH: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		LESSCLOSE: string;
		GTK_PATH_VSCODE_SNAP_ORIG: string;
		FONTCONFIG_FILE: string;
		VERCEL_GIT_COMMIT_AUTHOR_LOGIN: string;
		GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
		TURBO_CACHE: string;
		GJS_DEBUG_OUTPUT: string;
		VERCEL: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		QT_IM_MODULE: string;
		PWD: string;
		ENABLE_IDE_INTEGRATION: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		XDG_DATA_DIRS: string;
		NX_DAEMON: string;
		VERCEL_OIDC_TOKEN: string;
		npm_config__jsr_registry: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		VERCEL_GIT_COMMIT_MESSAGE: string;
		VERCEL_GIT_PREVIOUS_SHA: string;
		VERCEL_PROJECT_SETTINGS_NODE_VERSION: string;
		MEMORY_PRESSURE_WRITE: string;
		PNPM_HOME: string;
		VERCEL_GIT_REPO_SLUG: string;
		INIT_CWD: string;
		VITE_USER_NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_SITE_URL: string;
		PUBLIC_APP_NAME: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
