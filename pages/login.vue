<template>
	<main class="flex flex-col items-center justify-center h-screen">
		<div class="flex flex-col items-center justify-center h-screen">
			<NuxtLink
				:to="loginURL"
				class="flex items-center bg-[#24292e] text-white py-2 px-4 rounded mt-5 no-underline"
			>
				<UIcon
					class="w-5 h-5 mr-2 text-white"
					name="logos:github-icon"
				/>
				<span>Login with GitHub</span>
			</NuxtLink>
			<div v-if="loginError" class="mt-4 text-red-500">
				{{ loginError }}
			</div>
		</div>
	</main>
</template>

<script setup>
// Get the auth state
const auth = useState('auth')

// Extract login URL and error message from auth state
const loginURL = auth.value.gh_login_url
const loginError = auth.value.login_error
</script>
