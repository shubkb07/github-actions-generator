<template>
	<Button icon class="p-button-rounded p-button-text header-button" @click="toggleTheme">
		<i :class="['pi', isDark ? 'pi-sun' : 'pi-moon']"></i>
	</Button>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Button from 'primevue/button';

export default {
	name: 'ThemeToggle',
	components: { Button },
	setup() {
		const store = useStore();
		const isDark = computed(() => store.getters.isDarkTheme);
		const toggleTheme = () => {
			store.dispatch('toggleTheme')
			document.documentElement.classList.toggle('my-app-dark');
		};
		isDark.value && document.documentElement.classList.add('my-app-dark');
		return { isDark, toggleTheme };
	}
};
</script>