<template>
	<div class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8">
		<div
			v-for="(section, index) in limitedMenu"
			:key="index"
		>
			<h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">
				{{ section.name }}
			</h3>
			<ul
				role="list"
				class="mt-6 space-y-4"
			>
				<li
					v-for="(link, linkIndex) in section.links.slice(0, 10)"
					:key="linkIndex"
				>
					<NuxtLink
						class="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
						:to="link.url"
					>
						{{ link.text }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
	menu: {
		type: Array,
		default: () => []
	}
})

const limitedMenu = computed(() => {
	return props.menu.slice(0, 3).map(section => ({
		...section,
		links: section.links.slice(0, 10)
	}))
})
</script>
