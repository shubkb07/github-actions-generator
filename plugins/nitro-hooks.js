// plugins/nitro-hooks.js
export default defineNuxtPlugin((nuxtApp) => {
	// Access Nitro's hooks
	nuxtApp.hooks.hook('nitro:render:html', (html, context) => {
		// Set the Accept-CH and Permissions-Policy headers
		context.response.headers.set(
			'Accept-CH',
			'Sec-CH-UA, Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA-Model, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-Prefers-Color-Scheme, Sec-CH-UA-Arch, Sec-CH-UA-Bitness'
		)
		context.response.headers.set(
			'Permissions-Policy',
			'ch-ua=*, ch-ua-mobile=*, ch-ua-platform=*, ch-ua-model=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-prefers-color-scheme=*, ch-ua-arch=*, ch-ua-bitness=*'
		)
	})
})
