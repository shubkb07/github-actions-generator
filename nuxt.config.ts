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
		'@vueuse/nuxt',
		'nuxt-link-checker',
		'nuxt-og-image',
		'nuxt-schema-org',
		'nuxt-security',
		'nuxt-seo-utils'
	],
	devtools: { enabled: true },
	compatibilityDate: '2024-11-01',
	eslint: {
		checker: true,
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
