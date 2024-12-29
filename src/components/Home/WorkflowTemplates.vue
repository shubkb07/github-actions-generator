<script setup>
import PrimeCard from 'primevue/card' // Import the PrimeCard component

const templates = [
  {
    id: 1,
    name: 'Node.js CI',
    description: 'Build and test Node.js applications with npm or yarn',
    icon: 'pi pi-code',
    tags: ['nodejs', 'javascript', 'testing'],
  },
  {
    id: 2,
    name: 'Docker Build',
    description: 'Build and push Docker images to registries',
    icon: 'pi pi-box',
    tags: ['docker', 'container', 'registry'],
  },
  {
    id: 3,
    name: 'Static Site Deploy',
    description: 'Deploy static websites to GitHub Pages',
    icon: 'pi pi-globe',
    tags: ['web', 'static', 'deployment'],
  },
]
</script>

<template>
  <section class="workflow-templates">
    <div class="container">
      <h2>Popular Workflow Templates</h2>
      <p class="section-description">Start with pre-built templates for common CI/CD scenarios</p>

      <div class="grid">
        <div v-for="template in templates" :key="template.id" class="col-12 md:col-4 p-3">
          <PrimeCard class="template-card">
            <template #header>
              <i :class="[template.icon, 'template-icon']"></i>
            </template>
            <template #title>{{ template.name }}</template>
            <template #content>
              <p>{{ template.description }}</p>
              <div class="template-tags">
                <span v-for="tag in template.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
            </template>
          </PrimeCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.workflow-templates {
  padding: 4rem 2rem;
  background: var(--surface-0);
}
.workflow-templates h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}
.workflow-templates .section-description {
  text-align: center;
  color: var(--text-secondary-color);
  margin-bottom: 3rem;
  font-size: 1.2rem;
}
.workflow-templates .template-card {
  height: 100%;
  transition: transform 0.2s;
}
.workflow-templates .template-card:hover {
  transform: translateY(-5px);
}
.workflow-templates .template-card .template-icon {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}
.workflow-templates .template-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}
.workflow-templates .template-tags .tag {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
}
</style>
