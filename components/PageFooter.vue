<template>
	<footer class="relative">
		<div class="border-t border-gray-200 dark:border-gray-800">
			<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-16">
				<div class="xl:grid xl:grid-cols-3 xl:gap-8">
					<FooterMenu :menu="menu" />
					<FooterForm
						:title="formTitle"
						:placeholder="formPlaceholder"
						:btn="formBtn"
						:callback="formCallback"
					/>
				</div>
			</div>
		</div>
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
import FooterMenu from './Footer/Menu.vue'
import FooterForm from './Footer/Form.vue'
import FooterTOS from './Footer/TOS.vue'
import FooterSocial from './Footer/Social.vue'

const _props = defineProps({
	menu: {
		type: Array,
		default: () => []
	},
	formTitle: {
		type: String,
		default: 'Subscribe to our newsletter'
	},
	formPlaceholder: {
		type: String,
		default: 'Enter your email'
	},
	formBtn: {
		type: String,
		default: 'Subscribe'
	},
	formCallback: {
		type: Function,
		required: true
	},
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
