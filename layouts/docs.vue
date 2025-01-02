<template>
	<div class="flex flex-col min-h-screen">
		<DocsHeader />
		<div class="flex-grow">
			<slot />
		</div>
		<DocsFooter
			:tos-text="tosText"
			:tos-placeholders="tosPlaceholders"
			:social-profiles="socialProfiles"
		/>
	</div>
</template>

<script setup>
const tosText = ref('Copyright © {{current-year}}. All rights reserved.')
const tosPlaceholders = ref({})

const socialProfiles = ref([
	{ name: 'GitHub', url: 'https://github.com/shubkb.com' },
	{ url: 'https://facebook.com/shbham07kb' },
	{ url: 'https://twitter.com/shubham' },
	{ url: 'https://x.com/shubham' }
])
</script>
