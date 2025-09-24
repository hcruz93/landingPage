<template>
  <section class="page-section" id="contact">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-8 col-xl-6 text-center">
          <h2 class="mt-0">Have Questions?</h2>
          <hr class="divider" />
          <p class="text-muted mb-5">
            Send us a message and we’ll get back to you
            with all the details you need to start your course!
          </p>
        </div>
      </div>

      <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
        <div class="col-lg-6">
          <form id="contactForm" @submit.prevent="handleSubmit">
            <!-- Name input-->
            <div class="form-floating mb-3">
              <input
                v-model="form.name"
                class="form-control"
                id="name"
                type="text"
                placeholder="Enter your name..."
                required
              />
              <label for="name">Full name</label>
            </div>

            <!-- Email address input-->
            <div class="form-floating mb-3">
              <input
                v-model="form.email"
                class="form-control"
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
              <label for="email">Email address</label>
            </div>

            <!-- Phone number input-->
            <div class="form-floating mb-3">
              <input
                v-model="form.phone"
                class="form-control"
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
                required
              />
              <label for="phone">Phone number</label>
            </div>

            <!-- Message input-->
            <div class="form-floating mb-3">
              <textarea
                v-model="form.message"
                class="form-control"
                id="message"
                placeholder="Enter your message here..."
                style="height: 10rem"
                required
              ></textarea>
              <label for="message">Message</label>
            </div>

            <!-- Success message -->
            <div v-if="success" class="text-center mb-3 text-success">
              ✅ Form submission successful!
            </div>

            <!-- Error message -->
            <div v-if="error" class="text-center mb-3 text-danger">
              ❌ Error sending message!
            </div>

            <!-- Submit Button -->
            <div class="d-grid">
              <button class="btn btn-primary btn-xl" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-4 text-center mb-5 mb-lg-0">
          <i class="bi-phone fs-2 mb-3 text-muted"></i>
          <div>+52 (55) 3059 9461</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"

// Estado del formulario
const form = ref({
  name: "",
  email: "",
  phone: "",
  message: ""
})

const success = ref(false)
const error = ref(false)

const handleSubmit = async () => {
  success.value = false
  error.value = false

  // Aquí puedes enviar los datos a tu backend con fetch o axios
  if (form.value.name && form.value.email && form.value.phone && form.value.message) {
    try {
      await sendInformation()
      success.value = true
      console.log("Datos enviados:", form.value)
      // Resetear los valores del formulario
    form.value = { name: "", email: "", phone: "", message: "" }
    } catch (error) {
      console.error("Error en el envío:", error)
      error.value = true
    }
  } else {
    error.value = true
  }
}

const sendInformation = async () => {
  // Enviar la información del formulario con axios
  const response = await axios.post("http://localhost:3000/usuarios", form.value)
  console.log("Guardado en backend:", response.data)
  return response.data
}
</script>
