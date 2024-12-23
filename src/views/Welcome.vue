<template>
	<v-container class="fill-height d-flex align-center justify-center">
		<v-card class="pa-5" elevation="12">
			<v-card-title>
				<h1>Welcome to GitHub Actions Workflow Generator</h1>
			</v-card-title>
			<v-card-text>
				<p>Create and manage your GitHub Actions workflows with ease.</p>
			</v-card-text>
			<v-card-actions>
				<v-btn color="primary" :to="{ name: 'Dashboard' }">Get Started</v-btn>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'WelcomeComponent',
};
</script>

<style scoped>
.fill-height {
	height: 100vh;
}
</style>