// composables/useAuth.js

import { computed } from 'vue'
import { useNuxtApp } from '#app'

export const useAuth = () => {
	const nuxtApp = useNuxtApp()

	// Access the provided auth data
	const auth = computed(() => nuxtApp.$auth)

	// Destructure auth properties for easy access
	const email = computed(() => auth.value.email)
	const username = computed(() => auth.value.username)
	const name = computed(() => auth.value.name)
	const logged_in = computed(() => auth.value.logged_in)

	return {
		email,
		username,
		name,
		logged_in
	}
}
