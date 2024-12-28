<script setup>
import { onMounted, ref } from "vue";
import lottie from "lottie-web";

const animationContainer = (ref < HTMLElement) | (null > null);

onMounted(() => {
  if (animationContainer.value) {
    lottie.loadAnimation({
      container: animationContainer.value,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "@/animations/workflow-builder.json",
    });
  }
});
</script>

<template>
  <div class="hero-section">
    <div class="grid">
      <div class="col-12 md:col-6 flex align-items-center">
        <div class="hero-content">
          <h1>Visual GitHub Actions Workflow Builder</h1>
          <p class="subtitle">
            Build CI/CD pipelines with drag-and-drop simplicity. Save hours of
            YAML configuration.
          </p>
          <PrimeButton
            label="Start Building Workflows"
            icon="pi pi-play"
            class="cta-button p-button-primary"
          />
        </div>
      </div>
      <div class="col-12 md:col-6">
        <div ref="animationContainer" class="interactive-demo"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(var(--background-light), white);
  padding: 4rem 2rem;
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
.hero-section .interactive-demo {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 1rem;
  }
  .hero-section h1 {
    font-size: 2rem;
  }
  .hero-section .interactive-demo {
    height: 300px;
  }
}
</style>
