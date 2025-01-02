export default defineEventHandler(async (event) => {
	return sendError(
		event,
		createError({
			statusCode: 400,
			statusMessage: 'Image ID is required. Usage: /image/{id}'
		})
	)
})
