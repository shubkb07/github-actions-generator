<template>
	<header class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
	  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-6 h-[--header-height]">
		<div class="lg:flex-1 flex items-center gap-1.5">
		  <NuxtLink
			aria-current="page"
			to="/"
			class="router-link-active router-link-exact-active flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5"
			aria-label="Nuxt UI Pro"
		  >
			{{ title }}
			<span
			  v-if="subtitle"
			  class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 gap-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25 mb-0.5"
			>
			  <span>{{ subtitle }}</span>
			</span>
		  </NuxtLink>
		</div>
		
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
		  <button
			type="button"
			class="mx-5 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
			:aria-label="ariaLabel"
			@click="toggleTheme"
		  >
			<ClientOnly fallback-tag="span">
			  <UIcon
				:name="isDark ? 'heroicons:sun-20-solid' : 'heroicons:moon-20-solid'"
				class="flex-shrink-0 h-5 w-5"
				aria-hidden="true"
			  />
			  <template #fallback>
				<UIcon
				  :name="currentTheme === 'dark' ? 'heroicons:sun-20-solid' : 'heroicons:moon-20-solid'"
				  class="flex-shrink-0 h-5 w-5"
				  aria-hidden="true"
				/>
			  </template>
			</ClientOnly>
		  </button>
		  
		  <div
			v-if="loginConfig"
			class="flex items-center lg:justify-end lg:flex-1 gap-1.5"
		  >
			<NuxtLink
			  class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
			  :to="loginConfig.signin.url"
			>
			  <span>{{ loginConfig.signin.text }}</span>
			</NuxtLink>
			<NuxtLink
			  v-if="loginConfig.signup.display"
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
	  
	  <!-- Content Blur Overlay -->
	  <div
		v-if="isMenuOpen && !isDesktop"
		class="fixed inset-0 bg-background/75 backdrop-blur z-30"
		@click="toggleMenu"
	  />
	</header>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, defineProps, computed } from 'vue'
  import { useWindowSize } from '@vueuse/core'
  import { useTheme } from '~/composables/useTheme'
  
  const props = defineProps({
	title: {
	  type: String,
	  default: 'Nuxt UI Pro'
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
	signin: {
	  text: 'Sign In',
	  url: '/login'
	},
	signup: {
	  text: 'Sign Up',
	  url: '/signup',
	  display: true,
	  icon: true
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
  
  const { isDark, isSystemTheme, currentTheme, toggleTheme } = useTheme()
  
  const ariaLabel = computed(() =>
	`Switch to ${currentTheme.value === 'dark' ? 'light' : 'dark'} mode${isSystemTheme.value ? ' (currently using system theme)' : ''}`
  )
  </script>
  
  <style>
  :root {
	--header-height: 50px;
  }
  </style>