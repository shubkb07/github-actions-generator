<script setup>
const steps = [
  {
    id: 1,
    title: "Choose a Template",
    description: "Start with a pre-built workflow or create from scratch",
    icon: "pi pi-file",
  },
  {
    id: 2,
    title: "Customize Workflow",
    description: "Drag and drop actions, set triggers, and configure steps",
    icon: "pi pi-cog",
  },
  {
    id: 3,
    title: "Deploy & Monitor",
    description: "Deploy your workflow and monitor its execution",
    icon: "pi pi-chart-line",
  },
];
</script>

<template>
  <section class="how-it-works">
    <div class="container">
      <h2>How It Works</h2>
      <p class="section-description">
        Build your workflow in three simple steps
      </p>

      <div class="grid">
        <div v-for="step in steps" :key="step.id" class="col-12 md:col-4">
          <div class="step-card">
            <i :class="[step.icon, 'step-icon']"></i>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-it-works {
  padding: 4rem 2rem;
  background: var(--background-light);
}
.how-it-works h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}
.how-it-works .section-description {
  text-align: center;
  color: var(--text-secondary-color);
  margin-bottom: 3rem;
  font-size: 1.2rem;
}
.how-it-works .step-card {
  text-align: center;
  padding: 2rem;
}
.how-it-works .step-card .step-icon {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}
.how-it-works .step-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}
.how-it-works .step-card p {
  color: var(--text-secondary-color);
  line-height: 1.6;
}
</style>
