// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				modules: [
				 '@nuxt/content',
				 '@nuxt/eslint',
				 '@nuxt/fonts',
				 '@nuxt/image',
				 '@nuxt/test-utils',
				 '@nuxt/ui',
				 '@nuxtjs/device',
				 '@nuxtjs/fontaine',
				 '@nuxtjs/partytown',
				 '@nuxtjs/robots',
				 '@nuxtjs/sitemap',
				 '@nuxtjs/stylelint-module',
				 '@vite-pwa/nuxt',
				 '@vueuse/nuxt',
				 'nuxt-link-checker',
				 'nuxt-og-image',
				 'nuxt-schema-org',
				 'nuxt-security',
				 'nuxt-seo-utils'
				],
				plugins: [
								{ src: '~/plugins/nitro-hooks.js', mode: 'server' },
								{ src: '~/plugins/auth.server.js', mode: 'server' },
								{ src: '~/plugins/theme.server.js', mode: 'server' },
								{ src: '~/plugins/theme.client.js', mode: 'client' }
				],

				devtools: { enabled: true },
				runtimeConfig: {
								apiUrl: process.env.API_URL || '',
								bearerToken: process.env.BEARER_TOKEN || '',
								ghClientId: process.env.GH_CLIENT_ID || ''
				},	routeRules: {
								'/api/search.json': { prerender: true },
								'/docs': { redirect: '/docs/getting-started', prerender: false }
				},
				compatibilityDate: '2024-11-01',
				eslint: {
								// checker: true,
								config: {
												stylistic: {
																commaDangle: 'never',
																braceStyle: '1tbs',
																indent: 'tab'
												}
								}
				},
				fonts: {
								defaults: {
												weights: [400],
												styles: ['normal', 'italic'],
												subsets: [
																'cyrillic-ext',
																'cyrillic',
																'greek-ext',
																'greek',
																'vietnamese',
																'latin-ext',
																'latin'
												]
								}
				},
				image: {
								inject: true
				}
})