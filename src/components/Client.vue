<script setup>
import ProjectCarousel from "../components/ProjectCarousel.vue"
import { ref, onMounted, onUnmounted } from 'vue'
import Typed from 'typed.js';
import { onIntersect } from "../composables/onIntersect";

const projectList = [
  {title: "Nurse John Merch Store",
  desc: [
  "Shopify store for my client to sell their merchandise.",
  "Contains custom features created with Liquid, such as a custom checkout with a free shipping counter"
  ], 
  image: "NurseJohn2",
  url: "https://nursejohnn.com/",
  tagList: ['Liquid',
          'Shopify']
  }]

const observer = ref({});
const scrollRef = ref({});
const header = ref(null);
const visibility = ref('invisible');
const lineState = ref('header-line-hide');

// This is the callback being called on intersection
const onEnter = () => {
  new Typed(header.value, {
    strings: ["For Clients"],
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
      <ProjectCarousel
        :projects = projectList
        />
    </div>
  </div>
</template>

<style scoped>

</style>