<template>
  <div id="portfolio">
    <div class="container-fluid p-0">
        <div class="row g-0">
            <div class="col-lg-4 col-sm-6">
                <div class="portfolio-box" @click="openLightbox(0)">
                    <img class="img-fluid" src="/img/portfolio/thumbnails/1.jpg" alt="Imagen 1"/>
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">Categoryss</div>
                        <div class="project-name">prueba</div>
                    </div>
                  </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="portfolio-box" @click="openLightbox(1)">
                    <img class="img-fluid" src="/img/portfolio/thumbnails/2.jpg" alt="..." />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">Category</div>
                        <div class="project-name">Project Name</div>
                    </div>
                  </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="portfolio-box" @click="openLightbox(2)">
                    <img class="img-fluid" src="/img/portfolio/thumbnails/3.jpg" alt="..." />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">Category</div>
                        <div class="project-name">Project Name</div>
                    </div>
                  </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="portfolio-box" @click="openLightbox(3)">
                    <img class="img-fluid" src="/img/portfolio/thumbnails/4.jpg" alt="..." />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">Category</div>
                        <div class="project-name">Project Name</div>
                    </div>
                  </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="portfolio-box" @click="openLightbox(4)">
                    <img class="img-fluid" src="/img/portfolio/thumbnails/5.jpg" alt="..." />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">Category</div>
                        <div class="project-name">Project Name</div>
                    </div>
                  </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="portfolio-box" @click="openLightbox(5)">
                    <img class="img-fluid" src="/img/portfolio/thumbnails/6.jpg" alt="..." />
                    <div class="portfolio-box-caption p-3">
                        <div class="project-category text-white-50">Category</div>
                        <div class="project-name">Project Name</div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  </div>

  <vue-easy-lightbox
    :visible="visible"
    :imgs="images.map(img => img.src)"
    :index="currentIndex"
    @hide="handleHide"
  >
    <p>fghjkg</p>
  </vue-easy-lightbox>

</template>

<!-- no functional revisar -->


<script setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const visible = ref(false)
const currentIndex = ref(0)

const images = [
  { src: '/img/portfolio/fullsize/1.jpg', title: 'Título de imagen 1' },
  { src: '/img/portfolio/fullsize/2.jpg', title: 'Título de imagen 2' },
  { src: '/img/portfolio/fullsize/3.jpg', title: 'Título de imagen 3' },
  { src: '/img/portfolio/fullsize/4.jpg', title: 'Título de imagen 4' },
  { src: '/img/portfolio/fullsize/5.jpg', title: 'Título de imagen 5' },
  { src: '/img/portfolio/fullsize/6.jpg', title: 'Título de imagen 6' }
]

// const imageTitles = [
//   'Título de imagen 1',
//   'Título de imagen 2',
//   'Título de imagen 3',
//   'Título de imagen 4',
//   'Título de imagen 5',
//   'Título de imagen 6'
// ]

function openLightbox(index) {
  currentIndex.value = index
  visible.value = true
}

function handleHide() {
  visible.value = false
}


</script>