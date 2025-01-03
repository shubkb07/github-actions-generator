<template>
  <div>
    <div v-if="error.statusCode === 404">
      <p>Page not found. Redirecting to home...</p>
    </div>
  </div>
</template>

<script setup>
import { useError } from 'nuxt/app'
import { useRouter } from 'vue-router'

const error = useError()
const router = useRouter()

if (error.value.statusCode === 404) {
  router.push('/')
}
</script>
