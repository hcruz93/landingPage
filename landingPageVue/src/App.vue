<template>
  <div class="layout">
    <!-- Header superior -->
    <Navbar />
    <div class="content">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
// import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
</style>
