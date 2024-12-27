<template>
	<div>
		<Button icon class="p-button-rounded p-button-text header-button" @click="toggle">
			<i class="pi pi-bell"></i>
			<span v-if="notifications.length > 0" class="notification-badge">
				{{ notifications.length }}
			</span>
		</Button>

		<Menu ref="notificationMenu" :model="menuItems" class="md:w-60" :popup="true">
            <template #start>
                <div class="panel-header">
                    <h3>Notifications</h3>
                    <Button v-if="notifications.length > 0" label="Clear all" link @click="clearAll" />
                </div>
            </template>
            <template #item="{ item, props }">
                <div v-if="notifications.length > 0" class="notification-item" v-bind="props">
                    <i class="pi pi-info-circle"></i>
                    <span>{{ item.label }}</span>
                </div>
                <div v-else class="empty-state">
                    <i class="pi pi-bell-slash"></i>
                    <p>No new notifications</p>
                </div>
            </template>
        </Menu>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Button from 'primevue/button';
import Menu from 'primevue/menu'; // Ensure Menu is imported from PrimeVue

const store = useStore();
const notificationMenu = ref(null);
const notifications = computed(() => store.getters.getNotifications);

const menuItems = computed(() => notifications.value.map(notification => ({
    label: notification
})));

const toggle = (event) => {
    notificationMenu.value.toggle(event);
};

const clearAll = () => {
    store.dispatch('clearNotifications');
    notificationMenu.value.hide();
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