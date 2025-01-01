<template>
	<p class="text-gray-500 dark:text-gray-400 text-sm flex justify-center">
		<span
			v-for="(part, index) in processedTextParts"
			:key="index"
		>
			<span v-if="part.type === 'text'">{{ part.content }}</span>
			<span v-else>{{ part.content }}</span>
		</span>
	</p>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
	text: {
		type: String,
		default: 'Copyright © {{current-year}}. All rights reserved.'
	},
	placeholders: {
		type: Object,
		default: () => ({})
	}
})

const currentYear = new Date().getFullYear()

const processedTextParts = computed(() => {
	let text = props.text.replace('{{current-year}}', currentYear)
	for (const [key, value] of Object.entries(props.placeholders)) {
		text = text.replace(`{{${key}}}`, value)
	}

	const parts = text.split(/({{[^}]+}})/g).map((part) => {
		if (part.startsWith('{{') && part.endsWith('}}')) {
			const key = part.slice(2, -2)
			return { type: 'html', content: props.placeholders[key] || '' }
		}
		return { type: 'text', content: part }
	})

	return parts
})
</script>
