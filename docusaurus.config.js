/** @type {import("@docusaurus/types").Config} */
const config = {
	title: "TomatenKuchen Docs",
	favicon: "icon/favicon.ico",
	url: "https://docs.tomatenkuchen.com",
	baseUrl: "/",
	trailingSlash: false,
	tagline: "TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server.",
	onBrokenLinks: "warn",
	onBrokenAnchors: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en", "de"]
	},

	plugins: [
		require("./plugin-pagemove/index.js"),
		[
			require("./plugin-integration-functions/index.js"),
			{
				name: "integration-functions",
				baseURL: "https://api.tomatenkuchen.com/integration-docs/",
				outDir: "docs/action-functions",
				// From https://api.tomatenkuchen.com/integration-docs
				files: ["user.md","thread.md","math.md","mention.md","vars.md","string.md","time.md","condition.md","control.md","member.md","guild.md","stats.md","message.md","misc.md","moderation.md","channel.md","args.md","response.md","level.md","embed.md","components.md","managebot.md"]
			}
		],
		[
		  	require.resolve("docusaurus-lunr-search"),
			{
				language: ["en", "de"],
				disableVersioning: true
			}
		],
		[
			"@docusaurus/plugin-pwa",
			{
				pwaHead: [
					{
						tagName: "link",
						rel: "icon",
						href: "/icon/192x192.png"
					},{
						tagName: "link",
						rel: "manifest",
						href: "/manifest.json"
					},{
						tagName: "meta",
						name: "apple-mobile-web-app-capable",
						content: "yes"
					},{
						tagName: "meta",
						name: "theme-color",
						content: "#ED8721"
					},{
						tagName: "meta",
						name: "apple-mobile-web-app-status-bar-style",
						content: "#ED8721"
					},{
						tagName: "link",
						rel: "apple-touch-icon",
						href: "/icon/152x152.png"
					},{
						tagName: "link",
						rel: "mask-icon",
						href: "/icon/192x192.png",
						color: "#ED8721"
					},{
						tagName: "meta",
						name: "msapplication-TileImage",
						content: "/icon/192x192.png"
					},{
						tagName: "meta",
						name: "msapplication-TileColor",
						content: "#ED8721"
					}
				]
			}
		]
	],

	presets: [
		[
		"classic",
		/** @type {import("@docusaurus/preset-classic").Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					routeBasePath: "/",
					editUrl: "https://github.com/TomatenKuchenDEV/docs/tree/main",
					editLocalizedFiles: true
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/custom.css")
				}
			})
		]
	],

	themeConfig:
		/** @type {import("@docusaurus/preset-classic").ThemeConfig} */
		({
		navbar: {
			title: "TomatenKuchen Docs",
			logo: {
				alt: "TomatenKuchen Logo",
				src: "icon/favicon.ico"
			},
			hideOnScroll: true,
			items: [
				{
					label: "Website",
					href: "https://tomatenkuchen.com"
				},{
					label: "Invite",
					href: "https://tomatenkuchen.com/invite"
				},{
					label: "Support server",
					href: "https://tomatenkuchen.com/discord"
				},{
					label: "Message editor",
					href: "https://embed.tomatenkuchen.com"
				},{
					type: "localeDropdown",
					position: "right",
					dropdownItemsAfter: [
						{
							href: "https://translate.tomatenkuchen.com/engage/tomatenkuchen",
							label: "App & website translation"
						},{
							href: "https://github.com/TomatenKuchenDEV/docs/tree/main/i18n",
							label: "Docs translation"
						}
					]
				}
			]
		},
		colorMode: {
			respectPrefersColorScheme: true
		},
		footer: {
			style: "dark",
			copyright: "Copyright © " + new Date().getFullYear() + " TomatoCake. Built with Docusaurus."
		}
	}),

	scripts: [
		{
			src: "https://sus.tomatenkuchen.com/latest.js",
			async: true,
			defer: true
		}
	]
}

module.exports = config
