import { createStore } from "vuex";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const store = createStore({
  state: {
    theme: getInitialTheme(),
    notifications: [
      "New workflow added",
      "Pipeline completed successfully",
      "New user registered",
    ],
  },
  mutations: {
    TOGGLE_THEME(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
      document.documentElement.setAttribute("data-theme", state.theme);
    },
    CLEAR_NOTIFICATIONS(state) {
      state.notifications = [];
    },
    ADD_NOTIFICATION(state, notification) {
      state.notifications.push(notification);
    },
    SET_NOTIFICATIONS(state, notifications) {
      state.notifications = notifications;
    },
  },
  actions: {
    toggleTheme({ commit }) {
      commit("TOGGLE_THEME");
    },
    clearNotifications({ commit }) {
      commit("CLEAR_NOTIFICATIONS");
    },
    addNotification({ commit }, notification) {
      commit("ADD_NOTIFICATION", notification);
    },
    setNotifications({ commit }, notifications) {
      commit("SET_NOTIFICATIONS", notifications);
    },
  },
  getters: {
    isDarkTheme: (state) => state.theme === "dark",
    getNotifications: (state) => state.notifications,
  },
});

// Initialize theme
if (typeof window !== "undefined") {
  // Set initial theme
  document.documentElement.setAttribute("data-theme", store.state.theme);

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light";
        store.state.theme = newTheme;
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    });
}

export default store;
