// plugins/auth.js
import { defineNuxtPlugin, useRuntimeConfig, useCookie, useState, useRoute, useRequestURL, navigateTo } from '#app'

export default defineNuxtPlugin(async () => {
	const auth = useState('auth', () => ({
		userpic: null,
		email: null,
		username: null,
		name: null,
		logged_in: false,
		worked: false,
		gh_login_url: ''
	}))

	// get param 'code' from url
	const route = useRoute()
	const code = route.query.code
	const authCookie = useCookie('auth')
	// get current request URL without query params
	const currentRequestURL = useRequestURL().origin + useRequestURL().pathname
	const config = useRuntimeConfig()
	const apiUrl = config.apiUrl // Private runtime config
	const bearerToken = config.bearerToken // Private runtime config

	if (useRequestURL().pathname === '/logout') {
		authCookie.value = ''
		navigateTo('/login')
	}

	const body = {
		action: 'login'
	}
	if (authCookie.value) {
		body.token = authCookie.value
	}
	if (code && useRequestURL().pathname === '/login') {
		body.code = code
		body.redirect_uri = currentRequestURL
	} else if (useRequestURL().pathname === '/login') {
		const redirect_to = route.query.redirect_to
		auth.value.gh_login_url = 'https://github.com/login/oauth/authorize?client_id=' + process.env.GH_CLIENT_ID
		if (redirect_to) {
			auth.value.gh_login_url += `&state=${encodeURIComponent(redirect_to)}`
		}
	}

	if ((body.token || body.code) && !auth.value.worked) {
		auth.value.worked = true
		try {
			// Fetch auth data from the API
			const response = await $fetch(`${apiUrl}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `${bearerToken}`,
					'Origin': currentRequestURL
				},
				credentials: 'include', // Include cookies in the request
				body: JSON.stringify(body)
			})

			if (response.status === 'success') {
				// If auth.user_token is set, then set user cookie auth to its value and redirect.
				if (response.user_token) {
					authCookie.value = response.user_token
				}
				if (useRequestURL().pathname === '/login') {
					const state = route.query.state
					const redirect_to = route.query.redirect_to
					if (state || redirect_to) {
						const target = state ? decodeURIComponent(state) : redirect_to
						if (target.startsWith('http')) {
							navigateTo(target, { external: true })
						} else {
							navigateTo(target)
						}
					} else {
						navigateTo('/app')
					}
				}
				auth.value.userpic = '/image/' + response.gh_id + '?s=100'
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
