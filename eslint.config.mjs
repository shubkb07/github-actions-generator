// @ts-check
import vitestPlugin from 'eslint-plugin-vitest'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	plugins: {
		vitest: vitestPlugin
	},
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-object-type': 'off'
	}
})
