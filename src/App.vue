<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue"
import Hamburger from "../src/components/icons/Hamburger.vue"
import Close from "../src/components/icons/Close.vue"

const menuState = ref("");
const burgerState = ref("");
const closeState = ref("");

const openMenu = () => {
  if (menuState.value == "") {
    menuState.value = "show-nav";
    burgerState.value = "hide-burger";
    closeState.value = "close-animate"
  }
  else {
    menuState.value = "";
    burgerState.value = "";
    closeState.value = ""
  }
};

</script>

<template>
  <header id="navBar" class="nav-top">
    <a class="hamburger" :class="burgerState" @click="openMenu">
      <Hamburger />
    </a>
    <nav :class="menuState">
      <a class="close" :class="closeState" @click="openMenu">
        <Close />
      </a>
      <RouterLink to="/#home">Home</RouterLink>
      <RouterLink to="/#about">About</RouterLink>
      <a class="dropdown">Projects
        <div class="dropdown-items">
          <RouterLink class="dropdown-item" to="/#client">For Clients</RouterLink>
          <RouterLink class="dropdown-item" to="/#fun">For Fun</RouterLink>
          <RouterLink class="dropdown-item" to="/#school">For School</RouterLink>
        </div>
      </a>
      <RouterLink to="/#contact">Get In Touch</RouterLink>
      <a href="./ShilohRodriguesCV_tex.pdf" target="_blank">Resume</a>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    transition: all 0.2s;
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
      background-color: var(--bg);
    }
    nav {
      display: flex;
      justify-content: flex-start;
      max-width: 1300px;
      width: 90vw;
      margin: auto;
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
    .dropdown-items {
      position: absolute;
      padding: 0 2rem !important;
      transform: translateX(-2rem);
      box-shadow: 0 10px 30px -10px var(--black);
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
    .dropdown:hover {
      height: calc(var(--nav-height) * 1.5) !important;
    }
    .dropdown-items {
      display: none;
      flex-direction: column;
      background-color: var(--bg);
    }
    .dropdown-item {
      padding: 0 !important;
    }
  }

  /* Mobile styles */
  @media only screen and (max-width: 692px) {
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
      background-color: var(--bg);
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
