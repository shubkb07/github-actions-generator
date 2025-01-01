export default defineNuxtRouteMiddleware((to) => {
	// Check if the current route is in the docs section
	if (to.path.startsWith('/docs')) {
		// Set the layout to 'docs'
		setPageLayout('docs')
	} else if (to.path.startsWith('/blog')) {
		// Set the layout to 'blog'
		setPageLayout('blog')
	} else if (to.path.startsWith('/app')) {
		// Set the layout to 'app'
		setPageLayout('app')
	} else {
		// Set the layout to 'default'
		setPageLayout('default')
	}
})
