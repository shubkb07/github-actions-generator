// plugins/auth.js
import { defineNuxtPlugin, useRuntimeConfig, useCookie, useState } from '#app'

export default defineNuxtPlugin(async () => {
	const auth = useState('auth', () => ({
		userpic: null,
		email: null,
		username: null,
		name: null,
		logged_in: false
	}))

	const authCookie = useCookie('auth')
	const config = useRuntimeConfig()
	const apiUrl = config.apiUrl // Private runtime config
	const bearerToken = config.bearerToken // Private runtime config

	if (authCookie.value && !auth.value.logged_in) {
		try {
			// Fetch auth data from the API
			const response = await $fetch(`${apiUrl}/auth`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `${bearerToken}`
				},
				credentials: 'include', // Include cookies in the request
				body: JSON.stringify({
					action: 'check',
					token: authCookie.value
				})
			})

			if (response.status === 'success') {
				auth.value.userpic = '/image/' + response.gh_id
				auth.value.email = response.email
				auth.value.username = response.username
				auth.value.name = response.name
				auth.value.logged_in = true
			}
		} catch (error) {
			console.error(`[auth.js] ${error.message}`)
		}
	}
})
