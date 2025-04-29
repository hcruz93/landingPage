<template>
  <div id="portfolio">
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div v-for="(imageThub, index) in imagesThumbnails" :key="index" class="col-lg-4 col-sm-6"> 
          <div class="portfolio-box" @click="openLightbox(index)">
            <img class="img-fluid" :src="imageThub.src" alt="Imagen 1"/>
            <div class="portfolio-box-caption">
              <div class="project-category text-white-50">Categoria</div>
              <div class="project-name">{{ imageThub.title }}</div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>

  <vue-easy-lightbox
    :visible="visible"
    :imgs="imagesFullzise.map(img => img.src)"
    :index="currentIndex"
    @hide="handleHide"
  />
</template>



<script setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'  // Importa el componente de lightbox (Solo sirve en este componente)

const visible = ref(false)
const currentIndex = ref(0)

const imagesFullzise = [
  { src: '/img/portfolio/fullsize/1.jpg', title: 'Deportes' },
  { src: '/img/portfolio/fullsize/2.jpg', title: 'Economía' },
  { src: '/img/portfolio/fullsize/3.jpg', title: 'Fotografía' },
  { src: '/img/portfolio/fullsize/4.jpg', title: 'Salud' },
  { src: '/img/portfolio/fullsize/5.jpg', title: 'Medicina' },
  { src: '/img/portfolio/fullsize/6.jpg', title: 'Herramientas' }
]
const imagesThumbnails = [
  { src: '/img/portfolio/thumbnails/1.jpg', title: 'Deportes' },
  { src: '/img/portfolio/thumbnails/2.jpg', title: 'Economía' },
  { src: '/img/portfolio/thumbnails/3.jpg', title: 'Fotografía' },
  { src: '/img/portfolio/thumbnails/4.jpg', title: 'Salud' },
  { src: '/img/portfolio/thumbnails/5.jpg', title: 'Medicina' },
  { src: '/img/portfolio/thumbnails/6.jpg', title: 'Herramientas' }
]

// Funcion para abrir el lightbox se activa con el @click en la imagen
function openLightbox(index) {
  currentIndex.value = index
  visible.value = true
}

// Funcion para cerrar el lightbox lo ejecuta el componente vue-easy-lightbox (@hide)
function handleHide() {
  visible.value = false
}
</script>

<style scoped>
</style>