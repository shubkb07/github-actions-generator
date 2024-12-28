<script setup>
const features = [
  {
    id: 1,
    title: "Visual Workflow Builder",
    description:
      "Drag-and-drop components to create GitHub Actions workflows without writing YAML",
    icon: "pi pi-pencil",
  },
  {
    id: 2,
    title: "Real-time Preview",
    description: "See your workflow changes instantly with live YAML preview",
    icon: "pi pi-eye",
  },
  {
    id: 3,
    title: "Template Library",
    description: "Choose from pre-built templates for common CI/CD scenarios",
    icon: "pi pi-book",
  },
];
</script>

<template>
  <div class="features-section">
    <div class="grid">
      <div
        v-for="feature in features"
        :key="feature.id"
        class="col-12 md:col-6 lg:col-4 p-3"
      >
        <PrimeCard class="feature-card">
          <template #header>
            <i :class="[feature.icon, 'feature-icon']"></i>
          </template>
          <template #title>
            {{ feature.title }}
          </template>
          <template #content>
            {{ feature.description }}
          </template>
        </PrimeCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features-section {
  padding: 4rem 2rem;
  background: var(--surface-0);
}
.feature-card {
  height: 100%;
  transition: transform 0.2s;
}
.feature-card:hover {
  transform: translateY(-5px);
}
.feature-card .feature-icon {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}
</style>
