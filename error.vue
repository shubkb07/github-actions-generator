<template>
	<div class="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
		<img
			:src="error.img"
			alt="Error Image"
			class="w-full max-w-md h-auto mb-8"
		>
		<h1 class="text-4xl font-bold mb-4">
			{{ error.error_name }}
		</h1>
		<p class="text-lg mb-8">
			{{ error.description }}
		</p>
		<NuxtLink
			to="/"
			class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
		>
			Go to Home
		</NuxtLink>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { NuxtLink } from '#components'

const route = useRoute()
const errorCode = route.params.code || 404
const errors = ref({
	400: {
		error_name: 'Bad Request',
		description: 'Client sent an invalid request',
		img: 'https://media.giphy.com/media/3o7TKz50Rg6ZGK8vIc/giphy.gif'
	},
	401: {
		error_name: 'Unauthorized',
		description: 'User needs to authenticate',
		img: 'https://media.giphy.com/media/3o7TKz50Rg6ZGK8vIc/giphy.gif'
	},
	403: {
		error_name: 'Forbidden',
		description: 'User is authenticated but doesn\'t have permissions',
		img: 'https://media.giphy.com/media/3o7TKz50Rg6ZGK8vIc/giphy.gif'
	},
	404: {
		error_name: 'Not Found',
		description: 'Requested resource doesn\'t exist',
		img: 'https://media.giphy.com/media/3o7TKz50Rg6ZGK8vIc/giphy.gif'
	},
	405: {
		error_name: 'Method Not Allowed',
		description: 'HTTP method not allowed for this URL',
		img: 'https://media.giphy.com/media/3o7TKz50Rg6ZGK8vIc/giphy.gif'
	},
	408: {
		error_name: 'Request Timeout',
		description: 'Server timed out waiting for the request',
		img: 'https://media.giphy.com/media/3o7TKz50Rg6ZGK8vIc/giphy.gif'
	},
	429: {
		error_name: 'Too Many Requests',
		description: 'User has sent too many requests',
		img: 'https://media.giphy.com/media/3o7TKz50Rg6ZGK8vIc/giphy.gif'
	},
	500: {
		error_name: 'Internal Server Error',
		description: 'Generic server error',
		img: 'https://media.giphy.com/media/3o7TKz50Rg6ZGK8vIc/giphy.gif'
	},
	502: {
		error_name: 'Bad Gateway',
		description: 'Server got invalid response from upstream',
		img: 'https://media.giphy.com/media/3o7TKz50Rg6ZGK8vIc/giphy.gif'
	},
	503: {
		error_name: 'Service Unavailable',
		description: 'Server is temporarily unavailable',
		img: 'https://media.giphy.com/media/3o7TKz50Rg6ZGK8vIc/giphy.gif'
	},
	504: {
		error_name: 'Gateway Timeout',
		description: 'Server timeout from upstream service',
		img: 'https://media.giphy.com/media/3o7TKz50Rg6ZGK8vIc/giphy.gif'
	}
})
const error = errors.value[errorCode] || errors.value[404]
</script>
