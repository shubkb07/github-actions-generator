// composables/useTheme.js
export const useTheme = () => {
	const colorMode = useColorMode()
	const cookie = useCookie('theme')
	const { $toggleTheme } = useNuxtApp()

	// Make isDark reactive to both value and preference
	const isDark = computed(() => {
		if (cookie.value) {
			return cookie.value === 'dark'
		}
		return colorMode.value === 'dark'
	})

	const isSystemTheme = computed(() => !cookie.value)

	// Get current system theme
	const systemTheme = computed(() => {
		if (import.meta.client) {
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		}
		// For SSR, check headers if available
		if (import.meta.server) {
			const headers = useRequestHeaders()
			const prefersDark = headers['sec-ch-prefers-color-scheme']
			if (prefersDark !== undefined) {
				return prefersDark === 'dark' ? 'dark' : 'light'
			}
		}
		return 'dark' // Default for SSR
	})

	// Current effective theme
	const currentTheme = computed(() => {
		if (cookie.value) {
			return cookie.value
		}
		return systemTheme.value
	})

	return {
		isDark,
		isSystemTheme,
		currentTheme,
		toggleTheme: $toggleTheme
	}
}
