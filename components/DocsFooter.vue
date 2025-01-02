<template>
	<footer class="relative">
		<div class="border-t border-gray-200 dark:border-gray-800">
			<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3">
				<FooterSocial :profiles="socialProfiles" />
				<div class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center" />
				<FooterTOS
					:text="tosText"
					:placeholders="tosPlaceholders"
				/>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { defineProps } from 'vue'

const _props = defineProps({
	tosText: {
		type: String,
		default: 'Copyright © {{current-year}}. All rights reserved.'
	},
	tosPlaceholders: {
		type: Object,
		default: () => ({})
	},
	socialProfiles: {
		type: Array,
		default: () => []
	}
})
</script>
