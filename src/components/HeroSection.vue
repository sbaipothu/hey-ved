<template>
  <section class="hero">
    <div class="hero-text">
      <h1>LUXURY EVENT MANAGEMENT,<br /> PERSONALIZED TO YOUR THOUGHTS INTO REALITY!</h1>
      <button @click="showPopup = true">RESERVE NOW →</button>
    </div>
    <img src="/hero.jpg" alt="Luxury Event" />
    <ReserveNowPopup :show="showPopup" @close="showPopup = false" @submitted="showPopup = false" />
  </section>
</template>

<script>
import ReserveNowPopup from './ReserveNowPopup.vue'
export default {
  components: { ReserveNowPopup },
  data() {
    return {
      showPopup: false
    }
  }
}
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff8f0;
  padding: 2rem;
}
.hero-text h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
}
button {
  background: #a26d2c;
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  margin-top: 1rem;
  font-family: 'Playfair Display', serif;
  cursor: pointer;
}
img {
  width: 40%;
  border-radius: 12px;
}
</style>