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
  {
    logo:'bi-gem fs-1 text-primary', 
    title:'Quality Courses', 
    description:'Our courses are designed and updated regularly to give you the best learning experience.'
  },
  {
    logo:'bi-laptop fs-1 text-primary', 
    title:'Up to Date', 
    description:'Our courses are constantly updated so you can learn the latest technologies and methods.'
  },    
  {
    logo:'bi-globe fs-1 text-primary', 
    title:'Ready to Learn', 
    description:'Start studying right away, at your own pace, from any device.'
  },
  {
    logo:'bi-heart fs-1 text-primary', 
    title:'Made for You', 
    description:'Each course is carefully designed with your growth and professional future in mind.'
  }
]
</script>