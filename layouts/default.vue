<template>
	<div class="flex flex-col min-h-screen">
		<PageHeader
			:title="title"
			:subtitle="subtitle"
			:menu="menu"
			:login="login"
		/>
		<div class="flex-grow">
			<slot />
		</div>
		<PageFooter
			:menu="footerMenu"
			:form-title="formTitle"
			:form-placeholder="formPlaceholder"
			:form-btn="formBtn"
			:form-callback="formCallback"
			:tos-text="tosText"
			:tos-placeholders="tosPlaceholders"
			:social-profiles="socialProfiles"
		/>
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
	logged: false,
	signin: {
		text: 'Login',
		url: '/login'
	},
	signup: {
		display: false
	},
	onLogin: {
		text: 'Dashboard',
		url: '/dashboard',
		display: true
	}
})

const footerMenu = ref([
	{
		name: 'Resources',
		links: [
			{ text: 'Help center', url: '/help-center' },
			{ text: 'Docs', url: '/docs' },
			{ text: 'Roadmap', url: '/roadmap' },
			{ text: 'Changelog', url: '/changelog' }
		]
	},
	{
		name: 'Features',
		links: [
			{ text: 'Affiliates', url: '/affiliates' },
			{ text: 'Portal', url: '/portal' },
			{ text: 'Jobs', url: '/jobs' },
			{ text: 'Sponsors', url: '/sponsors' }
		]
	},
	{
		name: 'Company',
		links: [
			{ text: 'About', url: '/about' },
			{ text: 'Pricing', url: '/pricing' },
			{ text: 'Careers', url: '/careers' },
			{ text: 'Blog', url: '/blog' }
		]
	}
])

const formTitle = ref('Subscribe to our newsletter')
const formPlaceholder = ref('Enter your email')
const formBtn = ref('Subscribe')
const formCallback = (email) => {
	console.log(email)
}

const tosText = ref('Copyright © {{current-year}}. All rights reserved.')
const tosPlaceholders = ref({})

const socialProfiles = ref([
	{ name: 'GitHub', url: 'https://github.com/shubkb.com' },
	{ url: 'https://facebook.com/shbham07kb' },
	{ url: 'https://twitter.com/shubham' },
	{ url: 'https://x.com/shubham' }
])
</script>
