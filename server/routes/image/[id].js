export default defineEventHandler(async (event) => {
	const { id } = event.context.params

	// Extract the 's' query parameter
	const { s } = getQuery(event)

	// Validate the 'id' parameter: ensure it's numeric
	if (!id || !/^\d+$/.test(id)) {
		return sendError(
			event,
			createError({ statusCode: 400, statusMessage: 'Invalid Image ID' })
		)
	}

	// Validate the 's' parameter: ensure it's a positive integer if provided
	let sizeParam = ''
	if (s) {
		const size = parseInt(Array.isArray(s) ? s[0] : s, 10)
		if (isNaN(size) || size <= 0) {
			return sendError(
				event,
				createError({ statusCode: 400, statusMessage: 'Invalid size parameter' })
			)
		}
		sizeParam = `&s=${size}`
	}

	// Construct the GitHub avatar URL with or without the 's' parameter
	const githubAvatarUrl = `https://avatars.githubusercontent.com/u/${id}?v=4${sizeParam}`

	try {
		const res = await fetch(githubAvatarUrl)

		if (!res.ok) {
			return sendError(
				event,
				createError({
					statusCode: res.status,
					statusMessage: 'Failed to fetch image from GitHub'
				})
			)
		}

		const contentType = res.headers.get('content-type') || 'image/jpeg'
		const imageBuffer = await res.arrayBuffer()

		// Set appropriate headers
		event.res.setHeader('Content-Type', contentType)
		event.res.setHeader('Cache-Control', 'public, max-age=86400') // Cache for 1 day

		// Return the image buffer as a Node.js Buffer
		return Buffer.from(imageBuffer)
	} catch (e) {
		return sendError(
			event,
			createError({ statusCode: 500, statusMessage: 'Internal Server Error: ' + e.message })
		)
	}
})
