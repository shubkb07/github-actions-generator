<template>
	<div>
		<PageHeader
			:title="title"
			:subtitle="subtitle"
			:menu="menu"
			:login="login"
		/>
		<slot />
		<!-- <PageFooter /> -->
	</div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('Nuxt UI Pro')
const subtitle = ref('')
const menu = ref([
	{ text: 'Docs', url: '/docs' },
	{ text: 'Pricing', url: '/pricing' },
	{ text: 'Blog', url: '/blog' }
])
const login = ref({
	signin: {
		text: 'Login',
		url: '/login'
	},
	signup: {
		display: false
	}
})
</script>
