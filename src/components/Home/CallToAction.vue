<template>
  <section class="cta-section">
    <div class="container">
      <h2>Ready to Streamline Your Workflows?</h2>
      <p>Start building your GitHub Actions workflows visually today</p>
      <div class="cta-buttons">
        <PrimeButton
          label="Get Started Free"
          icon="pi pi-play"
          class="p-button-primary"
          size="large"
        />
        <PrimeButton
          label="Watch Demo"
          icon="pi pi-video"
          class="p-button-outlined"
          size="large"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--primary-color), #237c3c);
  text-align: center;
  color: white;
}
.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}
.cta-section .cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.cta-section .cta-buttons :deep(.p-button) {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}
.cta-section .cta-buttons :deep(.p-button).p-button-outlined {
  border-color: white;
  color: white;
}
.cta-section .cta-buttons :deep(.p-button).p-button-outlined:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .cta-section {
    padding: 4rem 1rem;
  }
  .cta-section h2 {
    font-size: 2rem;
  }
  .cta-section .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
