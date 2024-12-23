<template>
  <v-app>
    <!-- Header -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>GitHub Actions Workflow Generator</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch v-model="isDark" label="Dark Mode"></v-switch>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- Add more navigation items as needed -->
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <!-- Router View -->
      <router-view />
      
      <!-- Snackbar for Feedback -->
      <v-snackbar v-model="snackbar" timeout="3000">
        Workflow saved successfully!
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>
    </v-main>

    <!-- Footer -->
    <v-footer app padless>
      <v-col class="text-center" cols="12">
        © 2024 Your Name
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      snackbar: false,
      drawer: false, // Controls the navigation drawer
      isDark: false, // Controls dark mode
    };
  },
  watch: {
    isDark(val) {
      this.$vuetify.theme.global.name.value = val ? 'dark' : 'light';
    },
  },
  methods: {
    showMessage() {
      this.snackbar = true;
    },
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
}
</style>
