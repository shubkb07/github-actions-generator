<template>
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
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from '~/composables/useTheme'

const { isDark, isSystemTheme, currentTheme, toggleTheme } = useTheme()

const ariaLabel = computed(() =>
	`Switch to ${currentTheme.value === 'dark' ? 'light' : 'dark'} mode${isSystemTheme.value ? ' (currently using system theme)' : ''}`
)
</script>
