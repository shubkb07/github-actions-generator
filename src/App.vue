<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-else>
    <HeaderComponent/>
    <div class="content">
      <router-view/>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/AppFooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  setup() {
    const store = useStore();
    const loading = ref(true);

    onMounted(async () => {
      await store.dispatch('checkLogin');
      loading.value = false;
      const logged = store.getters.isLoggedIn;
      const request_token = store.getters.getRequestToken;
      console.log(logged, request_token);
    });

    return {
      loading
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
