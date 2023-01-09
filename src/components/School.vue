<script setup>
import ProjectCarousel from "../components/ProjectCarousel.vue"
import { ref, onMounted, onUnmounted } from 'vue'
import Typed from 'typed.js';
import { onIntersect } from "../composables/onIntersect";

const projectList = [
  {title: "Mock Grocery Store",
  desc: [
  "Mock grocery store website with a back-end written in PHP.",
  "Contains user authentication with a users database.",
  "Contains a functional products and orders database.",
  "Has full back-end controls only accessible by an admin user, such as the ability to add or edit products & orders."
  ],
  image: "ConcordiaFoods",
  tagList: ['PHP',
            'SQL']
  }]

const observer = ref({});
const scrollRef = ref({});
const header = ref(null);
const visibility = ref('invisible');
const lineState = ref('header-line-hide');

// This is the callback being called on intersection
const onEnter = () => {
  new Typed(header.value, {
    strings: ["For School"],
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
    threshold: 0.2,
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