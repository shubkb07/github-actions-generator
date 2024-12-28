<template>
	<main>
		<div class="logout-container">
			<div class="logout-tablet">
				<span>Logging Out...</span>
			</div>
		</div>
	</main>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import apiCall from '@/plugin/api';

export default {
	name: 'LogoutView',
	setup() {
		const store = useStore();
		const logged = store.getters.isLoggedIn;
		const redirectTo = new URLSearchParams(window.location.search).get('redirect_to');
		onMounted(async () => {
			if (logged) {
				await apiCall('logout', {logout: 'true'});
			}
			document.cookie = `auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
			window.location.href = redirectTo ? redirectTo : '/login';
		});
	}
}
</script>

<style scoped>
.logout-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

.logout-tablet {
	display: flex;
	align-items: center;
	background-color: #24292e;
	color: white;
	padding: 10px 20px;
	border-radius: 5px;
	text-decoration: none;
	margin-top: 20px;
}
</style>