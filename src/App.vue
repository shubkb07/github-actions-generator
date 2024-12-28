<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-else>
    {{ isDashboard && !logged ? $router.push('/login') : ''}}
    <div v-if="$route.name !== 'Login'">
      <HeaderComponent :logged=logged :isDashboard=isDashboard :isDashboardApp=isDashboardApp :isDashboardAppEdit=isDashboardAppEdit />
      <div class="content">
        <router-view />
      </div>
    <FooterComponent :logged=logged :isDashboard=isDashboard :isDashboardApp=isDashboardApp :isDashboardAppEdit=isDashboardAppEdit />
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const loading = ref(true);
    const logged = ref(false);
    const request_token = ref('');
    const isDashboard = computed(() => route.name && route.name.startsWith('Dashboard'));
    const isDashboardApp = computed(() => route.name && route.name.startsWith('Dashboard App'));
    const isDashboardAppEdit = computed(() => route.name && route.name.startsWith('Dashboard App Edit'));

    onMounted(async () => {
      await store.dispatch('checkLogin');
      loading.value = false;
      logged.value = store.getters.isLoggedIn;
      request_token.value = store.getters.getRequestToken;
    });

    return {
      loading,
      logged,
      request_token,
      isDashboard,
      isDashboardApp,
      isDashboardAppEdit
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.loading {
  text-align: center;
  margin-top: 20px;
}

.content {
  top: 60px;
  padding: 0px;
  margin: 0px;
  position: relative;
}
</style>
