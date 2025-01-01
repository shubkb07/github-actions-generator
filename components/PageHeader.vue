<template>
	<header class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
		<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-6 h-[--header-height]">
			<HeaderLogo
				:title="title"
				:subtitle="subtitle"
			/>
			<!-- Desktop Menu -->
			<ClientOnly>
				<ul
					v-if="isMenuOpen || isDesktop"
					class="items-center gap-x-8 hidden lg:flex"
				>
					<li
						v-for="item in menu"
						:key="item.text"
						class="relative"
					>
						<NuxtLink
							class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
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
					<NuxtLink
						v-if="loginConfig.logged || !loginConfig.signup.display"
						class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 items-center hidden lg:flex"
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
		<!-- Mobile Menu -->
		<ClientOnly>
			<div
				v-if="isMenuOpen && !isDesktop"
				class="absolute top-[--header-height] left-0 right-0 bg-background/75 backdrop-blur z-40 flex flex-col items-center gap-y-4 p-4"
			>
				<ul class="flex flex-col items-center gap-y-4 mt-4 w-full border-t border-gray-200 dark:border-gray-700">
					<li
						v-for="item in menu"
						:key="item.text"
						class="relative w-full border-b border-gray-200 dark:border-gray-700"
					>
						<NuxtLink
							class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary w-full py-2 px-4"
							:to="item.url"
						>{{ item.text }}</NuxtLink>
					</li>
				</ul>
			</div>
		</ClientOnly>
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
import { useWindowSize } from '@vueuse/core'

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
const { width } = useWindowSize()
const isDesktop = ref(width.value >= 1024)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}

const handleResize = () => {
	isDesktop.value = width.value >= 1024
	if (isDesktop.value) {
		isMenuOpen.value = false
	}
}

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
