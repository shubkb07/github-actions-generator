<template>
	<div>
		<Button icon class="p-button-rounded p-button-text header-button" @click="toggle">
			<i class="pi pi-bell"></i>
			<span v-if="notifications.length > 0" class="notification-badge">
				{{ notifications.length }}
			</span>
		</Button>

		<OverlayPanel ref="panel" :showCloseIcon="false" class="custom-panel">
			<div class="panel-header">
				<h3>Notifications</h3>
				<Button v-if="notifications.length > 0" label="Clear all" link @click="clearAll" />
			</div>
			<div class="panel-content">
				<template v-if="notifications.length > 0">
					<div v-for="(notification, index) in notifications" :key="index" class="notification-item">
						<i class="pi pi-info-circle"></i>
						<span>{{ notification }}</span>
					</div>
				</template>
				<div v-else class="empty-state">
					<i class="pi pi-bell-slash"></i>
					<p>No new notifications</p>
				</div>
			</div>
		</OverlayPanel>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';

export default {
	name: 'NotificationPanel',
	components: { Button, OverlayPanel },
	setup() {
		const store = useStore();
		const panel = ref(null);
		const notifications = computed(() => store.getters.getNotifications);

		const toggle = (event) => panel.value.toggle(event);
		const clearAll = () => {
			store.dispatch('clearNotifications');
			panel.value.hide();
		};

		return { panel, notifications, toggle, clearAll };
	}
};
</script>

<style scoped>
.notification-badge {
	position: absolute;
	top: -5px;
	right: -5px;
	background-color: var(--primary-color);
	color: var(--primary-color-text);
	border-radius: 50%;
	padding: 0.25rem 0.5rem;
	font-size: 0.75rem;
	min-width: 1.5rem;
	text-align: center;
}

.panel-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	border-bottom: 1px solid var(--surface-border);
}

.panel-content {
	max-height: 400px;
	overflow-y: auto;
	padding: 1rem;
}

.notification-item {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	padding: 0.75rem;
	border-radius: var(--border-radius);
	transition: background-color 0.2s;
}

.notification-item:hover {
	background-color: var(--surface-hover);
}

.empty-state {
	text-align: center;
	padding: 2rem;
	color: var(--text-color-secondary);
}

.empty-state i {
	font-size: 2rem;
	margin-bottom: 1rem;
}
</style>