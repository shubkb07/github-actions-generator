<template>
	<main>
		<div class="login-container">
			<img src="@/assets/logo.png" alt="Logo" class="logo">
			<a :href="githubURL" class="github-login-button">
				<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" class="github-logo">
				<span>Login with GitHub</span>
			</a>
		</div>
	</main>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';
import apiCall from '@/plugin/api';

export default {
	name: 'LoginView',
	setup() {
		const store = useStore();
		const btnDisabled = ref(true);
		const client_id = store.getters.getClientId;
		const client_callback = store.getters.getClientCallback;
		const githubURL = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${client_callback}&scope=read:user%20user:email&state=RANDOM_STATE_STRING`;
		onMounted(async () => {
			// if code is in URL, then call the login function.
			const urlParams = new URLSearchParams(window.location.search);
			const code = urlParams.get('code');
			if (code) {
				await apiCall('login', {'gh_code':code});
			}
			btnDisabled.value = false;
		});
		return {
			githubURL
		}
	}
}
</script>

<style scoped>
.login-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

.logo {
	position: absolute;
	top: 20px;
	left: 20px;
	width: 100px;
}

.github-login-button {
	display: flex;
	align-items: center;
	background-color: #24292e;
	color: white;
	padding: 10px 20px;
	border-radius: 5px;
	text-decoration: none;
	margin-top: 20px;
}

.github-logo {
	width: 20px;
	height: 20px;
	margin-right: 10px;
}
</style>