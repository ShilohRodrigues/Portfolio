<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted, onUnmounted, provide } from "vue"
import Hamburger from "../src/components/icons/Hamburger.vue"
import Close from "../src/components/icons/Close.vue"

//// For hiding the navigation on scroll
onMounted(() => {
  window.addEventListener('scroll', onScroll);
  window.addEventListener('mousemove', onMouseMove);
}) 
const navStyle = ref("nav-top");
let lastScrollY = window.scrollY;

const onScroll = () => {
  if (window.scrollY == 0) {
    navStyle.value = "nav-top";
  }
  else if (lastScrollY < window.scrollY) {
    navStyle.value = "nav-top nav-hidden";
  } else {
    navStyle.value = "";
  }
  lastScrollY = window.scrollY;
}

//// For opening and closing the navigation in mobile
const menuState = ref("");
const burgerState = ref("");
const closeState = ref("");

const toggleMenu = () => {
  if (menuState.value == "") {
    menuState.value = "show-nav";
    burgerState.value = "hide-burger";
    closeState.value = "close-animate"
  }
  else {
    menuState.value = "";
    burgerState.value = "";
    closeState.value = "";
  }
};

//// For light / dark mode
const z = ref(12); //12 is default for dark mode
const root = document.querySelector(':root');

//state == true for light mode
const lightMode = (state) => {
  if (state) {
    z.value = 80;
    root.style.setProperty("--text", "#000");
    root.style.setProperty("--blue-highlight", "#6752A1");
    root.style.setProperty("--highlight", "#6752A1");
  }
  else {
    z.value = 12;
    root.style.setProperty("--text", "#fff");
    root.style.setProperty("--blue-highlight", "#7BDCF0");
    root.style.setProperty("--highlight", "#EEE8AA");
  }
}
provide('lightMode', lightMode);

//// For mouse move animation
const x = ref(0);
const y = ref(0);
const onMouseMove = (e) => {
  x.value = ((e.clientX * 360) / window.innerWidth);
  y.value = ((e.clientY / window.innerHeight) * 100);
}
provide('xPos', x);
provide('yPos', y);
provide('mouseEvent', onMouseMove);

</script>

<template>
  <div
    class="app-wrapper" 
    :style="{ backgroundColor: `hsl(${x}, ${y}%, ${z}%)` }">
    <header id="navBar" :class="navStyle">
    <a class="hamburger" :class="burgerState" @click="toggleMenu">
      <Hamburger />
    </a>
    <nav :class="menuState">
      <a class="close" :class="closeState" @click="toggleMenu">
        <Close />
      </a>
      <RouterLink to="/#home" @click="toggleMenu">Home</RouterLink>
      <RouterLink to="/#about" @click="toggleMenu">About</RouterLink>
      <RouterLink to="/#projects" @click="toggleMenu">Projects</RouterLink>
      <RouterLink to="/#contact" @click="toggleMenu">Get In Touch</RouterLink>
      <a href="./ShilohRodriguesCV_tex.pdf" target="_blank" @click="toggleMenu">Resume</a>
    </nav>
  </header>
    <RouterView />
  </div>
</template>

<style scoped>
  .app-wrapper {
    transition: 0.1s background-color ease;
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    transition: transform 0.4s;
  }
  nav a {
    padding-right: 2rem; 
    line-height: var(--nav-height);
  }
  nav a:hover {
    color: var(--primary);
  }
  .isActive {
    color: var(--primary) !important;
  }
  /* Desktop Styles */
  @media only screen and (min-width: 693px) {
    .hamburger, .close {
      display: none;
    }
    header {
      width: 100%;
      height: var(--nav-height);
      box-shadow: 0 10px 30px -10px var(--black);
      background-color: inherit;
    }
    nav {
      display: flex;
      justify-content: flex-start;
      max-width: 1300px;
      width: 90vw;
      margin: auto;
      background-color: inherit;
    }
    nav a:not(:nth-child(2)) {
      padding-left: 2rem;
    }
    nav a:not(:nth-last-child(-n+2)):not(.dropdown-item):after {
      content: ">";
      position: relative;
      right: -2rem;
      color: var(--arrow);
    }
    nav a:last-child:not(.dropdown-item) {
      color: var(--primary);
      margin-left: auto;
      padding-right: 0;
    }
    nav a:last-child:hover:not(.dropdown-item) {
      color: var(--text);
    }
    .nav-top {
      box-shadow: none;
    }
    .nav-hidden {
      transform: translateY(calc(-1 * var(--nav-height)));
      box-shadow: none;
    }
    .dropdown {
      background-color: inherit;
    }
    .dropdown-items {
      display: none;
      flex-direction: column;
      position: absolute;
      padding: 0 2rem !important;
      transform: translateX(-2rem);
      box-shadow: 0 10px 30px -10px var(--black);
      background-color: inherit;
    }
    .dropdown-item:before {
      content: ">";
      position: relative;
      left: -1rem;
      color: var(--arrow);
    }
    .dropdown:hover .dropdown-items {
      display: flex;
    }
    .dropdown-item {
      padding: 0 !important;
    }
  }
  /* Mobile styles */
  @media only screen and (max-width: 692px) {
    header {
      background-color: inherit;
    }
    nav {
      width: 0;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      position: fixed;
      white-space: nowrap;
      top: 0;
      left: 0;
      height: 100vh;
      font-size: 1.3rem;
      background-color: inherit;
      box-shadow: 0 10px 30px -10px var(--black);
      transition: width 0.75s;
    }
    .hamburger, .close {
      display: block;
      padding: 1rem;
    }
    .close {
      width: fit-content;
      align-self: flex-end;
      line-height: unset;
      text-align: end;
      transition: transform 0.75s;
    }
    .close-animate {
      transform: rotate(360deg);
    }
    .show-nav {
      width: max(50vw, 300px);
    }
    .hide-burger {
      display: none;
    }
    nav a:not(:first-of-type:not(.dropdown-item)):before {
      content: ">";
      position: relative;
      color: var(--arrow);
      padding: 1rem;
    }
    .dropdown-items {
      display: none;
      flex-direction: column;
      font-size: 1.2rem;
      transform: translateX(2rem);
    }
    .dropdown:hover .dropdown-items {
      display: flex;
    }
  }

</style>
