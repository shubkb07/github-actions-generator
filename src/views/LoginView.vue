<template>
  <main>
    <div class="login-container">
      <img src="@/assets/logo.svg" alt="Logo" class="logo" />
      <a :href="githubURL" class="github-login-button" :class="{ disabled: btnDisabled }">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          class="github-logo"
        />
        <span>Login with GitHub</span>
      </a>
    </div>
  </main>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import apiCall from '@/plugin/api'

export default {
  name: 'LoginView',
  setup() {
    const store = useStore()
    const btnDisabled = ref(true)
    const logged = store.getters.isLoggedIn
    const urlParams = new URLSearchParams(window.location.search)
    const redirectTo = urlParams.get('redirect_to') || ''
    const client_callback = document.location.origin + '/login'

    if (logged) {
      window.location.href = redirectTo || '/dashboard'
    }

    const request_state = encodeURI(
      JSON.stringify({
        state: client_callback,
        redirect_to: redirectTo,
      }),
    )
    localStorage.setItem('request_state', request_state)

    const githubURL = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=${client_callback}&scope=read:user%20user:email&state=${request_state}`

    const handleLogin = async (code) => {
      let storedState, receivedState
      try {
        storedState = JSON.parse(decodeURI(localStorage.getItem('request_state')))
        receivedState = JSON.parse(decodeURI(urlParams.get('state')))
      } catch (e) {
        console.error(e)
        window.location.href = '/login'
        return
      }

      if (storedState.state !== receivedState.state) {
        window.location.href = redirectTo ? `/login?redirect_to=${redirectTo}` : '/login'
      } else {
        const response = await apiCall('login', { gh_code: code, redirect_uri: client_callback })
        if (response.status === 'success') {
          document.cookie = `auth=${response.user_token}; path=/`
          const finalRedirectTo = receivedState.redirect_to || '/dashboard'
          window.location.href = finalRedirectTo
        } else {
          window.location.href = '/login'
        }
      }
    }

    onMounted(() => {
      const code = urlParams.get('code')
      if (code) {
        handleLogin(code)
      } else {
        btnDisabled.value = false
      }
    })

    return {
      githubURL,
      btnDisabled,
    }
  },
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
}

.github-login-button {
  display: flex;
  align-items: center;
  background-color: #24292e;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
}

.github-login-button.disabled {
  pointer-events: none;
  opacity: 0.6;
}

.github-logo {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
