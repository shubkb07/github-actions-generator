<template>
  <main>
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <WorkflowTemplates />
      <CallToAction />
    </main>
</template>

<script>
import HeroSection from '@/components/Home/HeroSection.vue';
import FeaturesGrid from '@/components/Home/FeaturesGrid.vue';
import HowItWorks from '@/components/Home/HowItWorks.vue';
import WorkflowTemplates from '@/components/Home/WorkflowTemplates.vue';
import CallToAction from '@/components/Home/CallToAction.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    FeaturesGrid,
    HowItWorks,
    WorkflowTemplates,
    CallToAction
  }
}
</script>
