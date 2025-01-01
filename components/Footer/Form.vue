<template>
	<div class="mt-10 xl:mt-0">
		<form>
			<div class="flex content-center items-center justify-between text-sm">
				<label
					for="newsletter"
					class="block font-medium text-gray-700 dark:text-gray-200"
				>{{ title }}</label>
			</div>
			<div class="relative mt-3">
				<div class="relative max-w-sm">
					<input
						id="newsletter"
						type="email"
						required
						:placeholder="placeholder"
						class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input placeholder-gray-400 dark:placeholder-gray-500 text-base px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 pe-12 rounded-full"
						autocomplete="off"
					>
					<span class="absolute inset-y-0 end-0 flex items-center px-3.5">
						<button
							type="submit"
							class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 aria-disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 dark:aria-disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center"
							@click.prevent="callback"
						><span>{{ btn }}</span></button>
					</span>
				</div>
			</div>
		</form>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'

const _props = defineProps({
	title: {
		type: String,
		default: 'Subscribe to our newsletter'
	},
	placeholder: {
		type: String,
		default: 'Enter your email'
	},
	btn: {
		type: String,
		default: 'Subscribe'
	},
	callback: {
		type: Function,
		required: true
	}
})
</script>
