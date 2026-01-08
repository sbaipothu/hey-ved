<template>
  <div>
    <HeroSection />
    <Services />
    <EventChronicles />
    <ContactUs />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import Services from '../components/Services.vue'
import EventChronicles from '../components/EventChronicles.vue'
import ContactUs from '../components/ContactUs.vue'

export default {
  components: { HeroSection, Services, EventChronicles, ContactUs }
}
</script>