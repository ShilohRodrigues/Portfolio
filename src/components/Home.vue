<script setup>
import { ref, onMounted } from "vue";
import Typed from 'typed.js';
import Github from "../components/icons/Github.vue"
import Linkedin from "../components/icons/Linkedin.vue"
import Insta from "../components/icons/Insta.vue"

const name = ref(null);
const title = ref(null);
const doneTyping = ref(false);

onMounted(() => {
  new Typed(name.value, {
    strings: ["Shiloh Rodrigues"],
    typeSpeed: 60,
    showCursor: false,
    onComplete: (self) => {
      new Typed(title.value, {
        strings: ["Computer Science Student"],
        typeSpeed: 14,
        showCursor: false,
        onComplete: (self) => {
          doneTyping.value = true;
        }
      });
    }
  });
});
</script>

<template>
  <div class="home">
    <h1 ref="name"></h1>
    <h3 ref="title" style="text-align:center;"></h3>
    <div class="socials">
      <a v-if="doneTyping" href="https://github.com/ShilohRodrigues" target="_blank">
        <Github />
      </a>
      <a v-if="doneTyping" href="https://www.linkedin.com/in/shiloh-rodrigues-916004118/" target="_blank">
        <Linkedin />
      </a>
      <a v-if="doneTyping" href="https://www.instagram.com/shilohrodrigues/" target="_blank">
        <Insta />
      </a>      
    </div>
  </div>
</template>

<style scoped>

</style>