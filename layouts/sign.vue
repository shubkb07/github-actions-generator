<template>
	<div class="flex flex-col min-h-screen">
		<SignHeader
			:title="title"
			:subtitle="subtitle"
			:menu="menu"
			:login="login"
		/>
		<div class="flex-grow">
			<slot />
		</div>
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const auth = useState('auth')

const title = ref('Nuxt UI Pro')
const subtitle = ref('')
const menu = ref([
	{ text: 'Docs', url: '/docs' },
	{ text: 'Pricing', url: '/pricing' },
	{ text: 'Blog', url: '/blog' }
])
const login = ref({
	logged: auth.value.logged_in,
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
	},
	profile: {
		display: true,
		pic: auth.value.userpic,
		email: auth.value.email,
		username: auth.value.username,
		name: auth.value.name,
		links: [
			{ text: 'Account', url: '/app/account' },
			{ text: 'Profile', url: '/app/profile' },
			{ text: 'Settings', url: '/app/settings' }
		]
	}
})
</script>
