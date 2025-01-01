// plugins/theme.client.js
export default defineNuxtPlugin(() => {
	const cookie = useCookie('theme')
	const colorMode = useColorMode()

	// Function to handle system theme changes when no cookie is set
	const handleSystemThemeChange = () => {
		if (!cookie.value) {
			const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
			colorMode.preference = isDarkMode ? 'dark' : 'light'
			colorMode.value = isDarkMode ? 'dark' : 'light' // Add this line
			document.documentElement.classList.remove('dark', 'light')
			document.documentElement.classList.add(isDarkMode ? 'dark' : 'light')
		}
	}

	// Set up system theme change listener if no cookie
	if (!cookie.value) {
		window.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', handleSystemThemeChange)

		// Initial check
		handleSystemThemeChange()
	}

	return {
		provide: {
			toggleTheme: () => {
				const newTheme = colorMode.value === 'dark' ? 'light' : 'dark'
				// Only set cookie when user manually toggles
				cookie.value = newTheme
				colorMode.preference = newTheme
				colorMode.value = newTheme // Add this line
				document.documentElement.classList.remove('dark', 'light')
				document.documentElement.classList.add(newTheme)
			}
		}
	}
})
