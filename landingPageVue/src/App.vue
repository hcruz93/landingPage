<template>
  <div class="layout">
    <!-- Header superior -->
    <Navbar />
    <div class="content">
      <RouterView />
    </div>
    <!-- Footer inferior -->
    <Footer />
  </div>
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  // import { RouterLink, RouterView } from 'vue-router'
  import { onMounted } from 'vue'
  // import SimpleLightbox from 'simplelightbox'
  // import 'simplelightbox/dist/simple-lightbox.min.css'
  import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Esto importa Bootstrap JS

  onMounted(() => {
    const navbarShrink = () => {
      const navbarCollapsible = document.querySelector('#mainNav')
      if (!navbarCollapsible) return
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
      } else {
        navbarCollapsible.classList.add('navbar-shrink')
      }
    }

    navbarShrink()
    document.addEventListener('scroll', navbarShrink)

    const mainNav = document.querySelector('#mainNav')
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
      })
    }

    const navbarToggler = document.querySelector('.navbar-toggler')
    const responsiveNavItems = [...document.querySelectorAll('#navbarResponsive .nav-link')]
    responsiveNavItems.forEach(item => {
      item.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click()
        }
      })
    })

    // new SimpleLightbox({
    //   elements: '#portfolio a.portfolio-box'
    // })
  })

</script>


<style scoped>
</style>
