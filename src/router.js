// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/components/Home.vue'

const routes = [
  { path: '/', component: Home }
]

export default createRouter({
  history: createWebHistory(),
  routes
})