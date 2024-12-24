<template>
	<div>
		<Avatar :image="userImage" size="normal" shape="circle" class="cursor-pointer" @click="toggle" />

		<OverlayPanel ref="panel" :showCloseIcon="false" class="custom-panel profile-panel">
			<div class="profile-header">
				<Avatar :image="userImage" size="large" shape="circle" />
				<div class="profile-info">
					<h3>{{ userName }}</h3>
					<p>{{ userEmail }}</p>
				</div>
			</div>
			<div class="profile-actions">
				<Button label="View Profile" icon="pi pi-user" text class="w-full text-left" @click="goToProfile" />
				<Button label="Sign out" icon="pi pi-sign-out" text class="w-full text-left" @click="signOut" />
			</div>
		</OverlayPanel>
	</div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';

export default {
	name: 'ProfilePanel',
	components: { Avatar, Button, OverlayPanel },
	setup() {
		const router = useRouter();
		const panel = ref(null);

		// Mock user data - replace with actual user data
		const userImage = "https://i.pravatar.cc/300";
		const userName = "John Doe";
		const userEmail = "john.doe@example.com";

		const toggle = (event) => panel.value.toggle(event);
		const goToProfile = () => {
			router.push('/profile');
			panel.value.hide();
		};
		const signOut = () => {
			router.push('/login');
			panel.value.hide();
		};

		return {
			panel,
			userImage,
			userName,
			userEmail,
			toggle,
			goToProfile,
			signOut
		};
	}
};
</script>

<style scoped>
.profile-panel {
	min-width: 280px;
}

.profile-header {
	padding: 1.5rem;
	text-align: center;
	border-bottom: 1px solid var(--surface-border);
}

.profile-info {
	margin-top: 1rem;
}

.profile-info h3 {
	margin: 0;
	font-size: 1.1rem;
}

.profile-info p {
	margin: 0.25rem 0 0;
	color: var(--text-color-secondary);
	font-size: 0.9rem;
}

.profile-actions {
	padding: 0.5rem;
}

.profile-actions :deep(.p-button) {
	margin: 0.25rem 0;
	justify-content: flex-start;
}
</style>