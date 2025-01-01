<template>
	<div class="lg:flex-1 flex items-center gap-1.5">
		<NuxtLink
			aria-current="page"
			to="/"
			class="router-link-active router-link-exact-active flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5"
			:aria-label="title"
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
</template>

<script setup>
import { defineProps } from 'vue'

const _props = defineProps({
	title: {
		type: String,
		default: 'Logo'
	},
	subtitle: {
		type: String,
		default: ''
	}
})
</script>
