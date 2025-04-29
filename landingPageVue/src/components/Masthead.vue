<template>
  <!-- Masthead-->
  <header class="masthead">
    <div class="container px-4 px-lg-5 h-100">
        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-8 align-self-end">
                <h1 class="text-white font-weight-bold">{{ titles.main }}</h1>
                <hr class="divider" />
            </div>
            <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 mb-5">{{ titles.subtitle }}</p>
                <a class="btn btn-primary btn-xl" href="#about">{{ titles.buttonText }}</a>
            </div>
        </div>
    </div>
  </header>
</template>

<script setup>
import { reactive } from 'vue';

// Agrupar los títulos en un objeto reactivo
const titles = reactive({
  main: "Learn, Grow, Succeed",
  subtitle: "Access quality courses and transform your professional career. It's time to invest in yourself!",
  buttonText: "Explore Our Courses"
})
</script>

<style scoped>
/* Puedes agregar estilos aquí o importarlos si vienen de Bootstrap */
</style>