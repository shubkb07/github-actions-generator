<script setup>
const socialLinks = [
  { 
    icon: 'pi pi-github',
    url: 'https://github.com',
    label: 'GitHub'
  },
  { 
    icon: 'pi pi-twitter',
    url: 'https://twitter.com',
    label: 'Twitter'
  },
  { 
    icon: 'pi pi-linkedin',
    url: 'https://linkedin.com',
    label: 'LinkedIn'
  },
  { 
    icon: 'pi pi-discord',
    url: 'https://discord.com',
    label: 'Discord'
  }
];
</script>

<template>
  <div class="social-links">
    <a v-for="link in socialLinks" 
       :key="link.url"
       :href="link.url"
       :aria-label="link.label"
       target="_blank"
       rel="noopener"
       class="social-link">
      <i :class="[link.icon]"></i>
    </a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  background: var(--surface-ground);
  color: var(--text-color-secondary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.25rem;
  position: relative;
  overflow: hidden;
  text-decoration: none; /* Remove underline */
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary-color);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-link i {
  position: relative;
  z-index: 1;
}

.social-link:hover {
  transform: translateY(-4px);
  color: var(--primary-color-text);
}

.social-link:hover::before {
  opacity: 1;
}

@media (max-width: 768px) {
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .social-link {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }
}
</style>