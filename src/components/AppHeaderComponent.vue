<template>
	<div :class="['header', { 'scrolled': isScrolled }]">
		<Menubar :model="menuItems" class="header-menu">
			<template #start>
				<span class="font-bold logo">
					<span class="hidden sm:inline">GAG</span>
					<span class="inline sm:hidden">G</span>
				</span>
			</template>
			<template #end>
				<div class="header-actions">
					<ThemeToggle />
					<NotificationPanel />
					<ProfilePanel />
					<div v-if="$route.name === 'Dashboard App Edit' || $route.name === 'Dashboard App'">
						<ExportComponent />
					</div>
				</div>
			</template>
		</Menubar>
		<Toast />
	</div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Menubar from 'primevue/menubar';
import Toast from 'primevue/toast';
import ThemeToggle from './Header/ThemeToggle.vue';
import NotificationPanel from './Header/NotificationPanel.vue';
import ProfilePanel from './Header/ProfilePanel.vue';
import ExportComponent from './App/Edit/ExportComponent.vue';

export default {
	name: 'HeaderComponent',
	components: {
		Menubar,
		Toast,
		ThemeToggle,
		NotificationPanel,
		ProfilePanel,
		ExportComponent
	},
	setup() {
		const isScrolled = ref(false);
		const menuItems = ref([]);

		const handleScroll = () => {
			isScrolled.value = window.scrollY > 50;
		};

		onMounted(() => {
			window.addEventListener('scroll', handleScroll);
		});

		onUnmounted(() => {
			window.removeEventListener('scroll', handleScroll);
		});

		return {
			isScrolled,
			menuItems
		};
	}
};
</script>

<style scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
	transition: all 0.3s ease;
}

.header.scrolled {
	background-color: var(--surface-overlay);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-menu {
	margin: 10px;
	background: transparent;
	border: none;
	padding: 0.5rem 1rem;
}

.header-menu :deep(.p-menubar-root-list) {
	margin: 0;
	padding: 0;
}

.header-actions {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.header-button {
	width: 2.5rem;
	height: 2.5rem;
}

.header-button i {
	font-size: 1.2rem;
}

@media (max-width: 600px) {
	.header-actions {
		gap: 0.5rem;
	}
}
</style>