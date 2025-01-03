<template>
	<header class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
		<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-6 h-[--header-height]">
			<HeaderLogo
				:title="title"
				:subtitle="subtitle"
			/>
			<div class="flex flex-row">
				<HeaderThemeToggleButton />
			</div>
		</div>
	</header>
</template>

<script setup>
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

<style>
:root {
	--header-height: 50px;
}
</style>
