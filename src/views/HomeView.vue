<script setup>
import { ref, onMounted } from 'vue'
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Client from "../components/Client.vue"
import School from "../components/School.vue"
import Fun from "../components/Fun.vue"
import Contact from "../components/Contact.vue"
</script>

<template>
  <main>
    <section class="home-page" id="home">
      <Home />
    </section>
    <section id="about">  
      <About />   
    </section>
    <section id="client">
      <Client />
    </section>
    <section id="fun">
      <Fun />
    </section>
    <section id="school">
      <School />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </main>
</template>

<style scoped>
  main {
    width: 90vw;
    max-width: 1300px;
    margin: auto;
  }
  .home-page {
    display: grid;
    place-items: center;
    height: 100vh;
    min-height: 550px;
    padding-top: var(--nav-height);
  }
  section {
    padding: 100px 0;
  }
</style>
