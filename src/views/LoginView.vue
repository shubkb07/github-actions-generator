<template>
	<main>
		<div class="login-container">
			<img src="@/assets/logo.svg" alt="Logo" class="logo">
			<a :href="githubURL" class="github-login-button" :class="{ disabled: btnDisabled }">
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
		const logged = store.getters.isLoggedIn;
		const client_id = store.getters.getClientId;
		const client_callback = store.getters.getClientCallback;
		const githubURL = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${client_callback}&scope=read:user%20user:email&state=RANDOM_STATE_STRING`;
		const redirectTo = new URLSearchParams(window.location.search).get('redirect_to');
		if (logged) {
			window.location.href = redirectTo ? redirectTo : '/dashboard';
		}
		onMounted(async () => {
			// if code is in URL, then call the login function.
			const urlParams = new URLSearchParams(window.location.search);
			const code = urlParams.get('code');
			if (code) {
				const response = await apiCall('login', {'gh_code':code, 'redirect_uri':client_callback});
				if(response.status === 'success' && response.data.status === 'success') {
					// set browser cookie and redirect to dashboard
					console.log(response.data);
					document.cookie = `auth=${response.data.user_token}; path=/`;
					window.location.href = '/dashboard';
				} else{
					console.log('Error in login');
					// Redirect to login page
					window.location.href = redirectTo ? redirectTo : '/dashboard';
				}
			} else {
				btnDisabled.value = false;
			}
		});
		return {
			githubURL,
			btnDisabled
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

.github-login-button.disabled {
	pointer-events: none;
	opacity: 0.6;
}

.github-logo {
	width: 20px;
	height: 20px;
	margin-right: 10px;
}
</style>