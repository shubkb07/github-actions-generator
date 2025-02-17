<template>
	<header class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
		<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-6 h-[--header-height]">
			<HeaderLogo
				:title="title"
				:subtitle="subtitle"
			/>
			<!-- Menu -->
			<ClientOnly>
				<ul
					v-if="isMenuOpen || isDesktop"
					class="items-center gap-x-8 lg:flex lg:flex-row flex-col lg:static absolute top-[--header-height] left-0 right-0 bg-background/75 backdrop-blur z-40 lg:z-auto p-4 lg:p-0"
				>
					<li
						v-for="item in menu"
						:key="item.text"
						class="relative lg:border-0 border-b border-gray-200 dark:border-gray-700 w-full lg:w-auto"
					>
						<NuxtLink
							class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary w-full py-2 px-4 lg:py-0 lg:px-0"
							:to="item.url"
						>{{ item.text }}</NuxtLink>
					</li>
				</ul>
			</ClientOnly>
			<div class="flex flex-row">
				<HeaderThemeToggleButton />
				<div
					v-if="loginConfig"
					class="flex items-center lg:justify-end lg:flex-1 gap-1.5"
				>
					<NuxtLink
						v-if="!loginConfig.logged && loginConfig.signup.display"
						class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
						:to="loginConfig.signin.url"
					>
						<span>{{ loginConfig.signin.text }}</span>
					</NuxtLink>
					<NuxtLink
						v-if="!loginConfig.logged && loginConfig.signup.display"
						class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 items-center hidden lg:flex"
						:to="loginConfig.signup.url"
					>
						{{ loginConfig.signup.text }}
						<UIcon
							v-if="loginConfig.signup.icon"
							class="flex-shrink-0 h-5 w-5"
							name="heroicons:arrow-right-20-solid"
						/>
					</NuxtLink>
					<div
						v-if="loginConfig.logged && loginConfig.profile.display"
						ref="profileMenuRef"
						class="relative"
					>
						<img
							:src="loginConfig.profile.pic"
							alt="Profile Picture"
							class="w-8 h-8 rounded-full cursor-pointer select-none"
							draggable="false"
							@click="toggleProfileMenu"
						>
						<div
							v-if="isProfileMenuOpen"
							class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50"
						>
							<ul>
								<li
									v-for="link in loginConfig.profile.links"
									:key="link.text"
									class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
								>
									<NuxtLink
										:to="link.url"
										class="block text-gray-700 dark:text-gray-200 text-sm"
									>{{ link.text }}</NuxtLink>
								</li>
							</ul>
							<div class="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center">
								<img
									:src="loginConfig.profile.pic"
									alt="Profile Picture"
									class="w-8 h-8 rounded-full mr-2 select-none"
									draggable="false"
								>
								<div>
									<p class="font-semibold text-sm">
										{{ loginConfig.profile.name || loginConfig.profile.email || '@' + loginConfig.profile.username }}
									</p>
									<p
										v-if="loginConfig.profile.email && loginConfig.profile.username"
										class="text-xs text-gray-500 dark:text-gray-400"
									>
										{{ loginConfig.profile.email }}
									</p>
									<p
										v-if="loginConfig.profile.email && loginConfig.profile.username"
										class="text-xs text-gray-500 dark:text-gray-400"
									>
										{{ '@' + loginConfig.profile.username }}
									</p>
								</div>
							</div>
						</div>
					</div>
					<NuxtLink
						v-if="loginConfig.logged || !loginConfig.signup.display"
						class="ml-4 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 items-center hidden lg:flex"
						:to="loginConfig.logged ? loginConfig.onLogin.url : loginConfig.signin.url"
					>
						{{ loginConfig.logged ? loginConfig.onLogin.text : loginConfig.signin.text }}
					</NuxtLink>
				</div>
				<button
					type="button"
					class="ml-4 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
					aria-label="Open Menu"
					@click="toggleMenu"
				>
					<UIcon
						class="flex-shrink-0 h-5 w-5"
						:name="isMenuOpen ? 'heroicons:x-mark-20-solid' : 'heroicons:bars-3-20-solid'"
					/>
				</button>
			</div>
		</div>
	</header>
	<!-- Content Blur Overlay -->
	<div
		v-if="isMenuOpen && !isDesktop"
		class="fixed inset-0 bg-background/75 backdrop-blur z-30"
		@click="toggleMenu"
	/>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, computed } from 'vue'
import { useWindowSize, onClickOutside } from '@vueuse/core'

const props = defineProps({
	title: {
		type: String,
		default: 'Logo'
	},
	subtitle: {
		type: String,
		default: ''
	},
	menu: {
		type: Array,
		default: () => []
	},
	login: {
		type: [Boolean, Object],
		default: true
	}
})

const defaultLoginConfig = {
	logged: false,
	signin: {
		text: 'Sign In',
		url: '/login'
	},
	signup: {
		text: 'Sign Up',
		url: '/signup',
		display: true,
		icon: true
	},
	profile: {
		display: true,
		pic: '/logo.png',
		email: '',
		username: '',
		name: '',
		links: [
			{ text: 'Account', url: '/app/account' },
			{ text: 'Profile', url: '/app/profile' },
			{ text: 'Settings', url: '/app/settings' }
		]
	},
	onLogin: {
		text: 'Dashboard',
		url: '/dashboard',
		display: false
	}
}

const loginConfig = computed(() => {
	if (typeof props.login === 'boolean') {
		return props.login ? defaultLoginConfig : null
	}
	return { ...defaultLoginConfig, ...props.login }
})

const isMenuOpen = ref(false)
const isProfileMenuOpen = ref(false)
const { width } = useWindowSize()
const isDesktop = ref(width.value >= 1024)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}

const toggleProfileMenu = () => {
	isProfileMenuOpen.value = !isProfileMenuOpen.value
}

const handleResize = () => {
	isDesktop.value = width.value >= 1024
	if (isDesktop.value) {
		isMenuOpen.value = false
	}
}

const profileMenuRef = ref(null)
onClickOutside(profileMenuRef, () => {
	isProfileMenuOpen.value = false
})

onMounted(() => {
	window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
	window.removeEventListener('resize', handleResize)
})
</script>

<style>
:root {
	--header-height: 50px;
}
</style>
