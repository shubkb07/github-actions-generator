<script setup>
const footerLinks = [
  { 
    title: 'Product', 
    items: [
      { label: 'Features', url: '#' },
      { label: 'Templates', url: '#' },
      { label: 'Enterprise', url: '#' }
    ]
  },
  { 
    title: 'Resources',
    items: [
      { label: 'Documentation', url: '#' },
      { label: 'Community', url: '#' },
      { label: 'Blog', url: '#' }
    ]
  },
  { 
    title: 'Company',
    items: [
      { label: 'About', url: '#' },
      { label: 'Careers', url: '#' },
      { label: 'Contact', url: '#' }
    ]
  }
];
</script>

<template>
  <div class="footer-links">
    <div v-for="section in footerLinks" 
         :key="section.title" 
         class="footer-section">
      <h4 class="section-title">{{ section.title }}</h4>
      <ul class="link-list">
        <li v-for="item in section.items" 
            :key="item.label">
          <a :href="item.url" class="footer-link">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--surface-900);
  margin-bottom: 1.25rem;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-list li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: var(--text-color-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
  position: relative;
}

.footer-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: var(--primary-color);
  transition: width 0.2s ease;
}

.footer-link:hover {
  color: var(--primary-color);
}

.footer-link:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .section-title {
    font-size: 1rem;
  }

  .link-list li {
    margin-bottom: 0.5rem;
  }

  .footer-link {
    font-size: 0.875rem;
  }
}
</style>