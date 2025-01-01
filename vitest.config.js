import { defineVitestConfig } from '@nuxt/test-utils/config'
import vue from '@vitejs/plugin-vue'

export default defineVitestConfig({
	plugins: [vue()],
	test: {
		globals: true,
		environment: 'nuxt'
	},
	resolve: {
		extensions: ['.mjs', '.js', '.json']
	},
	server: {
		fs: {
			allow: ['..']
		}
	}
})
