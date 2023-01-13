<script setup>
import { ref, onMounted, inject } from 'vue'
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Projects from "../components/Projects.vue"
import Contact from "../components/Contact.vue"

const onMouseMove = inject("mouseEvent");
const x = inject('xPos');
const y = inject('yPos');
const lightMode = inject('lightMode');

const colorCheckbox = ref(null);
const colorToggle = e => {
  if (colorCheckbox.value.checked) {
    window.addEventListener('mousemove', onMouseMove);
  }
  else {
    x.value = 0;
    y.value = 0;
    window.removeEventListener('mousemove', onMouseMove);
  }
}

const lightCheckbox = ref(null);
const lightModeToggle = e => {
  if (lightCheckbox.value.checked) {
    lightMode(true);
  }
  else {
    lightMode(false);
  }
}

</script>

<template>
  <main>  
    <div class="switches">
      <div class="switch-container">
        <p>Color Effect --> </p>
        <label class="switch">
          <input ref="colorCheckbox" type="checkbox" checked @change="colorToggle">
          <span class="slider round"></span>
        </label>
      </div> 
      <div class="switch-container">
        <p>Light Mode --> </p>
        <label class="switch">
          <input ref="lightCheckbox" type="checkbox" @change="lightModeToggle">
          <span class="slider round"></span>
        </label>
      </div>  
    </div>
    <section class="home-page" id="home">
      <Home />
    </section>
    <section id="about">  
      <About />   
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <p class="info">Made with Vue.js</p>
  </main>
</template>

<style scoped>
main {
  width: 90vw;
  max-width: 1300px;
  margin: auto;
  position: relative;
  background-color: inherit;
}
.home-page {
  display: grid;
  place-items: center;
  height: 100vh;
  min-height: 550px;
  padding-top: var(--nav-height);
}
.info {
  position: absolute;
  bottom: 1rem;
  right: 0;
}
section {
  padding: 100px 0;
  background-color: inherit;
}

.switches {
  display: grid;
  position: absolute;
  top: var(--nav-height);
  right: 0;
  width: 100%;
}
.switch-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.9rem;
}
.switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 23.5px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: var(--slider-size);
  width: var(--slider-size);
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(var(--slider-size));
  -ms-transform: translateX(var(--slider-size));
  transform: translateX(var(--slider-size));
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* Mobile styles */
@media only screen and (max-width: 692px) {
  .switches {
    top: 1rem;
  }
}

</style>
