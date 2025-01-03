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
		</div>
	</main>
</template>

<script setup>
const loginURL = useState('auth').value.gh_login_url
console.log(loginURL)
</script>
