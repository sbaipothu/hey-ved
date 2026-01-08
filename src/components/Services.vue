<template>
  <section class="services">
    <div class="service-card" v-for="(s, i) in services" :key="i">
      <h3>{{ s.title }}</h3>
      <p>{{ s.desc }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'LOGISTICS',
          desc: 'Our logistics team ensures your food arrives on time, every time...'
        },
        {
          title: 'CRM',
          desc: 'Our CRM team ensures seamless communication and personalized service...'
        },
        {
          title: 'F&B',
          desc: 'Our Food and Beverages team crafts exquisite flavors with precision...'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  background: #fefaf6;
}
.service-card {
  width: 30%;
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  font-family: 'Georgia', serif;
}
</style>