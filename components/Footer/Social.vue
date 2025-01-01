<template>
	<div class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3">
		<NuxtLink
			v-for="(profile, index) in validProfiles"
			:key="index"
			:href="profile.url"
			class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
			rel="noopener noreferrer"
			target="_blank"
			:aria-label="profile.name"
		>
			<UIcon
				:name="profile.icon"
				class="flex-shrink-0 h-5 w-5"
				aria-hidden="true"
			/>
		</NuxtLink>
	</div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import popularProfiles from '~/assets/json/popular-profiles.json'

const props = defineProps({
	profiles: {
		type: Array,
		default: () => []
	}
})

const validProfiles = computed(() => {
	const result = []
	for (const profile of props.profiles) {
		if (result.length >= 10) break
		if (!profile.url || !/^https?:\/\//.test(profile.url)) continue

		let name = profile.name || 'Social'
		let icon = profile.icon || 'simple-icons:circle'

		if (!profile.name) {
			const found = popularProfiles.find(p => profile.url.includes(p.url))
			if (found) name = found.name
		}

		if (!profile.icon) {
			const found = popularProfiles.find(p => p.name.toLowerCase() === name.toLowerCase())
			if (found) icon = found.icon
		}

		result.push({ name, url: profile.url, icon })
	}
	return result
})
</script>
