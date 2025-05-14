<template>
  <section class="page-section" id="services">
    <div class="container px-4 px-lg-5">
        <h2 class="text-center mt-0">At Your Service</h2>
        <hr class="divider" />
        <div class="row gx-4 gx-lg-5">
            <div  v-for="(logo, index) in arrayLogos" :key="index" class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                    <div class="mb-2"><i :class="logo.logo"></i></div>
                    <h3 class="h4 mb-2">{{ logo.title }}</h3>
                    <p class="text-muted mb-0">{{ logo.description }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>

</template>


<script setup>
import { ref } from 'vue'

const arrayLogos = [
  {logo:'bi-gem fs-1 text-primary', title:'Sturdy Themes', description:'Our themes are updated regularly to keep them bug free!'},
  {logo:'bi-laptop fs-1 text-primary', title:'Up to Date', description:'All dependencies are kept current to keep things fresh.'},    
  {logo:'bi-globe fs-1 text-primary', title:'Ready to Publish', description:'You can use this design as is, or you can make changes!'},
  {logo:'bi-heart fs-1 text-primary', title:'Made with Love', description:'Is it really open source if it\'s not made with love?'}
]
</script>