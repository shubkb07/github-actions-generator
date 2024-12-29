import { createStore } from "vuex";
import axios from "axios";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "light"
    : "dark";
};

const store = createStore({
  state: {
    theme: getInitialTheme(),
    notifications: [
      "New workflow added",
      "Pipeline completed successfully",
      "New user registered",
    ],
    logged: "no",
    request_token: "",
    api_host: 'https://begag.shubkb.com/api',
    client_id: "Ov23liOpEQTs0HIPcaX2",
    client_callback: document.location.origin + "/login",
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
    SET_LOGIN_STATUS(state, { logged, request_token }) {
      state.logged = logged;
      state.request_token = request_token;
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
    async checkLogin({ commit, state }) {
      try {
        const token = document.cookie
          .split("; ")
          .find(row => row.startsWith("auth="))
          ?.split("=")[1];
        if (token) {
          const response = await axios.post(
            `${state.api_host}/auth`,
              {
              action: "check",
              token: token
            }, {
              headers: {
                Authorization: `Bearer lFMp9C1CLrsnfksN30h30aFjl9yk7ug9mHC8HwXtpU4bhVAEwReziDQxe8bQ2utQ`
              }
            }
          );
          if (response.status === "success") {
            commit("SET_LOGIN_STATUS", { logged: "yes", request_token: token });
          } else {
            commit("SET_LOGIN_STATUS", { logged: "no", request_token: "" });
          }
        } else {
          commit("SET_LOGIN_STATUS", { logged: "no", request_token: "" });
        }
      } catch (error) {
        commit("SET_LOGIN_STATUS", { logged: "no", request_token: "" });
      }
    },
  },
  getters: {
    isDarkTheme: (state) => state.theme === "dark",
    getNotifications: (state) => state.notifications,
    isLoggedIn: (state) => state.logged === "yes",
    getRequestToken: (state) => state.request_token,
    getAPIHost: (state) => state.api_host,
    getClientId: (state) => state.client_id,
    getClientCallback: (state) => state.client_callback,
  },
});

// Initialize theme and check login status
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
