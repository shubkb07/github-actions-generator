// plugins/theme.server.js
export default defineNuxtPlugin(async (nuxtApp) => {
	const cookie = useCookie('theme')
	const colorMode = useColorMode()

	// Function to set theme without creating cookie
	const setTheme = (theme) => {
		colorMode.preference = theme
		colorMode.value = theme // Add this line to ensure immediate value update
		nuxtApp.vueApp.provide('theme', theme)
	}

	// If cookie exists, it takes precedence
	if (cookie.value) {
		setTheme(cookie.value)
		return
	}

	// Check system preference if no cookie
	if (import.meta.server) {
		const headers = useRequestHeaders()
		const prefersDark = headers['sec-ch-prefers-color-scheme']
		if (prefersDark !== undefined) {
			setTheme(prefersDark === 'dark' ? 'dark' : 'light')
			return
		}
	}

	// Default to dark if no preference detected
	setTheme('dark')
})
