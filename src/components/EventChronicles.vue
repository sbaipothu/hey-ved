<template>
  <section class="chronicles">
    <h2>EVENT CHRONICLES</h2>
    <div class="gallery">
      <img v-for="(img, i) in images" :src="img" :key="i" alt="Event" class="responsive-img"/>
    </div>
    <a class="more-link">CLICK HERE FOR MORE</a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: ["/img1.jpg", "/img2.jpg", "/img3.jpg"]
    }
  }
}
</script>

<style scoped>
.chronicles {
  background: #fff8f0;
  padding: 2rem;
  text-align: center;
}
.gallery {
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
}
img {
  width: 30%;
  border-radius: 10px;
}
.more-link {
  color: #a26d2c;
  font-weight: bold;
}

.image-wrapper {
  width: 30%;
  max-width: 400px; /* adjust as needed */
  margin: auto;
}

.responsive-img {
  width: 100%;
  height: auto;
  object-fit: cover; /* use 'contain' or 'cover' as needed */
  border-radius: 10px;
}
</style>