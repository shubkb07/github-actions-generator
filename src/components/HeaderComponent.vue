<template>
	<div :class="['header', { 'scrolled': isScrolled }]">
		<Menubar :model="menuItems" class="header-menu">
			<template #start>
				<span class="font-bold logo">
					<span class="hidden sm:inline">{{$route.name === 'Dashboard App Edit' ? 'G' : 'GAG'}}</span>
					<span class="inline sm:hidden">G</span>
				</span> &nbsp;&nbsp;&nbsp;&nbsp;
				<span v-if="isDashboardAppEdit" class="font-bold logo-text" contenteditable="true">App Generator</span>
			</template>
			<template #end>
				<div class="header-actions">
					<MenuLinks v-if="!isDashboard" />
					<ThemeToggle />
					<NotificationPanel v-if="logged" />
					<ProfilePanel v-if="logged" />
					<Button v-if="!logged" @click="$router.push('/login')">Login</Button>
					<Button v-if="logged && !isDashboard" @click="$router.push('/dashboard')">Dashboard</Button>
					<ExportComponent v-if="logged && isDashboardAppEdit" />
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
import MenuLinks from './Header/MenuLinks.vue';
import ExportComponent from './App/Edit/ExportComponent.vue';

export default {
	name: 'HeaderComponent',
	props: {
		logged: {
			type: Boolean,
			required: true
		},
		isDashboard: {
			type: Boolean,
			required: true
		},
		isDashboardApp: {
			type: Boolean,
			required: true
		},
		isDashboardAppEdit: {
			type: Boolean,
			required: true
		}
	},
	components: {
		Menubar,
		Toast,
		ThemeToggle,
		NotificationPanel,
		ProfilePanel,
		ExportComponent,
		MenuLinks
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
	transition: all 0.3s ease, backdrop-filter 0.3s ease;
}

.header.scrolled {
	background-color: var(--surface-overlay);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);
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