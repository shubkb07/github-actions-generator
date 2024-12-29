<script setup>
import PrimeButton from 'primevue/button' // Import the PrimeButton component
</script>

<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1>Visual GitHub Actions Workflow Builder</h1>
      <p class="subtitle">
        Build CI/CD pipelines with drag-and-drop simplicity. Save hours of YAML configuration.
      </p>
      <PrimeButton
        label="Start Building Workflows"
        icon="pi pi-play"
        class="cta-button p-button-primary"
      />
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(var(--background-light), white);
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensure it takes at least the full viewport height */
  text-align: center;
}
.hero-section .hero-content {
  margin-bottom: 2rem;
}
.hero-section h1 {
  font-size: 3rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  line-height: 1.2;
}
.hero-section .subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary-color);
  margin-bottom: 2rem;
}
.hero-section .cta-button {
  font-size: 1.2rem;
  padding: 1rem 2rem;
}
@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 1rem;
  }
  .hero-section h1 {
    font-size: 2rem;
  }
}
</style>
