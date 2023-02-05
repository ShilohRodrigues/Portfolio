<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Typed from 'typed.js';
import { onIntersect } from "../composables/onIntersect";
import Github from "../components/icons/Github.vue"
import Linkedin from "../components/icons/Linkedin.vue"

const observer = ref({});
const scrollRef = ref({});
const header = ref(null);
const visibility = ref('invisible');
const lineState = ref('header-line-hide');

// This is the callback being called on intersection
const onEnter = () => {
  new Typed(header.value, {
    strings: ["Get In Touch"],
    typeSpeed: 80,
    showCursor: false,
    onComplete: (self) => {
      lineState.value = 'header-line-show'
      visibility.value = 'visible';
    }
  });
};

// This is the (optional) callback being called when the element no longer intersects
const onExit = () => {
  visibility.value = 'invisible'
};
// When the component is mounted, start observing
onMounted(() => {
  observer.value = onIntersect(scrollRef.value, onEnter, onExit, true, {
    threshold: 0.6,
  });
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
  observer.value.disconnect();
});

</script>

<template>
  <div ref="scrollRef">
    <div class="h2-container">
      <h2 ref="header"></h2>
      <div class="header-line" :class="lineState"></div>
    </div>   
    <div :class="visibility" class="animate-me">
      <div class="socials">
        <a href="https://github.com/ShilohRodrigues" target="_blank">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/shiloh-rodrigues-916004118/" target="_blank">
          <Linkedin />
        </a>     
      </div>
      <div class="center-me">
        <a href="mailto:shilohrodrigues@hotmail.com" target="_blank">
          <h3>Send me an Email!</h3>
        </a>
      </div>  
    </div>
  </div>
</template>

<style scoped>
</style>