<template>
  <nav class="navbar">
    <div class="logo">H&V EVENTS & CELEBRATIONS</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Blogs</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  background: #fff8f0;
  font-family: 'Playfair Display', serif;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  text-decoration: none;
  color: #000;
}
</style>